require("dotenv").config();

module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  env: {
    api_key: process.env.API_KEY,
    x_api_key: process.env.X_API_KEY
  }
}