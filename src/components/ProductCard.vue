<template>
  <div class="space-buttom"  >
    
    <b-card
      @click="click"
      :img-src="url"
      img-height="150px"
      style="width:250px;"
    >
      <div class="griddeproducto" >
        <div class="item-1">{{name}}</div>
        <div hidden>{{refer}}</div>
        <div class="item-2">${{price}}</div>
        <div class="item-3" v-if="getOpencards == refer">
          <b-form  @submit="onSubmit" @reset="onReset" >	
            <b-form-group	
                id="input-group-1"	
                label="Disponibilidad:"	
                label-for="input-1"	
            >	
                <b-form-input
                @blur="close"
                @change="savechange"		
                id="input-1"
                :v-model="form.qty"	
                :value="qtychange"	
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
import { mapGetters } from 'vuex'
export default {
  props: ["refer","name", "price", "qty", "category", "url" ],
  data() {	
      return {	
        form: {	
            qty: ""
        },
        qtychange: ""
      }
  },
  methods: {
    click(){
      axios.get('https://inventoryonclickback.herokuapp.com/products/'+ this.refer +'/qty').then(response => {var datos = response.data;
      this.qtychange = datos;
      this.$store.dispatch("changeOpencards", this.refer);})

    },
  
    close(){
      this.focus = false
      this.show = false
      this.firstclick = true
    },
    async onSubmit(event) {	
      event.preventDefault()
      alert(this.form.qty)
      let post = {
        qty: this.qtychange,
      };
      await axios.put('https://inventoryonclickback.herokuapp.com/products/'+ this.refer, post).then(response => {var datos = response;
      if (datos != null){
        datos = null
      }
      this.show = false})
    },
    savechange(){
      alert(this.form.qty)
      this.qtychange = this.form.qty - 1
    }
  },
  computed: {
    ...mapGetters(['getOpencards'])
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
