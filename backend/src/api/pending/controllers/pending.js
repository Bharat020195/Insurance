'use strict';

/**
 * pending controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pending.pending');
