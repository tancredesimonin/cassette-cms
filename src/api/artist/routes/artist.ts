'use strict';


/**
 * artist router.
 */

// TODO : improve types

import { factories } from '@strapi/strapi';

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
}
module.exports = factories.createCoreRouter('api::artist.artist', {
    config: {
        // @ts-ignore
        create: {
            middlewares: [SetOwner],
        },
        find: {
            policies: [
                // @ts-ignore
                IsOwner,
                // @ts-ignore
                IsFullAccessKey,
            ],
        },
        findOne: {
            // @ts-ignore
            policies: [
                // @ts-ignore
                IsOwner,
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
