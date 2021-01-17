<template>
  <div class="d-flex justify-content-center">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="col-md-7 col-lg-5 col-sm-9">
        <b-form-group
            id="input-group-1"
            label="Nombre de Usuario:"
            label-for="input-1"
        >
            <b-form-input
            class="form-control-md"
            id="input-1"
            v-model="form.username"
            type="text"
            placeholder="Ingrese un nombre de usuario"
            required
            autofocus
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Email:" label-for="input-2">
            <b-form-input
            class="form-control-md"
            id="input-2"
            v-model="form.email"
            placeholder="Ingrese el correo electronico"
            type="email"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Nombre:" label-for="input-3">
            <b-form-input
            class="form-control-md"
            id="input-3"
            v-model="form.name"
            placeholder="Ingrese el nombre"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Apellido:" label-for="input-4">
            <b-form-input
            class="form-control-md"
            id="input-4"
            v-model="form.last_name"
            placeholder="Ingrese el apellido"
            required
            ></b-form-input>
        </b-form-group>
       
        <b-form-group id="input-group-5" label="Contraseña:" label-for="input-5">
            <b-form-input
            class="form-control-md"
            id="input-5"
            v-model="form.password"
            placeholder="Ingrese la contraseña"
            type="password"
            required
            ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios"
  export default {
    data() {
      return {
        form: {
            username: '',
            email: '',
            name: '',
            last_name: '',
            type_user: 0,
            password: ''
        },
        show: true
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault()
        const res = await axios.post('https://inventoryonclickback.herokuapp.com/users/', JSON.stringify(this.form));
        alert(res.data)
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