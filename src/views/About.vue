<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{count}}   {{fullName.fullname}}</div>
    <button @click="addNum">点我加一</button><br>
    <router-link to="/about/child">Aboutchild</router-link>
    <todo-list></todo-list>
  </div>
  <router-view></router-view>
  <render :level=1></render>
</template>
<script>
import Render from '@/views/Render'
import { provide, reactive, readonly, ref } from 'vue'
import TodoList from './TodoListDemo/TodoList.vue'
export default {
  setup() {
    const count = ref('2')
    const fullName = reactive({
      'fullname':'姚泽宇'
    })
    provide('count',readonly(count))
    provide('fullName',readonly(fullName))
    return{
      count,
      fullName //在这里返回的东西可以在组件其他任何地方使用
    }
  },
  methods:{
    addNum(){
      this.count++
    }
  },
  components:{
    Render,
    TodoList
  }
}
</script>