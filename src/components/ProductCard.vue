<template>
  <div style="display: block;">
    <b-col style="margin: center; display: block;">
      <b-card
        
        tag="article"
        style="max-width: 100rem; min-width:40rem; display: block;"
        class="mb-3"
      >
        <div>
        <p>hola</p>
        <p>{{refer}}</p>
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
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["refer","name", "date", "price", "qty", "category" ],
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  }
};
</script>

<style scoped>
.row{
  display: block !important;
}
#table2{
  table-layout: fixed;
  width: 100%;
  text-align: center;
}

</style>
