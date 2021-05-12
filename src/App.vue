<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'user', params: { username: 'erina' }}">User</router-link> |
    <router-link :to="{name:'user2' ,params:{id:3} }">User2</router-link>
  </div>
  <router-view/>
</template>
<script>
export default {
  customOption:'foo',
  created(){
    console.log(this.$options.customOption);
    console.log(this.$store.state.count);
  }
}
</script>
<style>
body {
  font-family: "Bitter", serif;
  background: rgb(73, 87, 61);
  color: white;
}

#app {
  text-align: center;
  margin: 60px;
  margin: 0 auto;
  display: table;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
