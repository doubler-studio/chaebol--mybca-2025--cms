import type { Core } from "@strapi/strapi";

// Correct population for dynamic zones - must use "*" for polymorphic structures
const populate = {
  body: {
    populate: "*", // This will populate all components in the dynamic zone
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
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

    strapi.log.info("Feature populate middleware applied.");

    await next();
  };
};
