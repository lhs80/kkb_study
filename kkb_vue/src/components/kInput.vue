<template>
  <div>
    <input :type="type" @input="onInput" :value="value">
  </div>
</template>

<script>
export default {
  // inject: ['message'],
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onInput (e) {
      let value = e.target.value
      this.$emit('input', value)
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style scoped>

</style>
