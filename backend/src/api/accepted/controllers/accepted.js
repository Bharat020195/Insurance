'use strict';

/**
 * accepted controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::accepted.accepted');
