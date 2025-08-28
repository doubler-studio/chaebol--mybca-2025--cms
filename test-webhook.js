// Test script to verify webhook integration
const WEBHOOK_URL =
  process.env.WEBHOOK_URL || "http://localhost:3000/api/webhook";
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "your-secret-key";

async function testWebhook() {
  const payload = {
    event: "content.updated",
    model: "feature",
    entry: {
      id: 1,
      slug: "test-feature",
    },
    revalidation: {
      type: "all",
    },
    timestamp: Date.now(),
  };

  const body = JSON.stringify(payload);
  const signature = `sha256=${Buffer.from(WEBHOOK_SECRET + body)
    .toString("hex")
    .substring(0, 64)}`;

  try {
    console.log("Sending test webhook...");
    console.log("URL:", WEBHOOK_URL);
    console.log("Payload:", payload);

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-signature": signature,
      },
      body,
    });

    console.log("Response status:", response.status);
    const result = await response.json();
    console.log("Response:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

testWebhook();
