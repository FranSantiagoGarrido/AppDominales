<template>
<div class="jumbotron">
  <div class="container-fluid">          
      <div class="input-group fixed-top">                                                      
        <input type="text" class="form-control" v-model="search" placeholder="What do you want to eat?...">      
      </div>              
  </div>   
  <br>
  <div class="container-fluid" v-for="datas in filteredRecipe" v-bind:key="datas.strMealThumb">    
      <div class="row"> 
            <div class="col d-flex justify-content-end align-items-end">
             <a :href="datas.strYoutube"> 
             <p>{{datas.strMeal}}</p> 
             </a>
             </div>
            <div class="col-sm-4 d-flex justify-content-end align-items-start">             
              <img :src="datas.strMealThumb" width="70%" height="70%">                                              
            </div>
      </div>
  </div>
  <br>
  <div class="container-fluid">
    <div class="row">
      <div class ="col">        
          <button class="button" @click="comebackHome()">Go Back</button>         
      </div> 
      <div class ="col">
          <button class="button2" @click="methodThatForcesUpdate()">More</button>        
      </div>
    </div>
  </div> 
</div>


</template>

<script>

export default {
  name:'Recipe',
            

  data(){ 
      return {         
        dataRecipe:[],
        search:'',
        counter: 0
      }
}, 

  methods: {
    comebackHome () {
        this.$router.push('/home') 
      }, 
      methodThatForcesUpdate() {
        this.doRequest(); 
      
    },
      
        
    doRequest(){
        fetch('https://www.themealdb.com/api/json/v2/9973533/randomselection.php', {
            method: "GET",
        })
        .then(function (response) {
            return response.json();
            }).then((dataFromServer) => {
                /* eslint-disable no-console */
                console.log(dataFromServer)
                /* eslint-enable no-console */
                this.dataRecipe = dataFromServer.meals;                            
            })
            }

        },
    created(){
        this.doRequest(); 
        },

    computed: {
    filteredRecipe() {      
      return this.dataRecipe.filter(datas => {
        return datas.strMeal.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
  }

</script>


<style scoped>

.jumbotron{
    background-image: url('~@/assets/recipe.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;  
    background-size: cover;
    background-position: center center;
    margin: 0;
    height: 450vh;
}
.form-control-borderless {
    border: none;
}

.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {
    border: none;
    outline: none;
    box-shadow: none;
}
a {

  color:black;
}
button {
  border-radius: 50%;
  padding: 25px 10px;
  background-color: #008CBA;
}
.button2 {
  border-radius: 50%;
  padding: 25px 20px;
  background-color: #008CBA;
}


</style>


