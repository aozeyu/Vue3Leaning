<template>
  <li class="item">
    {{ todo.text }}
       <button @click="removeTodo2" class="btn">删除</button>
  </li>
</template>


<script>
export default {
  props: ["todo"],
  emits: ["remove"],
  methods: {
    removeTodo2() {
      confirm("是否要删除")
      this.$emit("remove", 1);
    },
  },
  name: "TodoListItem",
};
</script>

<style scoped>
.item {
  list-style-type:upper-roman ;
  border: 1px solid #ccc;
  text-decoration: line-through;
  text-align: left;
}
.btn {
  width: 50px;
  border-radius: 50px;
  margin-left: 20px;
}
.btn:hover {
  background-color: green;
  box-shadow: 3px 4px rebeccapurple;
}
</style>