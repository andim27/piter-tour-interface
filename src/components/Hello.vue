<template>
  <div class="hello ">
      <!--<div class="body-fon-img"></div>-->
      <div id="spa">

      </div>
   <login></login>
  </div>
</template>

<script>
import axios from 'axios'
import Login from '@/components/Login'

export default {
  name: 'hello',
  components:{
    Login
  },
  data () {
    return {
      msg: 'Welcome to Olta-travel'
    }
  },
  methods:{
      login() {
          this.$router.push({name:'Login'});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-fon-img {
    position: relative;
    top:0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0) url("/static/images/login-background.jpg") no-repeat scroll center center / cover ;
}
</style>
