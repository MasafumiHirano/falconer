require("dotenv").config();

module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  env: {
    x_api_key: process.env.X_API_KEY
  }
}