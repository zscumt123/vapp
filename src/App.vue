<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style>
#app{
    height: 100%;
    background: url("./assets/images/login_bg.png") no-repeat;
    background-size: 100% 100%;
    min-width:800px;
}
</style>
