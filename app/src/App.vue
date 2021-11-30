<template>
  <w-app>
    <w-flex wrap class="text-center">
      <kaart></kaart>
    </w-flex>
  </w-app>
</template>

<script>
import Kaart from "../src/components/kaartstallingen/Kaart.vue";
export default {
  name: "app",
  components: {
    Kaart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>