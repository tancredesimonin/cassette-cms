export default {
  routes: [
    {
     method: 'GET',
     path: '/domains/check',
     handler: 'domain.checkAvailability',
     config: {},
    },
  ],
};
