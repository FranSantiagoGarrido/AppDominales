<template>
  <div>
    <button class="button" style="width:100%;" @click="gohome()">Wellcome to AppDominals</button>   
  </div>

</template>

<script>
export default {
  methods:{
        gohome(){               
                this.$router.push('/home');
      }
  }

}
</script>
<style scoped>

div { 
    margin: 0;
    height: 100vh;
    background-image: url('~@/assets/exit.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;  
    background-size: cover;
    background-position: center center;
  }
  .button {
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 4px;
    position: relative;
    background-color: #16a085;
    border: none;
    color: #fff;
    padding: 20px;
    width: 200px;
    text-align: center;
    transition-duration: 0.4s;
    overflow: hidden;
    box-shadow: 0 5px 15px #193047;
    border-radius: 4px;
    margin: 400px 0px 20px 0px;
  }
  
  .button:hover {
    background: #fff;
    box-shadow: 0px 2px 10px 5px #1abc9c;
    color: #000;
  }
  
  .button:after {
    content: "";
    background: #1abc9c;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
  }
  
  .button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
  
  .button:focus { outline:0; }
  </style>





