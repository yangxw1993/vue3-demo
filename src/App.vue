<template>
  <div id="nav">
    {{routers}}
    <!-- <router-link v-for="item in router" :key="item.name" :to="item.path">Home</router-link> | -->
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>
<script>
import router from './router'
export default {
  data(){
    return {
      routers: router.routes
    }
  }
  
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
