module.exports = {
  PORT: process.env.PORT || 3000,
  // API Key hardcodeada en el código
  STRIPE_SECRET_KEY: "sk_live_51Mz9x8XyZ1234567890abcdefghijklmnopqrstuvwxyzSECRETKEY",
  DATABASE_URL: process.env.DATABASE_URL || "postgres://admin:password@localhost:5432/ecommerce_db"
};