'use strict';
import { yup } from '@strapi/utils';

const IsOwnerConfigSchema = yup.object({
  field: yup.string().required('IsOwner policy requires a "field" key in the configurations.'),
  uid: yup.string().required('IsOwner policy requires a "uid" key in the configurations.'),
});

/**
 * `IsOwner` policy.
 */

module.exports = async (ctx, config, { strapi }) => {
  try {
    await IsOwnerConfigSchema.validate(config);
    const { field, uid } = config;
    const { id: userId } = ctx.state.user;
    const { id } = ctx.params;
    if (id) {
      const [entity] = await strapi.entityService.findMany(uid, {
        filters: { id, [field]: userId },
      });
      if (entity) return true;
      else return
    } else {
      ctx.request.query.filters = { ...ctx.request.query.filters, [field]: userId };
      return true;
    }
  } catch (error) {
    return;
  }
};