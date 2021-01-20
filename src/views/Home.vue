<template>
  <div class="home">
    <div class="page" v-if="getSpinner">
      <b-spinner class="spinner" :variant="'primary'" :key="'primary'"></b-spinner>
    </div>
    <h1 style="text-align: left; padding-left: 18rem; padding-bottom: 1rem;">Agregado recientemente</h1>
    <div class="container-rowes">
      <b-card-group deck>

            <ProductCard style="margin: center"
          :refer="products.ref"
          :name="products.name"
          :date="products.date"
          :price="products.price"
          :qty="products.qty"
          :category="products.category"
          :url="products.url"     
          v-for="products in getDisplayProducts"
          :key="products.ref"

        />
      </b-card-group>
      <b-pagination
        v-model="currentPage"
        :total-rows="getRows"
        :per-page="perPage"
        first-text="Primer Página"
        prev-text="Atras"
        next-text="Siguiente"
        last-text="Ultima Página"
        @input="paginate(currentPage)"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "home",
  async mounted() {
    this.getRecords();
  },
  data() {
    return {
      currentPage: 1,
      perPage: 8
    };
  },
  components: { "ProductCard": ProductCard },
  computed: {
    ...mapGetters(["getRows", "getDisplayProducts", "getSpinner"])
  },
  methods: {
    paginate(currentPage) {
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    },
    async getRecords() {
      await this.$store.dispatch("fetchProducts");
    }
  }
};
</script>
<style lang="scss" scoped>

.page {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  z-index: 25;
  width: 100%;
  height: 100%;
}

.spinner {
  z-index: 26;
  position: relative;
  top: 50%;
}

.container-rowes {
  display: -ms-flexbox;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
  margin-bottom: 5%;

}
.card-deck{

  justify-content: center;
}


.row {
  display: block !important;
}
</style>