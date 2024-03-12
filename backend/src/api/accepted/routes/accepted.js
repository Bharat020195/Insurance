'use strict';

/**
 * accepted router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::accepted.accepted');
