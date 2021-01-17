<template>	
  <div class="d-flex justify-content-center">	
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="col-md-7 col-lg-5 col-sm-9">	
        <b-form-group	
            id="input-group-1"	
            label="Referencia:"	
            label-for="input-1"	
        >	
            <b-form-input	
            class="form-control-md"	
            id="input-1"	
            v-model="form.ref"	
            type="number"	
            placeholder="Ingrese la referencia"	
            required	
            autofocus	
            ></b-form-input>	
        </b-form-group>	

        <b-form-group id="input-group-2" label="Nombre del producto:" label-for="input-2">	
            <b-form-input	
            class="form-control-md"	
            id="input-2"	
            v-model="form.name"	
            placeholder="Ingrese el nombre del producto"	
            type="text"	
            required	
            ></b-form-input>	
        </b-form-group>	

        <b-form-group id="input-group-3" label="Precio del producto:" label-for="input-3">	
            <b-form-input	
            class="form-control-md"	
            id="input-3"	
            v-model="form.price"	
            placeholder="Ingrese el precio del producto"	
            type="number"	
            required	
            ></b-form-input>	
        </b-form-group>	

        <b-form-group id="input-group-4" label="Numero de unidades:" label-for="input-4">	
            <b-form-input	
            class="form-control-md"	
            id="input-4"	
            v-model="form.qty"	
            placeholder="Ingrese el numero de unidades"	
            type="number"	
            required	
            ></b-form-input>	
        </b-form-group>	

        <b-form-group id="input-group-5" label="Categoria del producto:"	
        label-size="md"	
        label-for="input-5">	
            <b-form-input	
            class="form-control-md"	
            id="input-5"	
            v-model="form.category"	
            placeholder="Ingrese la categoria"	
            required	
            ></b-form-input>	
        </b-form-group>	
        <b-form-group id="input-group-5" label="Imagen del producto:"	
        label-size="md"	
        label-for="input-5">	
            <b-form-file	
            accept="image/*"	
            v-model="file1"	
            :state="Boolean(file1)"	
            placeholder="Escoja una imagen..."	
            drop-placeholder="Sulte la imagen aqui..."	
            browse-text="Buscar"	
            required	
            ></b-form-file>	
            <div class="d-flex flex-row">Imagen Seleccionada: {{ file1 ? file1.name : '' }}</div>	
        </b-form-group>	
      <b-button type="submit" variant="primary">Submit</b-button>	
      <b-button type="reset" variant="danger">Reset</b-button>	
    </b-form>	
  </div>	
</template>	

<script>	
import axios from "axios"	
import firebase from 'firebase'	
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
            url: null	
        },	
        file1: null,	
        show: true	
      }	
    },	
    methods: {	
      async onSubmit(event) {	
        event.preventDefault()	
        this.form.ref = parseInt(this.form.ref);	
        this.form.price = parseInt(this.form.price);	
        this.form.qty = parseInt(this.form.qty);	
        var today = new Date();	
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();	
        this.form.date = date;	
        const storageRef = firebase.storage().ref(`/Imagenes/${this.form.ref}`);	
        await storageRef.put(this.file1);	
        await storageRef.getDownloadURL().then((url)=>{	
            this.form.url = url;	
        });	
        await axios.post('https://inventoryonclickback.herokuapp.com/products/', JSON.stringify(this.form));	
        	
      },	
      onReset(event) {	
        event.preventDefault()	
        // Reset our form values	
        this.form.email = ''	
        this.form.name = ''	
        this.form.food = null	
        this.form.checked = []	
        // Trick to reset/clear native browser form validation state	
        this.show = false	
        this.$nextTick(() => {	
          this.show = true	
        })	
      }	
    }	
  }	
</script>