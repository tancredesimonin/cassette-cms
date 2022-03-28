"use strict";
/**
 * domain service.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { createCoreService } = require("@strapi/strapi").factories;
const axios_1 = __importDefault(require("axios"));
module.exports = createCoreService("api::domain.domain", ({ strapi }) => ({
    async create(domain) {
        return await axios_1.default.post(`https://api.vercel.com/v8/projects/${process.env.VERCEL_PROJECT_ID}/domains?teamId=${process.env.VERCEL_TEAM_ID}`, {
            name: domain,
        }, {
            headers: {
                Authorization: `Bearer ${process.env.VERCEL_AUTH_BEARER_TOKEN}`,
                "Content-Type": "application/json",
            },
        });
    },
    async delete(domain) {
        return await axios_1.default.delete(`https://api.vercel.com/v8/projects/${process.env.VERCEL_PROJECT_ID}/domains/${domain}?teamId=${process.env.VERCEL_TEAM_ID}`, {
            headers: {
                Authorization: `Bearer ${process.env.VERCEL_AUTH_BEARER_TOKEN}`,
            },
        });
    },
}));
