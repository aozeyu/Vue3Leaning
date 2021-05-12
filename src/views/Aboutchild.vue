<template>
  <div class="aboutchild">
    <h1>This is an aboutchild page</h1>
    <div>{{injectCount}} {{injectfullName.fullname}}</div>
  </div>
</template>

<script>
import {inject} from "vue"
export default {
  setup() {
   const injectCount = inject("count")
    const injectfullName = inject("fullName")
    return{
      injectCount,
      injectfullName
    }
  }
}
</script>