/**
 * `feature-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  steps: {
    populate: "*",
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    // Apply populate configuration to the query
    if (!ctx.query.populate) {
      ctx.query.populate = populate;
    } else {
      // Merge with existing populate if it exists
      ctx.query.populate = {
        ...ctx.query.populate,
        ...populate,
      };
    }

    await next();
  };
};
