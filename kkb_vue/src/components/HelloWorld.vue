<template>
  <section class="hello">
    <el-button>测试</el-button>
  </section>
</template>

<script>

export default {
  name: 'HelloWorld',

  data () {
    return {
      list: [2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  mounted () {
    console.log(this.list.find((value) => {
      return value === 5
    }))
  }
}
</script>
