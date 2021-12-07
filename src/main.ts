import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
// import zbRequest from '@/service'

import 'normalize.css'
import '@/assets/css/index.css'

createApp(App).use(store).use(router).mount('#app')

// interface DataType {
//   data: any
//   success: boolean
//   returnCode: string
// }

// zbRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     isShowLoading: true
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
