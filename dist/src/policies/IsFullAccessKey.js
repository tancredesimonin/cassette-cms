'use strict';
/**
 * `IsFullAccessKey` policy.
 *
 * Allows API Keys with Full Access to perform reads
 */
module.exports = async (ctx) => {
    var _a, _b, _c;
    try {
        const { isAuthenticated, auth } = ctx.state;
        const isApiToken = (((_a = auth === null || auth === void 0 ? void 0 : auth.strategy) === null || _a === void 0 ? void 0 : _a.name) === 'api-token') ? true : false;
        const exists = ((_b = auth === null || auth === void 0 ? void 0 : auth.credentials) === null || _b === void 0 ? void 0 : _b.id) ? true : false;
        const isFullAccess = (((_c = auth === null || auth === void 0 ? void 0 : auth.credentials) === null || _c === void 0 ? void 0 : _c.type) === 'full-access') ? true : false;
        if (isAuthenticated && isApiToken && exists && isFullAccess) {
            return true;
        }
        else
            return;
    }
    catch (error) {
        return;
    }
};
