<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="NewText" placeholder="NewTodo" />
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
    /*   this.todos = this.todos.filter((todo) => {
        todo !== item
      });  */// 这个remove方法是父组件传给子组件的自定义事件需要子组件触发

      this.todos.splice(index,1)
      console.log($event); //$event是子组件触发自定义事件传的第二个参数
    },
  },
  components: {
    TodoListItem,
  },
};
</script>