<template>
    <div class="navbar-height">
    <b-navbar toggleable="lg" type="dark" variant="info" class="navbar">
      <b-navbar-brand id="titulo" to="/" style="color: white; margin-left: 3%; font-weight: bold; font-size: 35px;">Inventory-OnClick</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav id="buscador" style="margin-left: 3%; height: 60px; width: 480px;">
            <b-nav-form @submit.prevent="search" >
                <b-input-group >
                    <b-input-group-prepend>
                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                    </b-input-group-prepend>
                    <b-form-input placeholder="Busca productos de interes"  v-model="searchText" style="width: 420px"></b-form-input>
                </b-input-group>
            </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="headericon textonav" to="/crearusuario/">Agregar Usuario</b-nav-item>
          <b-nav-item-dropdown > 
           <template v-slot:button-content>
              Administrar Productos
            </template>
            <b-dropdown-item class="headericon textonav" to="/agregar/">Agregar</b-dropdown-item>
            <b-dropdown-item class="headericon textonav" to="/actualizar/">Actualizar</b-dropdown-item>
          </b-nav-item-dropdown>
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
    background: linear-gradient(90deg, #140085 0%, #38bcd3 53.65%, #00e1ff 100%);
    max-height: 60px;
}

.nav-link:hover {
    transition: all 300ms;
}
</style>