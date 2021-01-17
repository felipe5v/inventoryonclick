<template>
  <div class="home">
    <h1 style="text-align: left; padding-left: 18rem; padding-bottom: 1rem;">Agregado recientemente</h1>
    <b-container class="col-7" style="min-width: 50rem; margin: center;">
      <b-row style="margin: center">
        <ProductCard style="margin: center"
          :refer="products.ref"
          :name="products.name"
          :date="products.date"
          :price="products.price"
          :qty="products.qty"
          :category="products.category"     
          v-for="products in getDisplayProducts"
          :key="products.ref"

        />
      </b-row>
      <b-pagination
        v-model="currentPage"
        :total-rows="getRows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        @input="paginate(currentPage)"
      ></b-pagination>
    </b-container>
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
      perPage: 3
    };
  },
  components: { "ProductCard": ProductCard },
  computed: {
    ...mapGetters(["getRows", "getDisplayProducts"])
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
// b-card {
// padding: 10px;
// }
.row {
  display: block !important;
}
</style>