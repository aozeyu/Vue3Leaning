<template>
  <div>User2+++{{ id }}</div>
  <user-2-child></user-2-child>
  <h3>Hover me !</h3>
  <card>
    <img
      src="https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      alt="image of a woman on a train"
    />
  </card>
  <card>
    <img
      src="https://images.unsplash.com/photo-1501421018470-faf26f6b1bef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      alt="drawing of a woman sharing soda with a zombie"
    />
  </card>
</template>

<script>
import User2Child from "@/views/User2Child";
import Card from "@/views/Card";
export default {
  props: ["id"],
  components: {
    User2Child,
    Card,
  },
};
</script>
