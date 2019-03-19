<template>
<div id="app">
  <b-navbar toggleable="lg" type="dark" :sticky="true" variant="ipn">
    <b-navbar-brand to="/">SEPI - ESIME</b-navbar-brand>
    <b-navbar-toggle target="barra"/>

    <b-collapse is-nav id="barra">
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/registrar" active>Regístrate</b-nav-item>
        <b-nav-item to="/iniciar" active>Iniciar sesión</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <router-view/>

  <b-navbar toggleable="lg" type="dark" fixed="bottom" variant="ipn">
    <b-navbar-nav>
      <b-nav-item to="/about">Acerca de</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/tyc">Términos y condiciones</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
import BNavbar from "bootstrap-components/navbar/navbar";
import BNavbarBrand from "bootstrap-components/navbar/navbar-brand";
import BNavbarNav from "bootstrap-components/navbar/navbar-nav";
import BNavbarToggle from "bootstrap-components/navbar/navbar-toggle";
import BNavItem from "bootstrap-components/nav/nav-item";
import BCollapse from "bootstrap-components/collapse/collapse";

export default {
  components: {
    "b-navbar": BNavbar,
    "b-navbar-brand": BNavbarBrand,
    "b-navbar-nav": BNavbarNav,
    "b-nav-item": BNavItem,
    "b-collapse": BCollapse,
    "b-navbar-toggle": BNavbarToggle,
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
