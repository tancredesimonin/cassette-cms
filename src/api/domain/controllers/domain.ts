
module.exports = ({ strapi }) => ({


   async checkAvailability(ctx) {

    strapi.log.info(JSON.stringify(ctx.state))

    const { subdomain } = ctx.query;
    let entries = null;

    if (subdomain) {
      const sub = subdomain.replace(/[^a-zA-Z0-9/-]+/g, "");

      const query = {
        filters: {
          subdomain: {
            '$eq': sub
          }
        }
      }
  
      entries = await strapi.service("api::site.site").find(query);
    }

    const available = entries.results.length === 0 && subdomain.length !== 0;
 
    ctx.response.body = available;
    ctx.status = 200;
   },
 });
