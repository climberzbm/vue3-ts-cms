<template>
  <div class="login_account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" required prop="user">
        <el-input v-model="account.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" required prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const account = reactive({
      user: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('真正执行登录逻辑')
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>
