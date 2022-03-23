export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9c14875f579592a9ca670a7f9260394f'),
  },
});
