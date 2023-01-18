/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb9c17eed245c242c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e5ec043832bd4c0a2ea9dd2d834bebbf',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oPEpw53QwPsSBM8Cwi1l8zL00vaA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'x0sFFon593XdheyPCsxCyexodtP6wwj0o_uiIW_RfY8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-06',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝媳妇', year: '1995', date: '09-06',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-10-30' },
        // 纪念日
        { keyword: 'marry_day', date: '2022-10-01' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oPEpw53QwPsSBM8Cwi1l8zL00vaA',
    }
  ],

}

module.exports = USER_CONFIG

