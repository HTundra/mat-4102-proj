<template>
  <router-view></router-view>
  <footer class="footer">
    <div class="container">
      <p>BACATAN, CABARRON, DAGATAN, LIM, TEZON</p>
      <p>MMXXIII</p>
      <p>You can view the code repository on GitHub by clicking <a href="https://github.com/HTundra/mat-4102-proj/tree/vue-3">this link</a></p>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: #222;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.footer p {
  margin: 0;
}
</style>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {

  },
})
</script>
