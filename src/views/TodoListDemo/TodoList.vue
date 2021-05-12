<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="NewText" placeholder="NewTodo" class="newtodo"/>
  </form>
  <ul v-if="todos.length">
    <todo-list-item
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      @remove="removeTodo(index,$event)"
    ></todo-list-item>
  </ul>
  <p v-else>Nothings in here, Please Add NewTodo</p>
</template>


<script>
import TodoListItem from "./TodoListItem";
let nextTodoId = 1; //由于计数器实在组件方法里更改的故放在组件选项外面
const createTodo = (text) => {
  return {
    text,
    id: nextTodoId++,
  };
};
export default {
  name: "TodoList",
  data() {
    return {
      todos: [
        createTodo("I Love vue"),
        createTodo("I Love JavaScript"),
        createTodo("I Love CSS"),
      ],
      NewText: "",
    };
  },
  methods: {
    addTodo() {
      const TrimText = this.NewText.trim();
      if (TrimText) {
        this.todos.push(createTodo(TrimText));
      }
      this.NewText = "";
    },
    removeTodo(index,$event) {

      this.todos.splice(index,1)
      console.log($event); //$event是子组件触发自定义事件传的第二个参数
    },
  },
  components: {
    TodoListItem,
  },
};
</script>

<style scoped>
.newtodo{
  width: 300px;
  height: 30px;
  margin-left: 40px;
}
.newtodo:focus{
  border: 1px solid rgb(153, 0, 255);
  box-shadow: 4px 5px red;
}
</style>