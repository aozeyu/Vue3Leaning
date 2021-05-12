<template>
  <div id="list-demo">
    <button @click="shuffle">Shuffle</button>
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="(item, index) in items" :key="index" class="list-item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
import {_} from "lodash"
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },//字符串和数字都可以用做key的值
  methods:{
    shuffle(){
      this.items = _.shuffle(this.items)
    },
    randomIndex(){
      return Math.floor(Math.random()*this.items.length) //生成随机索引位置
    },
    add(){
      this.items.splice(this.randomIndex(),0,this.nextNum++)
    },
    remove(){
      this.items.splice(this.randomIndex(),1)
    }
  }
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 20px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>