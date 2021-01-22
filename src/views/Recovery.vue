<template>
    <div id="RecoverUser" class="auth_user">
        <div class="headLogin">
            <meta http-equiv='cache-control' content='no-cache'>
        <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </div>
        <div class="bodyLogin">
            <img class="wave" src="../assets/img3.png" />
                <div class="login-content">
                    <form class="hederform" v-on:submit.prevent="processRecoverUser">
                        <div class="borderform">
                        <h3 class="title" style="font-size: 27px;">Recuperar Contraseña</h3>
                        <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-envelope"></i>
                        </div>
                            <div class="div">
                                <h5>Correo Electronico</h5>
                                <input type="text" class="input"  v-model="RecoverUser.email" name="Usuario">
                            </div>
                        </div>
              
                        <b-col cols="6" ><button type="submit" class="btnRecover" variant="link" @click="recovery">Enviar</button></b-col>
                  
                        </div>
                        
                    </form>
                </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {

	name: "UserAuth",
    data: function(){
        return {
            RecoverUser: {
                email:"",
            }
        }
    },
	mounted: function() {
		const inputs = document.querySelectorAll(".input");

		function addcl(){
			let parent = this.parentNode.parentNode;
			parent.classList.add("focus");
		}

		function remcl(){
			let parent = this.parentNode.parentNode;
			if(this.value == ""){
				parent.classList.remove("focus");
			}
		}

		inputs.forEach(input => {
		input.addEventListener("focus", addcl);
		input.addEventListener("blur", remcl);
		});
	
	},
    methods: {
        recovery() {
            this.$emit("click");
        },
        processRecoverUser: function(){
            var self = this
            axios.post("https://inventoryonclickback.herokuapp.com/recovery/?mail=" + self.RecoverUser.email).then((result) => {
                    if(result.data.Autenticad == true){
                        self.$emit('log-in', self.RecoverUser.email, result.data.Tipo)}
                })
                .catch((error) => {
                    
                    if (error.response.status == "404")
                        alert("ERROR 404: Usuario no encontrado.");
                    
                    if (error.response.status == "403")
                        alert("ERROR 403: Contraseña Erronea.");  
                });
        }


	}
}
</script>

<style>


.bodyLogin{
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    text-align: -webkit-center;
}

.borderform{
    margin: 10%;
}

.wave{
	position:fixed;
	bottom: 0;
	left: 0%;
	width: 110%;
	height: 30%;
	z-index: -1;
}


.img{
	display: flex;
	justify-content:flex-start;
	align-items:baseline;
    
}

.login-content{
    margin-top: 3%;
	justify-content: center !important;

}

.img img{
	width: 500px;
	position: relative;
	top: 170px; /* ajustar los valores para mover la imagen */
    
}

.hederform{
	width: 400px;
    border: 1px solid #dadce0;
    border-radius: 8px;
}

.login-content img{
    height: 100px;
}

.login-content h2{
	margin: 15px 0;
	color: #333;
	text-transform: uppercase;
	font-size: 2.9rem;
}


.i{
	color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
}

.i i{
	transition: .3s;
}

.input-div.one{
    margin-top: 25% !important;
    margin-bottom: 0% !important;
}

.input-div > div{
    position: relative;
	height: 45px;
}

.input-div > div > h5{
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	color: #999;
	font-size: 18px;
	transition: .3s;
}

.input-div:before, .input-div:after{
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0%;
	height: 2px;
	background-color: #14c2ee;
	transition: .4s;
}

.input-div:before{
	right: 50%;
}

.input-div:after{
	left: 50%;
}

.input-div.focus:before, .input-div.focus:after{
	width: 50%;
}

.input-div.focus > div > h5{
	top: -5px;
	font-size: 15px;
}

.input-div.focus > .i > i{
	color: #14c2ee;
}

.input-div > div > input{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	color: #555;
	font-family: 'poppins', sans-serif;
}

.input-div.pass{
	margin-bottom: 4px;
}

a{
	display: block;
	text-align: right;
	text-decoration: none;
	color: #999;
	font-size: 0.9rem;
	transition: .3s;
}

a:hover{
	color: #38d39f;
}

.btnRecover{
	width: 100%;
	height: 50px;
	border-radius: 25px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #312670, #38d3d3, #32b9be);
	background-size: 200%;
	font-size: 1.2rem;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	cursor: pointer;
	transition: .5s;
    margin: 1rem;
    margin-left: 175px;
    margin-bottom: 130px;
    
}
.btnRecover:hover{
	background-position: right;
}

@media screen and (max-width: 1050px){
	.container{
		grid-gap: 5rem;
	}
}

@media screen and (max-width: 1000px){

	.login-content h2{
        font-size: 2.4rem;
        margin: 8px 0;
	}

	.img img{
		width: 400px;
	}
}

@media screen and (max-width: 900px){
	.container{
		grid-template-columns: 1fr;
   
	}

	.img{
		display: none;
	}

	.wave{
		display: none;
	}

	.login-content{
		justify-content: center;
	}
}


</style>