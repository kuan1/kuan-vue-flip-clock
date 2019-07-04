var path = require('path')

/**
 * 获取根目录
 * @param {String} filePath
 */
const resolve = filePath => path.resolve(__dirname, '..', filePath)

module.exports = {
  resolve
}
