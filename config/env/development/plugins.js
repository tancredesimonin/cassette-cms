module.exports = ({ env }) => ({
    // ...
    seo: {
      enabled: true,
    },
    upload: {
      config: {
        provider: "strapi-provider-upload-aws-s3-advanced",
        providerOptions: {
          accessKeyId: env("S3_ACCESS_KEY_ID"),
          secretAccessKey: env("S3_ACCESS_SECRET"),
          endpoint: env('S3_BUCKET_ENDPOINT'),
          region: env("S3_REGION"),
          params: {
            bucket: env("S3_BUCKET"),
          },
          // baseUrl: env("CDN_BASE_URL"), // e.g. https://cdn.example.com, this is stored in strapi's database to point to the file
          // prefix: env("S3_BUCKET_PREFIX"), // e.g. strapi-assets, note the missing slash at the start
        },
      },
    },
    'config-sync': {
      enabled: true,
      config: {
        syncDir: "config/sync/",
        minify: false,
        importOnBootstrap: false,
        customTypes: [],
        excludedTypes: [],
        excludedConfig: [
          "core-store.plugin_users-permissions_grant"
        ],
      },
    },
  });