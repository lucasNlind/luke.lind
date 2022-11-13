<template>
  <NavigationBar></NavigationBar>
  <LandingPage></LandingPage>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/project/summer-case-study">Case Study</router-link> |
    <router-link to="/project/health-check">Health Check</router-link> |
    <router-link to="/project/uga-scs">UGA SCS</router-link> |
    <router-link to="/project/stretched">Stretched</router-link> |
    <router-link to="/project/spotify">Spotify</router-link>
  </nav>
  <router-view/> -->
</template>

<script>

  import NavigationBar from '../src/components/NavigationBar';
  import LandingPage from '../src/components/LandingPage'

  export default {
    name: 'App',
    components: {
      NavigationBar,
      LandingPage,
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
