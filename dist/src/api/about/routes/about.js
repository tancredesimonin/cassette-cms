'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * site router.
 */
// TODO : improve types
const strapi_1 = require("@strapi/strapi");
const IsSiteOwner = {
    name: 'global::IsSiteOwner',
    config: {
        field: 'site',
        uid: 'api::about.about',
    },
};
const IsFullAccessKey = {
    name: 'global::IsFullAccessKey'
};
module.exports = strapi_1.factories.createCoreRouter('api::about.about', {
    config: {
        // @ts-ignore
        create: {
            policies: [
                // @ts-ignore
                IsSiteOwner,
                // @ts-ignore
                IsFullAccessKey,
            ],
        },
        find: {
            policies: [
                // @ts-ignore
                IsSiteOwner,
                // @ts-ignore
                IsFullAccessKey,
            ],
        },
        findOne: {
            // @ts-ignore
            policies: [
                // @ts-ignore
                IsSiteOwner,
                // @ts-ignore
                IsFullAccessKey,
            ],
        },
        delete: {
            policies: [
                // @ts-ignore
                IsSiteOwner,
                // @ts-ignore
                IsFullAccessKey,
            ],
        },
        update: {
            // @ts-ignore
            policies: [
                // @ts-ignore
                IsSiteOwner,
                // @ts-ignore
                IsFullAccessKey,
            ],
        },
    },
});
