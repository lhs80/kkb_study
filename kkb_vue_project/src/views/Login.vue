<template>
  <div>
    <cube-form
      :model="model"
      :schema="schema"
      @validate="handleValidate"
      @submit="handleLogin"
    ></cube-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: '',
        passwd: ''
      },
      schema: {
        fields: [//字段数组
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '请输入用户名'
            },
            rules: {
              required: true
            },
            trigger: 'blur'
          },
          {
            type: 'input',
            modelKey: 'passwd',
            label: '密码',
            props: {
              type: 'password',
              placeholder: '请输入密码',
              eye: {
                open: true
              }
            },
            rules: {
              required: true
            },
            trigger: 'blur'
          },
          {
            type: 'submit',
            label: '登录'
          }
        ]
      }
    }
  },
  methods: {
    handleValidate (ret) {
      console.log(ret)
    },
    handleLogin (e) {
      e.preventDefault()
      console.log('login')
      this.$store.dispatch('login', this.model)
        .then(code => {
          if (code) {
            //  登录成功重定向
            const path = this.$route.query.redirect || '/'
            this.$router.push(path)
          }
        })
        .catch(err => {
          //有错误发生或者登录失败
          const toast = this.$createToast({
            time: 2000,
            txt: err.message || err.response.data.message || '登录失败',
            type: 'error'
          })
          toast.show()
        })
    }
  },
}
</script>

<style scoped>

</style>
