module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a0de6ab1bb20e9f9df4d4c646a1b01b1'),
  },
});
