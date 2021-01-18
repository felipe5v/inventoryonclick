<template>
  <div class="space-buttom">
    
    <b-card
      :img-src="url"
      img-height="150px"
      style="width:250px;"
    >
      <div>
      <p>hola</p>
      <p>{{name}}</p>
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

.space-buttom{
  padding-bottom: 3%;

}


#table2{
  table-layout: fixed;
  width: 100%;
  text-align: center;
}

</style>
