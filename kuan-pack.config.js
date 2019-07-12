const { resolve } = require('./build/utils.js')

module.exports = {
  entry: resolve(resolve('gh')),
  publicPath: '/kuan-vue-flip-clock/'
}
