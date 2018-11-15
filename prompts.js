module.exports = [
  {
    name: 'appid',
    type: 'string',
    require: true,
    message: `config.xml 参数 | APICloud APPID`,
    validate: function(val) {
      if (val.match(/^A[\d]{13}$/g)) {
        // 校验位数
        return true
      }
      return '请输入14位正确的 APICloud APPID'
    }
  },
  {
    name: 'appName',
    type: 'string',
    message: `config.xml 参数 | APP 名称`,
    default: 'app name'
  },
  {
    name: 'appDesc',
    type: 'string',
    message: `config.xml 参数 | APP 描述`,
    default: 'app description'
  }
]
