'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * site router.
 */
// TODO : improve types
const strapi_1 = require("@strapi/strapi");
// Modify these to match your Content-type
const uid = 'api::site.site';
const field = 'owner';
const SetOwner = {
    name: 'global::SetOwner',
    config: {
        field,
        uid,
    },
};
const IsOwner = {
    name: 'global::IsOwner',
    config: {
        field,
        uid,
    },
};
module.exports = strapi_1.factories.createCoreRouter(uid, {
    config: {
        // @ts-ignore
        create: {
            middlewares: [SetOwner],
        },
        find: {
            // @ts-ignore
            policies: [IsOwner],
        },
        findOne: {
            // @ts-ignore
            policies: [IsOwner],
        },
        delete: {
            // @ts-ignore
            policies: [IsOwner],
        },
        update: {
            // @ts-ignore
            policies: [IsOwner],
            middlewares: [SetOwner],
        },
    },
});
