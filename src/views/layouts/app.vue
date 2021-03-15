<template>
  <div class="content-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style scoped>
.content-wrapper {
  /*background: linear-gradient(to bottom, #b92b27, #1565c0);*/
  background: linear-gradient(to bottom, #191919, #1565c0);
  /*background: #191919;*/
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
