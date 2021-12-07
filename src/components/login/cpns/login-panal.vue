<template>
  <div class="login_panal">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch class="login_type">
      <el-tab-pane>
        <template #label>
          <span class="icon">
            <el-icon><avatar /></el-icon>账号密码登录
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="icon">
            <el-icon><cellphone /></el-icon>手机号登录
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account_control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="btn_login" @click="handleLoginClick()"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, Cellphone } from '@element-plus/icons'

import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    Avatar,
    Cellphone,
    loginAccount,
    loginPhone
  },
  setup() {
    const isKeepPassword = ref(false)
    // 获取组件类型 <InstanceType<typeof loginAccount>>
    const accountRef = ref<InstanceType<typeof loginAccount>>()

    const handleLoginClick = () => {
      accountRef.value?.loginAction()
    }

    return {
      isKeepPassword,
      accountRef,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login_panal {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -120px;
}

.login_type {
  width: 320px;
  .icon {
    display: flex;
    align-items: center;

    .el-icon {
      display: inline-block;
      margin-right: 8px;
    }
  }
}

.account_control {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 4px;

  el-link {
    height: max-content;
  }
}

.btn_login {
  width: 100%;
  margin-top: 10px;
}
</style>
