import type { Core } from "@strapi/strapi";

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
      },
      afterUpdate: async (event) => {
        const { result } = event;
        const { slug, id } = result;
        console.log("update", slug, id);
      },
      afterDelete: async (event) => {
        const { result } = event;
        const { slug, id } = result;
        console.log("delete", slug, id);
      },
    });
  },
};
