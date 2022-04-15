'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@strapi/utils");
const IsSiteOwnerConfigSchema = utils_1.yup.object({
    field: utils_1.yup.string().required('IsOwner policy requires a "field" key in the configurations.'),
    uid: utils_1.yup.string().required('IsOwner policy requires a "uid" key in the configurations.'),
});
/**
 * `IsSiteOwner` policy.
 */
module.exports = async (ctx, config, { strapi }) => {
    try {
        await IsSiteOwnerConfigSchema.validate(config);
        const { field, uid } = config;
        const { id: userId } = ctx.state.user;
        const { id } = ctx.params;
        if (id) {
            const [entity] = await strapi.entityService.findMany(uid, {
                filters: { id, [field]: { owner: userId } },
            });
            if (entity)
                return true;
            else
                return;
        }
        else {
            ctx.request.query.filters = { ...ctx.request.query.filters, [field]: { owner: userId } };
            return true;
        }
    }
    catch (error) {
        return;
    }
};
