<template>
  <div class="jumbotron">
    <div class="container">
      <div class="d-flex justify-content-center">
        <h4 class="text-white">First level routine of 6 weeks and with 3 days of training per week:</h4>
      </div>
    </div>
    <br>
    <div class="container">
      <div class="d-flex justify-content-center">
        <img src="@/assets/routine.jpg" alt="Rutina" style="max-width:100%;height:auto;">
      </div>
    </div>
    <br>
    <br>
    <div class="container"></div>
      <div class="d-flex justify-content-center">
        <iframe
        frameborder="0"
        width="300"
        height="90"
        src="https://drive.google.com/file/d/1D-MrKltll0kF50R_kI-0ObpTbzE0cFSE/preview">
        </iframe>
      <div>
    </div>
  </div> 
  <br>
  <button @click="comebackHome()">Go Back</button>  
</div>

</template>

<script>
export default {
  name: 'SportNavBar',
  methods: {
      comebackHome () {
          this.$router.push('/home') 
      }
    }
  
}
</script>

<style scoped>

.text-white{
  color:white;
}
.jumbotron {
    background-image: url('~@/assets/gym2.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;  
    background-size: cover;
    background-position: center center;
    margin: 0;
    height: 100vh;
    
  }
button {
  border-radius: 50%;
  padding: 32px 16px;
  background-color: #008CBA;
}

</style>


