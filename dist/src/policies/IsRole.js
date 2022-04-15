'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@strapi/utils");
const IsRoleConfigSchema = utils_1.yup.object({
    roleId: utils_1.yup.number().required('IsRole policy requires a "roleId" key in the configurations.')
});
/**
 * `IsSiteOwner` policy.
 */
module.exports = async (ctx, config) => {
    try {
        await IsRoleConfigSchema.validate(config);
        const { roleId } = config;
        const { isAuthenticated } = ctx.state;
        const { role: userRole } = ctx.state.user;
        if (isAuthenticated && userRole.id && userRole.id === roleId) {
            return true;
        }
        else
            return;
    }
    catch (error) {
        return;
    }
};
