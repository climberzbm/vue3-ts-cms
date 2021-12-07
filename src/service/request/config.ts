const TIME_OUT = 10000
let BASE_URl = ''

// 自定义注入 VUE_APP开
if (process.env.NODE_ENV === 'development') {
  BASE_URl = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URl = ''
} else {
  BASE_URl = ''
}

export { BASE_URl, TIME_OUT }
