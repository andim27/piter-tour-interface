<template>
    <div>

        <router-view></router-view>

    </div>

  <!--<div id="app"  v-bind:class="{ 'page-fon body-fon-img': ['Hello','Login'].includes(this.$router.currentRoute.name) }">-->
    <!--<img src="./assets/logo.png">-->
      <!--<section v-if="(['Hello','Login'].includes(this.$router.currentRoute.name))" class="logo-sec" >-->
          <!--<img src="/static/images/Logo.png" class="logo-img">-->
      <!--</section>-->

  <!--</div>-->
</template>

<script>

export default {
  name: 'app',
    mounted() {
      //console.log(this.$router);
      //alert(this.$router.currentRoute.name);
    }
}
</script >

<style >

/*@import "static/css/styleolta.css";*/

body {
    padding: 0px 16px;
    color: #333;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857;
}
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*!*margin-top: 60px;*!*/
/*}*/
/*.body-fon-img {*/
    /*background: rgba(0, 0, 0, 0) url("/static/images/login-background.jpg") no-repeat scroll center center / cover ;*/
/*}*/
/*.page-fon {*/

    /*display: flex;*/
    /*flex-direction: column;*/
    /*font-family: "Roboto",sans-serif;*/
    /*justify-content: center;*/
    /*left: 0;*/
    /*position: fixed;*/
    /*top: 0;*/
    /*margin-top:0px;*/
    /*height: 100%;*/
    /*width: 100%;*/
/*}*/
/*.logo-sec {*/
    /*margin: 10px auto 10px auto;*/
    /*width:100px;*/
    /*color:white;*/
/*}*/
/*.logo-img {*/
    /*width:60px;*/
    /*text-align: center;*/
/*}*/
</style>
