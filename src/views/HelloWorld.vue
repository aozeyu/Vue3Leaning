<template>
  <div>
    {{msg}}<br>
  <button @click="emitfather">点击我触发父组件传的方法</button><br>
  <slot></slot>
  </div>
</template>

<script>
export default {
  props:["msg"],
  emits:['my-event'],
  methods:{
    emitfather(){
      this.$emit("my-event")
    }
  }
}
</script>