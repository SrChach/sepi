<template>
<div id="app">
  <b-navbar toggleable="lg" type="dark" variant="info" :sticky="true">
    <b-navbar-brand>SEPI - ESIME</b-navbar-brand>
  </b-navbar>
  <router-view/>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="bottom">
    <b-navbar-nav>
      <b-nav-item href="/About">Acerca de</b-nav-item>
      <b-nav-item href="/TyC">Términos y condiciones</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
import BNavbar from "bootstrap-components/navbar/navbar";
import BNavbarBrand from "bootstrap-components/navbar/navbar-brand";
import BNavbarNav from "bootstrap-components/navbar/navbar-nav";

export default {
  components: {
    "b-navbar": BNavbar,
    "b-navbar-brand": BNavbarBrand,
    "b-navbar-nav": BNavbarNav
  }
}

</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
