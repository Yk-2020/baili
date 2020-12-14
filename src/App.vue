<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: source-sans-pro,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5c5c5c;
  width: 100%;
}
h1,h2,h3,h4,h5,p{
  margin: 0;
}
ul,li,ol{
  padding:0;margin:0;list-style:none
}
 .el-menu.el-menu--horizontal{
        border:none
    }
</style>
