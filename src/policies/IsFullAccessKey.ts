'use strict';

/**
 * `IsFullAccessKey` policy.
 * 
 * Allows API Keys with Full Access to perform reads
 */
module.exports = async (ctx) => {
  try {
    const { isAuthenticated, auth } = ctx.state;
    const isApiToken = (auth?.strategy?.name === 'api-token') ? true : false;
    const exists = auth?.credentials?.id ? true : false;
    const isFullAccess = (auth?.credentials?.type === 'full-access') ? true : false;
    
    if (isAuthenticated && isApiToken && exists && isFullAccess) {
      return true;
    }
    else return;
  } catch (error) {
    return;
  }
};