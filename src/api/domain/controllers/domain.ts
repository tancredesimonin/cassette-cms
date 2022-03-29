
module.exports = ({ strapi }) => ({


  /**
   * ### Checks availability of a domain or subdomain
   * 
   * with `?subdomain=true` it'll check the subdomain name availibility in the sites table
   * 
   * WIP:
   * should be later able to return as well availability of "real" domains with `subdomain=false` or missing
   */
   async checkAvailability(ctx) {
    const { domain, subdomain = false } = ctx.query;
    let entries = null;

    if (subdomain && domain) {
      const sub = domain.replace(/[^a-zA-Z0-9/-]+/g, "");

      const query = {
        filters: {
          subdomain: {
            '$eq': sub
          }
        }
      }
  
      entries = await strapi.service("api::site.site").find(query);
    }

    const available = entries.results.length === 0 && domain.length !== 0;
 
    ctx.response.body = available;
    ctx.status = 200;



    /**
     * TODO : add real domain
     */

      //   const response = await fetch(
      //     `https://api.vercel.com/v6/domains/${domain}/config?teamId=${process.env.VERCEL_TEAM_ID}`,
      //     {
      //       method: HttpMethod.GET,
      //       headers: {
      //         Authorization: `Bearer ${process.env.AUTH_BEARER_TOKEN}`,
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   );

      //   const data = await response.json();

      //   const valid = data?.configuredBy ? true : false;
   },
 });
