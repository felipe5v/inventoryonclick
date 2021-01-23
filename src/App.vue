<template>
  <div id="app">
    <div class="page" v-if="getSpinner">
      <b-spinner class="spinner" :variant="'primary'" :key="'primary'"></b-spinner>
    </div>
    <div id="nav">
      <Navbar v-if="is_auth" @click="click"  />
    </div>
    <router-view v-on:recover="recoveryPass" v-on:log-in="logIn" @click="recovery"   />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  data: function(){
      return{ 
        is_auth: localStorage.getItem('isAuth') || false}    
  },
  components: { "Navbar": Navbar},


  methods:{
    init: function(){
      var x = this
      let password = localStorage.getItem('Recovery')
      if(window.location.pathname=="/recuperar/"+ password){
        x.$router.push({name: "RecoveryPass", params:{ pass: password }})
      }
    },

    updateAuth: function(){
      var self = this

      self.is_auth  = localStorage.getItem('isAuth')

      if(self.is_auth == null){
        self.$router.push({name: "Login"})
      }else{
        self.$router.push({name: "Home"})
      }
      if(self.is_auth == false){
        self.$router.push({name: "Login"})
      }

      self.init()
    },

    recoveryPass: function(pass){        
      localStorage.setItem('Recovery', pass)
    },
    logIn: function(username, client){
      localStorage.setItem('current_username', username)
      localStorage.setItem('client', client)
      localStorage.setItem('isAuth', true)
      this.updateAuth()  
    },

    click(){
      localStorage.removeItem('isAuth')
      localStorage.removeItem('client')
      localStorage.removeItem('current_username')
      this.updateAuth()
    },
    recovery(){
      var me = this
      me.$router.push({name: "Recovery"})
    },

  },
  created: function(){

    this.updateAuth()

  },

  
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 30px;

  a {
    font-weight: bold;
    color: #1c252e;

    &.router-link-exact-active {
      color: #03241e;
    }
  }
}

</style>
