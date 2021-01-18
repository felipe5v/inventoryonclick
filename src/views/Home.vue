<template>
  <div class="home">
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
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
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