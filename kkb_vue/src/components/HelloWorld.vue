<template>
  <section class="hello">
    <el-button>测试</el-button>
    <br />
    <br />
    <br />
    <k-form>
      <k-form-item>
        <k-input></k-input>
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
  </section>
</template>

<script>
import kForm from './kForm.vue'
import kFormItem from './kFormItem.vue'
import kInput from './kInput.vue'

export default {
  name: 'HelloWorld',
  components: {kForm, kFormItem, kInput},
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
