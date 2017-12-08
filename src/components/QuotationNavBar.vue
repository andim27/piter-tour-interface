<template>
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <b-navbar-brand href="#">
            <a class="navbar-brand" href="#">
                <img src="static/images/Logo.png" width="60" height="40" class="d-inline-block align-top" alt="">

            </a>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-nav is-nav-bar>
                <!--<b-nav-item href="#" disabled>Tour Operator</b-nav-item>-->
                <b-nav-item href="#" @click="back">back</b-nav-item>
                <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
            </b-nav>

            <!-- Right aligned nav items -->
            <b-nav is-nav-bar class="ml-auto">

                <!--<b-nav-form>-->
                    <!--<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>-->
                    <!--<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
                <!--</b-nav-form>-->

                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile Settings</b-dropdown-item>
                    <b-dropdown-item href="#">My Company</b-dropdown-item>
                    <b-dropdown-item href="#">Change Password</b-dropdown-item>
                    <b-dropdown-item href="#">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
//import {navbar} from 'bootstrap-vue/lib/components'

export default {
    components: {
        //navbar
    },

  name: 'quotationnavbar',
  data () {
    return {
      msg: 'Welcome to Olta-travel'
    }
  },
  methods:{
      login() {
          this.$router.push({name:'Login'});
      },
      back() {
          this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
    color:white;
    text-shadow: 2px 2px #FF0000; ;
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
</style>
