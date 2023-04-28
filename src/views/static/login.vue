<template>
  <!-- 登陆页面实现
      1.表单
      2.验证（自定义）
      3.登陆实现，效果：loading
      4.状态信息的保存（pinia，vuex）
        保持数据持久化
      5.页面跳转
      6.reset 
  -->

  <!-- <div>数量{{ count }}</div>
  <button @click="increat">count++</button> -->
  <el-form ref="ruleFormRef" :model="userForm" status-icon :rules="rules" class="demo-ruleForm">
      <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="userForm.email" autocomplete="off" placeholder="请输入用户邮箱" suffix-icon="Message" />
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
          <el-input v-model="userForm.password" type="password" autocomplete="off" placeholder="请输入用户密码"
              suffix-icon="Lock" />
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="btnLogin">用户登录</el-button>
          <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
  </el-form>
</template>
<script>
import { defineComponent } from 'vue'
import { mapActions } from 'pinia'
import { storeToRefs } from 'pinia'
import { userLogin } from '../../http'
import { useUserStore } from "../../stores/user"
export default defineComponent({
  setup() {
      //组合式
      const userStore = useUserStore();
      const { setToken, fillUserinfo } = userStore
      return { setToken, fillUserinfo }
  },
  data() {
      return {
          userForm: {
              email: '',
              password: ''

          },
          rules: {
              email: [
                  { required: true, message: '请输入电子邮箱', trigger: 'blur' },
                  { type: 'email', message: '电子邮箱格式错误', trigger: 'blur' }
              ],
              password: [
                  { required: true, message: '请输入用户密码', trigger: 'blur' },
                  { min: 8, message: '密码长度不得少于8位', trigger: 'blur' }
              ]
          }
      }

  },
  methods: {
      // ...mapActions(useUserStore,['setToken','fillUserinfo']),
      btnLogin() {
          const that = this
          const formEl = that.$refs.ruleFormRef//取ref对象
          if (!formEl) return
          formEl.validate((valid) => {
              if (valid) {
                const that = this
                  const res = userLogin(that.userForm)
                  console.log(res);
                  res.then(result => {
                      //console.log(result)

                      if (result.success) {
                          const userinfo = result.data.userinfo;
                          console.log(userinfo);
                          that.setToken(userinfo.token)
                          that.fillUserinfo(userinfo)
                          
                          that.$router.push('/')

                      } else {
                          return false;
                      }
                  }).catch(err => {
                    console.log(err)
                  })
              } else {
                  console.log('error submit!')
                  return false
              }
          })


      },
      resetForm() {
          const formEl = that.$refs.ruleFormRef;//取ref对象
          formEl.resetFields()
      }
  }
})

</script>

<style lang="scss" scoped></style>
