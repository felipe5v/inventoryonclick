<template>	

  <div class="d-flex justify-content-center align-content-" style=" padding: 1%; font-weight: bold; font-size: 18px;">	
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="col-md-7 col-lg-5 col-sm-9">	
        <b-form-group	
            id="input-group-1"	
            label="Referencia:"	
            label-for="input-1"	
            label-cols-sm="2"
            label-align-sm="right"
        >	
            <b-form-input	
            class="form-control-md"	
            id="input-1"	
            v-model="form.ref"	
            type="number"	
            placeholder=""
            required	
            autofocus	
            @blur="close"	
            ></b-form-input>	
        </b-form-group>	
        <br>
        <b-form-group id="input-group-2" label="Nombre del producto:" label-for="input-2" label-align="left">	
            <b-form-input	
            class="form-control-md"	
            id="input-2"	
            v-model="form.name"	
            placeholder=""	
            type="text"	
            required	
            ></b-form-input>	
        </b-form-group>	

        <b-form-group id="input-group-3" label="Precio del producto:" label-for="input-3" label-align="left">	
            <b-form-input	
            class="form-control-md"	
            id="input-3"	
            v-model="form.price"	
            placeholder=""	
            type="number"	
            required	
            ></b-form-input>	
        </b-form-group>	

        <b-form-group id="input-group-4" label="Numero de unidades:" label-for="input-4" label-align="left">	
            <b-form-input	
            class="form-control-md"	
            id="input-4"	
            v-model="form.qty"	
            placeholder=""	
            type="number"	
            required	
            ></b-form-input>	
        </b-form-group>	

        <b-form-group id="input-group-5" label="Categoria del producto:"	
        label-align="left"
        label-for="input-5">	
            <b-form-input	
            class="form-control-md"	
            id="input-5"	
            v-model="form.category"	
            placeholder=""
            required	
            ></b-form-input>	
        </b-form-group>	
      <b-button style="margin-right: 3%;  font-weight: bold; font-size: 18px;" type="submit"  pill variant="primary">Actualizar</b-button>	
      <b-button style="font-weight: bold; font-size: 18px;" type="reset" pill variant="outline-secondary">Limpiar</b-button>	
    </b-form>	
  </div>	
</template>	

<script>	
import axios from "axios"	
  export default {	
    data() {	
      return {	
        form: {	
            ref: null,	
            name: '',	
            date: null,	
            price: null,	
            qty: null,	
            category: '',	
        },	
        file1: null,	
        show: true	
      }	
    },	
    methods: {	

      close(){
      this.processData()
      },
      processData: function(){
            axios.get("https://inventoryonclickback.herokuapp.com/products/" + this.form.ref)
                .then((result) => {
                    const datos =result.data
                    this.form.name = datos.name
                    this.form.price = datos.price
                    this.form.qty = datos.qty
                    this.form.category = datos.category
                })
                /*.catch((error) => {
                  if (error.response.status == "500")
                   this.onReset
                  });*/
      },

      async onSubmit(event) {	
        event.preventDefault()	
        this.form.ref = parseInt(this.form.ref);	
        this.form.price = parseInt(this.form.price);	
        this.form.qty = parseInt(this.form.qty);	
        var today = new Date();	
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();	
        this.form.date = date;	
        let post = {
          name: this.form.name,
          date: this.form.date,
          price: this.form.price,
          qty: this.form.qty,
          category: this.form.category
        };
        await axios.put("https://inventoryonclickback.herokuapp.com/products/?ref=" + this.form.ref , post);
      },	
      

      onReset(event) {	
        event.preventDefault()		
        this.form.ref = null
        this.form.name = ""
        this.form.date = null
        this.form.price = null
        this.form.category = "" 
        this.form.qty = null
        this.show = false	
        this.$nextTick(() => {	
          this.show = true	
        })	
      }	
    },

  }	
</script>

<style>

</style>