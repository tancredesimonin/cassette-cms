'use strict';

/**
 * bio service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bio.bio');
