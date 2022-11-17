<template>
  <NavigationBar></NavigationBar>
  <LandingPage></LandingPage>
</template>

<script>

  import NavigationBar from '../src/components/NavigationBar';
  import LandingPage from '../src/components/LandingPage';

  export default {
    name: 'App',
    components: {
      NavigationBar,
      LandingPage
    }
  }

</script>

<style>
#app {
  font-family: avenir next;
  src: url("https://use.typekit.net/tru2emh.css");
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  scroll-behavior: smooth;
}

</style>
