<template>
  <div class="user">
    <h1>This is an User page</h1>
    <user-child>
      <template #header>
        <h1>我是头部插槽内容</h1>
      </template>
      <!--    <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template> -->
      <template #footer>
        <h1>我是尾部插槽内容</h1>
      </template>
      <template v-slot:defalut="slotProps">
        <span class="green">
          {{ slotProps.item }}
        </span>
      </template>
    </user-child>
  </div>
  <list-demo></list-demo>
</template>

<script>
import UserChild from "@/views/UserChild";
import ListDemo from '@/views/ListDemo'
export default {
  components: {
    UserChild,
    ListDemo
  },
};
</script>

<style scoped>
.green{
  color: green;
}
</style>