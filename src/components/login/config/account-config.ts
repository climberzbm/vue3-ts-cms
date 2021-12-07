export const rules = {
  user: [
    {
      required: true,
      message: '必填项',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9a-z]{4,8}$/,
      message: '用户名必须是四到八个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '必填项',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9a-z]{4,8}$/,
      message: '密码必须是四到八个字母或数字',
      trigger: 'blur'
    }
  ]
}
