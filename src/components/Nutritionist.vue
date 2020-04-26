<template>
<div class="jumbotron">
  <div v-if="!user.name">
    <div class ="row">
      <img src="@/assets/google.png"  @click="authenticate()" width="55%" height="55%">
    </div>  
  </div>
    <div v-if="user.name"> 
      <br>   
      <div>
      <div class="ex1">
        <div class = "container d-flex flex-direction-column" v-for="mensaje in mensajes" v-bind:key="mensaje.mensaje">  ç
          <div class ="row" >
            <img :src="user.picture" width="15%" height="30%">{{mensaje.username}}            
            <p class="box1">{{mensaje.mensaje}}</p>            
          </div> 
        </div>
      </div> 
      <form @submit.prevent="sendMessage">
        <textarea v-model="mensaje" cols="43" rows="3" placeholder="What is your question?..."></textarea>           
        <input type="submit" value="Send" class="boton">        
        <input type="reset" value="Reset" class="boton">
      </form>       
  </div>     
  <div class="container-fluid">
    <br>
    <div class="row">
      <div class ="col">        
          <button class="button2" @click="comebackHome()">Go Back</button>         
      </div> 
      <div class ="col">
          <button class="button2" @click="logout()">LogOut</button>        
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
import firebase from "firebase";

export default {
  name: 'Nutritionist',
  data() {  
    
    return {
            
            username: '',                     
            mensaje: null,
            mensajes:[],
            user: {
              name: null,
              picture: null,
            },
        }
     },
  methods: {

    logout () {
      this.username = ""
      firebase.auth().signOut().then (() =>{
      this.$router.push ('/home');
      }).catch(function(error) {
      /* eslint-disable no-console */
      console.log (error)
      /* eslint-enable no-console */
      });
},

    authenticate () {           
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result => {          
      var user = result.user;
      this.user.name = user.displayName
      this.user.picture = user.photoURL
      firebase.database().ref('messages').on('value', snapshot => this.cargarMensajes(snapshot.val()))      
      }).catch(function(error) {
      /* eslint-disable no-console */
      console.log (error)
      /* eslint-enable no-console */
      });
 }, 

      
      comebackHome () {
          this.$router.push('/home') 
      },

            
      sendMessage() {
        firebase.database().ref('messages').push({
          mensaje: this.mensaje,
          username: this.user.name,
          })
        .then (() => this.mensaje='');
        
      },

      cargarMensajes (mensajes) {          
        this.mensajes = [];
        for (let key in mensajes) {
          this.mensajes.push({
              mensaje: mensajes[key].mensaje,
              username: mensajes[key].username,
          });
         }
    },

    
    }

      
}
</script>

<style scoped>
.jumbotron {
    background-image: url('~@/assets/nutricionista.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;  
    background-size: cover;
    background-position: center center;
    margin: 0;
    height: 113vh;
    
  }
.button2 {
  border-radius: 50%;
  padding: 32px 16px;
  background-color: #008CBA;
}
.box1 { 
font-family: sans-serif; 
font-size: 15px; 
font-weight: 350; 
color: #ffffff; 
background:green ;
width: 50% ;
height: 37%;
}

.boton {
  padding:10px 53px;  
  margin: 7px 5px;  
  color: white;
  background: gray;  
}
div.ex1 {  
  height: 300px;
  width: 300px;
  overflow-y: scroll;
}
</style>