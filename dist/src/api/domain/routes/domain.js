"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'GET',
            path: '/domains/check',
            handler: 'domain.checkAvailability',
            config: {},
        },
    ],
};
