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
    },
    upload: {
      config: {
        provider: "strapi-provider-upload-aws-s3-advanced",
        providerOptions: {
          accessKeyId: env("S3_ACCESS_KEY_ID"),
          secretAccessKey: env("S3_ACCESS_SECRET"),
          endpoint: env('S3_ENDPOINT'),
          region: env("S3_REGION"),
          params: {
            bucket: env("S3_BUCKET"),
          },
          baseUrl: env("CDN_BASE_URL"), // e.g. https://cdn.example.com, this is stored in strapi's database to point to the file
          // prefix: env("S3_BUCKET_PREFIX"), // e.g. strapi-assets, note the missing slash at the start
        },
      },
    },
    // ...
  });