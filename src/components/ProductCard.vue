<template>
  <div class="d-flex col-bg-3">
    <b-card
      :img-src="url"
      img-height="200px"
      style="width: 200px;"
    >
      <div>
      <p>hola</p>
      <p>{{name}}</p>
      </div>
      <div>
        <b-button
          variant="primary"
          >Descargar</b-button>
          <b-button
          v-b-modal="modalId"
          variant="danger"
          >Eliminar</b-button>
        <b-modal :id="modalId" title="Eliminar Archivo">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </div>  
    </b-card>
  </div>

</template>

<script>
export default {
  props: ["refer","name", "price", "qty", "category", "url" ],
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.cards{
  display: flex !important;
  flex-direction:row !important;
  max-width: 20rem !important;
}

.row{
  display: block !important;
}
#table2{
  table-layout: fixed;
  width: 100%;
  text-align: center;
}

</style>
