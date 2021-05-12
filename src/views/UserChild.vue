<template>
  <div>看官方文档精通vue</div>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main></main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserChild",
  data() {
    return {
      list: ["Feed a cat", "Buy milk"],
    };
  },
};
</script>