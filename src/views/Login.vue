<template>
    <div id="AuthUser" class="auth_user" >
        <div class="headLogin">
            <meta http-equiv='cache-control' content='no-cache'>
        <meta http-equiv='expires' content='0'>
        <meta http-equiv='pragma' content='no-cache'>
        <title>BusinessWork| Gestión Documental</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </div>
        <div class="bodyLogin" >
            <img class="wave" src="../assets/img3.png"/>
            <div class="containerLogin">
                <div class="login-content">
                    <form class="hed" v-on:submit.prevent="processAuthUser">
                        <h3 class="title">Inventary-OnClick</h3>
                        <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                            <div class="div">
                                <h5>Usuario</h5>
                                <input type="text" class="input"  v-model="user_in.username" name="Usuario">
                            </div>
                        </div>
                        <div class="input-div pass">
                            <div class="i"> 
                                    <i class="fas fa-lock"></i>
                            </div>
                            <div class="div">
                                    <h5>Contraseña</h5>
                                    <input type="password" class="input" v-model="user_in.password" name="Contraseña">
                            </div>
                        </div>
                        <br>
                        <b-container class="text-button">
                            <b-row>
                                <br>
                                <b-col sm="5"><b-button variant="link" @click="recovery">¿Olvidaste tu contraseña?</b-button></b-col>
                                <b-col sm="7"><button type="submit" class="btnLogin">Iniciar Sesión</button></b-col>
                            </b-row>
                        </b-container>
                    </form>
                </div>
                <div class="img">
                    <img src="../assets/logo_def.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
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
    name: "UserAuth",
    data: function(){
        return {
            user_in: {
                username:"",
                password:""
            }
        }
    },
    methods: {
        recovery() {
            this.$emit("click");
        },
        processAuthUser: function(){
            var self = this
            axios.post("https://inventoryonclickback.herokuapp.com/login/", self.user_in,  {headers: {}})
                .then((result) => {
                    if(result.data.Autenticado == true){
                        self.$emit('log-in', self.user_in.username, result.data.Tipo)}
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
	min-width: 100px;
}

.wave{
	position:fixed;
	bottom: 0;
	left: 0%;
	width: 110%;
	height: 30%;
	z-index: -1;
}

.containerLogin{
    width: 90vw;
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap :3rem;
    padding: 0 2rem;
	margin-left: 0%;
	max-width: 1100px;
	min-width: 100;
}

.img{
	display: flex;
	justify-content:flex-start;
	align-items:baseline;
	max-width: 500px;
	max-height: 755px;
}

.login-content{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	text-align: center;
}


.img img{
	position: relative;
	top: 170px; /* ajustar los valores para mover la imagen */
    max-width: 500px;

}

.hed{
	width: 450px;
    margin-bottom: 15%;
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

.login-content .input-div{
	position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 2px 0;
    border-bottom: 2px solid #d9d9d9;
}

.login-content .input-div.one{
	margin-top: 0;
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

.btnLogin{
	display: block;
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
	margin: 1rem 0;
	cursor: pointer;
	transition: .5s;
}
.btnLogin:hover{
	background-position: right;
}

.text-button{
	align-items:initial;
}

@media screen and (max-width: 1050px){
	.container{
		grid-gap: 5rem;
	}
}

@media screen and (max-width: 1000px){
	form{
		min-width: 150px;
	}

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

@media only screen and (max-width:600px)
{
	.login-content{
		min-width: 280px;
	}
} 

</style>