'use strict'
module.exports = {
  NODE_ENV: '"production"',
  PLATFORM: '"' + (process.env.env_platform || 'web') + '"'
}
