<template>
<div class="q-old-nav">
    <div  v-show="isMenuOpen" class="profile" style="">
        <div class="profile-info-row">
            <span>Мой туроператор</span><span>{{$root.cur_user_name}}</span>
        </div>
        <a class="setting-link" id="btn-myprofile">Profile Settings</a>
        <a class="setting-link" id="btn-mycompany">My Company</a>
        <a class="setting-link" id="btn-pass">Change Password</a>
        <a class="setting-link" id="btn-logout" @click="logout">Log Out</a>
    </div>
    <header id="header">
        <div class="container-olta">
            <div class="left-col">
                <a href="/" class="logo">
                    <img src="/static/images/img/Logo.png"></a>
                <form id="searchmyquotations" class="form-inline">
                    <input name="query" placeholder="Search" type="text">
                    <button type="submit"></button>
                </form></div>
            <div class="right-col" @click="menuClick();">
                <div id="profile" class="pull-right" title="My Profile" style="height: 40px; width: 40px; margin: 14px; cursor: pointer; display: block; border-radius: 50%; background-image: url('/static/uploads/users/bf618413-9cec-455d-94b8-764474eb6978/02-11-2016 17-04-20.jpg'); background-size: cover; background-position: center center;"></div>
                <span >{{$root.cur_user_name}} <i class="fa fa-angle-down" aria-hidden="true"></i></span>
            </div>
        </div>
    </header>
</div>
</template>

<script>
//import {navbar} from 'bootstrap-vue/lib/components'
import axios from 'axios'
export default {
    components: {
        //navbar
    },

  name: 'quotationoldnavbar',
  data () {
    return {
      msg: 'Welcome to Olta-travel',
      isMenuOpen:false,
    }
  },
  methods:{
      logout() {
          //this.$router.push({name:'Login'});
          self=this;
          axios.defaults.baseURL ="http://olta-tour-copy.local";
          axios({method:'post',url:'async/basic.logout',withCredentials: true}).then(function(responce){   self.$router.push({ name: 'home' })})
      },
      menuClick() {
        this.isMenuOpen = ! this.isMenuOpen;
      },
      back() {
          this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.q-old-nav {

}
.profile .setting-link {
    color: #425d6f;
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 13px;
}
</style>
