<template>
  <div id="app">
    <k-form :model="userInfo" :rules="rules">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="userInfo.username"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="userInfo.password" type="password"></k-input>
      </k-form-item>
      <k-form-item>
        <button>提交</button>
      </k-form-item>
    </k-form>
    <br />
    <br />
    <br />
    <el-form>
      <el-form-item>
        <el-input type="text"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import kForm from './components/kForm.vue'
import kFormItem from './components/kFormItem.vue'
import kInput from './components/kInput.vue'

export default {
  name: 'App',
  components: {kForm, kFormItem, kInput},
  // provide () {
  //   return {
  //     message: '来自APP.VUE'
  //   }
  // },
  data () {
    return {
      value: '',
      userInfo: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          { min: 6, message: '请输入6~20的用户名' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
