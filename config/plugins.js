module.exports = ({ env }) => ({
    // ...
    seo: {
      enabled: true,
    },
    navigation: {
      enabled: true,
      config: {
          // additionalFields: ['audience'],
          contentTypes: ['api::page-home.page-home'],
          contentTypesNameFields: {
              'api::page-home.page-home': ['h1']
          },
          allowedLevels: 2,
          // graphQL configuration comes here
          // gql: {...},
      }
    }
    // ...
  });