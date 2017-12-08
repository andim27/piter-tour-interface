<template>
  <div class="new-login">

      <section class="login">
          <a class="login-logo">
              <img src="static/images/img/login-Logo.png"></a>
          <div class="log-in-error-message">
              <!--<div v-if="cur_user_img==''"  class="avatar-img" style="background-image: url('/static/images/defaultavatar.png'); background-position: center center; background-size: cover;"></div>-->
              <!--<div class="avatar-img" v-bind:style="stylesLoginAvatar">-->
              <div class="avatar-img rounded-50-ps">
                  <img v-if="cur_user_img==''" class="rounded-50-ps" src="/static/images/defaultavatar.png"width="100" height="100" />
                  <img v-else class="rounded-50-ps" v-bind:src="cur_user_img" width="100" height="100" />
              </div>
              <form id="form-login" v-on:submit.prevent>
                  <label for="username">
                      <input @focus="isEditUserName=true;isErrorLogin=false;"  id="username" name="username" tabindex="1" type="text" v-model="username" @change="handlerUserNameChanged">
                      <span v-bind:class="{active: isEditUserName}">Username</span>

                      <i  v-if="isUserExist" class="fa fa-check" aria-hidden="true" style="display:inline-block"></i>
                      <i  v-else class="fa fa-check" aria-hidden="true" ></i>
                  </label>
                  <label for="password">
                      <input @focus="isEditPassword=true" id="password" name="password" tabindex="2" type="password" v-model="password">
                      <span v-bind:class="{active: isEditPassword}">Password</span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </label>
                  <span v-show="isErrorLogin" class="login-helper" style="color: rgb(255, 0, 0);">{{errorMes}}</span>
                  <span class="login-helper"></span>
                  <button type="submit" tabindex="3" @click="loginUser()">Log In</button>
                  <span style="text-align: center; display: inherit;">Forgot your password?<br>Contact us +7 (812) 336-60-80</span>
              </form>
          </div>
      </section>

  </div>
</template>

<script>
import axios from 'axios'
//import AxiosMockAdapter from 'axios-mock-adapter'
//import { Form, HasError, AlertError } from 'vform'

//Vue.component(HasError.name, HasError)
//Vue.component(AlertError.name, AlertError)

export default {
  name: 'login',
  components: {
      //Form,
      //HasError,
      //AlertError
  },
  data () {
        return {
            title_msg: 'Please, log-in:',
            username:'',
            password:'',
            isEditUserName:false,
            isEditPassword:false,
            isUserExist:false,
            isErrorLogin:false,
            errorMes:'',
            cur_user_img:'',
            is_user_name_site:false,
            url_upload:'http://olta-tour-copy.local/uploads/users/',
            url_login_user:'/async/basic.login',
            url_check_user:'/async/basic.checkuser',
            // Create the form instance
//            form: new Form({
//                username: '',
//                password: '',
//                remember: false
//            })
        }
    },
    mount() {
        axios.defaults.baseURL ="http://olta-tour-copy.local";
        axios.defaults.withCredentials = true;
        axios.defaults.headers.common['Content-type'] = "application/x-www-form-urlencoded";
        //axios.defaults.headers.common['"Access-Control-Allow-Origin"'] = "*";
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        if (this.$root.cur_user_name =='') {this.$root.cur_user_name='andrey.tour';}

    },
    computed() {
      return {
          stylesLoginAvatar() {
              if (this.cur_user_img=='') {
                  return {
                      'background-image': "url(/static/images/defaultavatar.png); background-position: center center; background-size: cover"
                  };
              }
              return {
                  'background-image': "url("+this.cur_user_img+"); background-position: center center; background-size: cover"

              };
          }
      }

    },
  methods:{
      back() {
//          this.$router.go(-1);
          this.$router.push({ name: 'home' })
      },
      login () {

          console.log('login in');
          axios.defaults.baseURL ="http://olta-tour-copy.local";
          //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

          this.loginUser();
      },


      handlerUserNameChanged() {
          this.isEditUserName = (this.username==''?false:true);
          if (this.username=='') {
              this.isUserExist = false;
              this.cur_user_img='';
          }
//              return
//          } else {
//              this.isEditUserName=true;
//          }
          if (this.username.length >= 2) {
              this.checkUserExist()
          }
      },
     checkUserExist() {
          console.info("isUserExist:");

          try {
              //const {"success":true,"message":"OK","data":{"user":{"is_user":true,"img":null}}} await axios.post(this.$site_name+this.url_user_check);
              //const answer = await axios.post(this.url_check_user,{username:this.form.username});
              //const answer = await axios({method:'post', headers: {"Access-Control-Allow-Origin": "*","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}, url:this.url_check_user,data:{username:this.form.username}});

              self=this;
              axios.defaults.baseURL ="http://olta-tour-copy.local";

              var params = new URLSearchParams();
              params.append('username', this.username);
              axios.post(this.url_check_user, params).then(
                  function(response) {
                      console.log('isUser?='+response.data);
                      self.is_user_name_site=response.data.data.user.is_user;
                      self.isUserExist=true;
                      self.cur_user_id=response.data.data.user.user_id;
                      self.$root.user_id=response.data.data.user.user_id;
                      self.$root.cur_user_name=self.username;
                      self.$root.cur_user_img=response.data.data.user.img;
                      if (response.data.data.user.img !=null) {
                          self.cur_user_img=self.url_upload+response.data.data.user.img;
                      } else {
                          self.cur_user_img='';
                      }

                      //alert(self.cur_user_img );
                  }
              ).catch(function(error){
                  console.log(error);
                  self.isUserExist=false;
              });


              console.log("isUserExist?="+this.is_user_name_site);
          } catch (e) {
              console.log('ERROR when checkuser!');
          }
      },
      loginUser () {
        if (this.is_user_name_site==true) {
            var self=this;
            //axios.defaults.baseURL ="http://olta-tour-copy.local";
            var params = new URLSearchParams();
            params.append('username', this.username);
            params.append('password', this.password);
            //,headers: {"Access-Control-Allow-Origin": "*"}
            axios.post(this.url_login_user, params,{withCredentials: true}).then(
                function(response) {
                    console.log('User id: ='+response.data.userId);
                    //alert('User id: ='+response.data.userId);
                    if (response.data.success==false) {
                        self.isErrorLogin=true;
                        self.errorMes=response.data.mes;
                    } else {
                        self.showQuotationList();
                    }
                    self.showQuotationList();

                }
            ).catch(function(error){
                console.log(error);

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    self.errorMes=error.response.data;
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    self.errorMes=error.response;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    self.errorMes=error.message;
                }
                console.log(error.config);
                self.isUserExist=false;
                self.isErrorLogin=true;
                self.errorMes=error.config;
                self.showQuotationList();
            });

        } else {
            this.errorMes='Wrong data';
            this.isErrorLogin=true;
            //AlertError.set('Wrong data');
        }

      },
      showQuotationList () {
          this.$router.push({name:'QuotationList'});
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.greenuser {
    display:inline-block;
}

h1, h2 {
    font-weight: normal;
    color:white;
    text-shadow: 2px 2px #FF0000;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.login-close-btn {
  float:right;

 }
.fogot-passw {
    font-size: 12px;
    color: #c1c6cb;
    text-align: center;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    margin:20px;
}
.rounded-30 {
    border-radius: 30px;
}
.rounded-50-ps {
    border-radius: 50%;
}
.round-check {
    display: inline-block;
    background-color: #39b774;
    border-radius: 50%;
    color: #fff;
    line-height: 16px;
    font-size: 11px;
    width: 16px;
    height: 16px;
    padding: 0 0 0 1px;
}
</style>
