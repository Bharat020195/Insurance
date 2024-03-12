'use strict';

/**
 * pending service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pending.pending');
