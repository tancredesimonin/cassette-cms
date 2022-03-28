/**
 * domain service.
 */

const { createCoreService } = require("@strapi/strapi").factories;
import axios from "axios";

module.exports = createCoreService("api::domain.domain", ({ strapi }) => ({









  async create(domain) {
    return await axios.post(
      `https://api.vercel.com/v8/projects/${process.env.VERCEL_PROJECT_ID}/domains?teamId=${process.env.VERCEL_TEAM_ID}`,
      {
        name: domain,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_AUTH_BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
  },

  async delete(domain) { 
    return await axios.delete(
      `https://api.vercel.com/v8/projects/${process.env.VERCEL_PROJECT_ID}/domains/${domain}?teamId=${process.env.VERCEL_TEAM_ID}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_AUTH_BEARER_TOKEN}`,
        },
      }
    );
  },
}));
