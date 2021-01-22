<template>
  <div class="space-buttom"  >
    
    <b-card
      @click="click"
      :img-src="url"
      img-height="190px"
      style="width:270px;"
    >
      <div class="griddeproducto" >
        <div class="item-1"><b>{{name}}</b></div>
        <div hidden>{{refer}}</div>
        <div class="item-2">${{price}}</div>
        <div class="item-3" v-if="getOpencards == refer">
          <b-input-group
            size="md"
            class="mb-3"
            prepend="Disponible:"            
          >
            <b-form-input type="number" required min="0" v-model="form.qty"></b-form-input>
            <b-input-group-append>
              <b-button @click="onSubmit" type="submit" size="sm" text="Button" variant="primary"><i class="fas fa-check"></i></b-button>
            </b-input-group-append>
          </b-input-group>
        </div>	
      </div>
    </b-card>
  </div>

</template>

<script>
import axios from "axios"
import { mapGetters } from 'vuex'
export default {
  props: ["refer","name", "price", "qty", "category", "url" ],
  data() {	
      return {	
        form: {	
            qty: ""
        }
      }
  },
  methods: {
    click(){
      if (this.refer != this.getOpencards){
      axios.get('https://inventoryonclickback.herokuapp.com/products/'+ this.refer +'/qty').then(response => {var datos = response.data;
      this.form.qty = datos;
      this.$store.dispatch("changeOpencards", this.refer);})}

    },
    async onSubmit(event) {	
      event.preventDefault()
      let post = {
        qty: this.form.qty,
      };
      await axios.put('https://inventoryonclickback.herokuapp.com/products/'+ this.refer, post).then(response => {var datos = response;
      if (datos != null){
        datos = null
      }})
    }
      
  },
  computed: {
    ...mapGetters(['getOpencards'])
  }
  
}
</script>

<style lang="scss" scoped>

.item-1{ 
  grid-area: nam;
  text-transform: capitalize;
  text-align: left;
}
.item-2{ 
  grid-area: pri;
  text-align: right;
  color: grey}
.item-3{ 
  grid-area: form;
  display: inline-block;
}

.griddeproducto {
  display: grid;
  row-gap: 10px;
  grid-template-areas: 
  'nam nam nam pri pri '
  'nam nam nam pri pri'
  '. . . . .'
  '. . . . .'
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

.card-img{
  object-fit: contain;
}

#input-1{
  width: 80px !important;
  padding: 0!important;
}
.input-group-text{
  font-weight: bold!important;
  font-size: 0.96rem!important;
  background-color: unset!important;
  border: unset!important;
  padding-left: 0;
  padding-right: 0.75rem ;
}
</style>
