'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * artist router.
 */
// TODO : improve types
const strapi_1 = require("@strapi/strapi");
const SetOwner = {
    name: 'global::SetOwner',
    config: {
        field: 'owner',
        uid: 'api::artist.artist',
    },
};
const IsOwner = {
    name: 'global::IsOwner',
    config: {
        field: 'owner',
        uid: 'api::artist.artist',
    },
};
const IsFullAccessKey = {
    name: 'global::IsFullAccessKey'
};
const IsRole = {
    name: 'global::IsRole',
    config: {
        roleId: 1 // Authenticated
    }
};
module.exports = strapi_1.factories.createCoreRouter('api::artist.artist', {
    config: {
        // @ts-ignore
        create: {
            middlewares: [SetOwner],
        },
        find: {
            policies: [
                // @ts-ignore
                IsRole,
                // @ts-ignore
                IsFullAccessKey,
            ],
        },
        findOne: {
            // @ts-ignore
            policies: [
                // @ts-ignore
                IsRole,
                // @ts-ignore
                IsFullAccessKey,
            ],
        },
        delete: {
            policies: [
                // @ts-ignore
                IsOwner,
                // @ts-ignore
                IsFullAccessKey,
            ],
        },
        update: {
            // @ts-ignore
            policies: [
                // @ts-ignore
                IsOwner,
                // @ts-ignore
                IsFullAccessKey,
            ],
            middlewares: [SetOwner],
        },
    },
});
