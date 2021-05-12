<template>
  <li class="item">{{todo.text}}
    <button @click="removeTodo2" class="btn">删除</button>
  </li>
</template>


<script>
export default {
  props:["todo"],
  emits:["remove"],
  methods:{
    removeTodo2(){
      this.$emit("remove",1)
    }
  },
  name:'TodoListItem'
}
</script>

<style scoped>
.item{
  list-style-type: none;
}
.btn{
  width: 50px;
  border-radius: 20%;
}
.btn:hover{
  background-color: green;
}
</style>