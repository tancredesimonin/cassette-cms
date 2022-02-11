module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd332626ee29ff1efcb36838602e9f916'),
  },
});
