export default {
  port: process.env.PORT || 9000,
  jwtSecret: process.env.JWT_SECRET || "secret",
  clientUrl: process.env.CLIENT_URL || "http://localhost:3000",
};
