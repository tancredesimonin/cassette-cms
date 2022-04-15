'use strict';
import { yup } from '@strapi/utils';

const SetOwnerConfigSchema = yup.object({
  field: yup.string().required('SetOwner middleware needs a "field" key in the configurations.'),
  uid: yup.string().required('SetOwner middleware requires a "uid" key in the configurations.'),
});

/**
 * `SetOwner` middleware.
 */
 module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    try {
      await SetOwnerConfigSchema.validate(config);
      const { field, uid } = config;
      const { id: userId } = ctx.state.user; // ctx.state.user contains the current authenticated user
      ctx.request.body.data[field] = userId;
      await next();
      if (ctx.response.status == 200) {
        const { id } = ctx.response.body.data; // ctx.response.body.data containts the just created/updated entity
        await strapi.entityService.update(uid, id, { data: { [field]: userId } });
      }
    } catch (error) {
      await ctx.forbidden(error);
    }
  };
};