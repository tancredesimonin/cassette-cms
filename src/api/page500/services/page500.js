'use strict';

/**
 * page500 service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page500.page500');
