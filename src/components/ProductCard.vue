<template>
  <div class="space-buttom" @click="click"  >
    
    <b-card
      :img-src="url"
      img-height="150px"
      style="width:250px;"
    >
      <div class="griddeproducto" >
        <div class="item-1">{{name}}</div>
        <div hidden>{{refer}}</div>
        <div class="item-2">${{price}}</div>
        <div class="item-3" v-if="show">
          <b-form  @submit="onSubmit" @reset="onReset" >	
            <b-form-group	
                id="input-group-1"	
                label="Disponibilidad:"	
                label-for="input-1"	
            >	
                <b-form-input
                @blur="close"		
                id="input-1"	
                v-model="form.qty"
                :value="form.qty"	
                type="number"		
                required	
                autofocus	
                ></b-form-input>	
            </b-form-group>
            <b-button type="submit" variant="primary"><i class="fas fa-check"></i></b-button>	
            <b-button type="reset" variant="danger"><i class="fas fa-times"></i></b-button>
          </b-form>
        </div>	
      </div>
    </b-card>
  </div>

</template>

<script>
import axios from "axios"
export default {
  props: ["refer","name", "price", "qty", "category", "url" ],
  data() {	
      return {	
        form: {	
            qty: 2
        },
        show: false
      }
  },
  methods: {
    async click(){
      await this.updateqty()
      this.show = true

    },
    updateqty(){
      axios.get('https://inventoryonclickback.herokuapp.com/products/'+ this.refer +'/qty').then(response => {var datos = response.data;
      this.form.qty = datos;})
    },
    close(){
      this.show = false
    }
  },
  created: function () {
    this.updateqty()
  }
  
}
</script>

<style lang="scss" scoped>

.item-1{ grid-area: nam;}
.item-2{ grid-area: pri;}
.item-3{ grid-area: form;}

.griddeproducto {
  display: grid;
  grid-template-areas: 
  'nam nam nam pri pri '
  'nam nam nam pri pri'
  'form form form form form'
  'form form form form form'
  'form form form form form'
  'form form form form form';
  
}
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
