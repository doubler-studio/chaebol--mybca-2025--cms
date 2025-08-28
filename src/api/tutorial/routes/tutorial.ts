/**
 * tutorial router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::tutorial.tutorial", {
  config: {
    findOne: {
      middlewares: ["api::tutorial.tutorial-populate"],
    },
  },
});
