<template>
  <div class="login container">
    <LoginPanal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LoginPanal from './cpns/login-panal.vue'

export default defineComponent({
  components: {
    LoginPanal
  },

  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
