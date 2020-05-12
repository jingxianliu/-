'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//本地环境地址
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
 // API_IOT:'"http://10.10.6.50:3000/iot/api/v1"',
  API_IOT:'"http://139.199.89.93:9898/iot/api/v1"',
 // API_CLOUD:'"http://10.10.6.50:3000/v-cloud/api/v1"',
  API_CLOUD:'"http://139.199.89.93:9898/v-cloud/api/v1"',
  //API_SOTA:'"http://10.10.6.15:8000/sota/api/v1"'
  API_SOTA:'" http://118.24.8.219:8888/sota/api/v1"'
})


