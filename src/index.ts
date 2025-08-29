import type { Core } from "@strapi/strapi";

// Webhook configuration
const WEBHOOK_URL =
  process.env.WEBHOOK_URL || "http://localhost:3000/api/webhook";
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "your-secret-key";

// Utility function to send webhook
async function sendWebhook(event: string, model: string, entry: any) {
  try {
    const payload = {
      event,
      model,
      entry: {
        id: entry.id,
        slug: entry.slug,
      },
      revalidation: {
        type: "all" as const,
      },
      timestamp: Date.now(),
    };

    const body = JSON.stringify(payload);
    const signature = `sha256=${Buffer.from(WEBHOOK_SECRET + body)
      .toString("hex")
      .substring(0, 64)}`;

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-signature": signature,
      },
      body,
    });

    if (!response.ok) {
      console.error(
        `Webhook failed: ${response.status} ${response.statusText}`
      );
      return false;
    }

    const result = await response.json();
    console.log(`Webhook sent successfully for ${event}:`, result);
    return true;
  } catch (error) {
    console.error(`Error sending webhook for ${event}:`, error);
    return false;
  }
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ["api::feature.feature"],
      afterCreate: async (event) => {
        const { result } = event;
        const { slug, id } = result;
        console.log("publish/create", slug, id);

        // Send webhook for content creation
        await sendWebhook("content.created", "feature", result);
      },
      afterUpdate: async (event) => {
        const { result } = event;
        const { slug, id } = result;
        console.log("update", slug, id);

        // Send webhook for content update
        await sendWebhook("content.updated", "feature", result);
      },
      afterDelete: async (event) => {
        const { result } = event;
        const { slug, id } = result;
        console.log("delete", slug, id);

        // Send webhook for content deletion
        await sendWebhook("content.deleted", "feature", result);
      },
    });

    // Also subscribe to tutorial model if it exists
    strapi.db.lifecycles.subscribe({
      models: ["api::tutorial.tutorial"],
      afterCreate: async (event) => {
        const { result } = event;
        console.log("tutorial created", result.id);
        await sendWebhook("content.created", "tutorial", result);
      },
      afterUpdate: async (event) => {
        const { result } = event;
        console.log("tutorial updated", result.id);
        await sendWebhook("content.updated", "tutorial", result);
      },
      afterDelete: async (event) => {
        const { result } = event;
        console.log("tutorial deleted", result.id);
        await sendWebhook("content.deleted", "tutorial", result);
      },
    });
  },
};
