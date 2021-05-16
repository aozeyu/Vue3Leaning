<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" @my-event="doSomeing"
      >我是插槽内容<br />{{ this.fatherMsg }}</HelloWorld
    >
    <router-link to="/homechild">Homechild</router-link>
    <br />
    <button @click="addCount2">点我触发mutation</button>
    <h4>{{ this.count }}</h4>
  </div>
  <router-view></router-view>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "./HelloWorld.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      fatherMsg: "我是与插槽同作用域的数据",
    };
  },
  computed: mapState(["count"]), //mapState是一个函数 使得this.count = this.$store.state.count
  components: {
    HelloWorld,
  },
  methods: {
    doSomeing() {
      console.log("我是父组件传给你的自定义事件");
    },
    addCount2() {
      this.$store.commit("addCount");
      console.log(this.$store.state.count);
    },
  },
};
</script>
