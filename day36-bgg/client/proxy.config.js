// Forward all HTTP request starting with / to http://localhost:8080
const PROXY_CONFIG = [
    {
          context: [ '/**' ],
          target: 'http://localhost:8080',
          secure: false,
      }
  ]
  module.exports = PROXY_CONFIG;