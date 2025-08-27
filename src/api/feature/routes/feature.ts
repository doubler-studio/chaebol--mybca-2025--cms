/**
 * feature router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::feature.feature", {
  config: {
    findOne: {
      middlewares: ["api::feature.feature-populate"],
    },
  },
});
