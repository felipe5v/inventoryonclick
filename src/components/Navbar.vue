<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="navbar">
      <b-navbar-brand id="titulo" to="/">INVENTORY ON-CLICK</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav id="buscador">
            <b-nav-form @submit.prevent="search" >
                <b-input-group>
                    <b-input-group-prepend>
                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                    </b-input-group-prepend>
                    <b-form-input placeholder="Busca un producto"></b-form-input>
                </b-input-group>
            </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="headericon textonav" @click="salir">Salir</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    salir() {
      this.$emit("click");
    }
    ,
    search() {
      this.$store.dispatch("search", { text: this.searchText });
    }
  },
  data() {
    return {
      searchText: ""
    };
  }
};
</script>

<style>
.navbar {
    background: linear-gradient(90deg, #362886 0%, #4f4a6b 100%);
}
.nav-link:hover {
    color: white !important;
    transition: all 300ms;
}
</style>