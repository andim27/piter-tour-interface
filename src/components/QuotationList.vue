<template>
<div class="container-olta" >
<quotation-old-nav-bar ></quotation-old-nav-bar>
        <!--<div class="row justify-content-md-left" style="margin-bottom: 10%;padding:10px;">-->


            <!--<div class="col">-->
                <!--<div class="collapse navbar-collapse" id="navbarNavDropdown">-->
                    <!--<ul class="navbar-nav">-->
                        <!--<li class="nav-item dropdown">-->
                            <!--<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
                                <!--{{$root.cur_user_name}}-->
                            <!--</a>-->
                            <!--<div id="profile-img" class="pull-right" title="My Profile" style=""></div>-->
                            <!--<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">-->
                                <!--<a class="dropdown-item" href="#">Profile Settings</a>-->
                                <!--<a class="dropdown-item" href="#">My Company</a>-->
                                <!--<a class="dropdown-item" href="#">Change Password</a>-->
                                <!--<a class="dropdown-item" href="#">Log Out</a>-->
                            <!--</div>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

    <div id="content" class="content">

        <div class="buttons-row"  >
            <button class="add-quotation-btn" @click="createNewQuatation">New Quotation</button>
        </div>

        <!--<div class="row  justify-content-md-left">-->
        <!--<button type="button" class="btn btn-outline-success my-2 my-sm-0" @click="createNewQuatation">New Quatation</button>-->
    <!--</div>-->
        <table id="myquotations">
            <thead>
                <tr>
                    <th><span>#</span></th><th><span>Client</span></th><th><span>Name</span></th><th><span>Destinations</span></th><th><span>Nights</span></th><th><span>PAX</span></th><th><span>Language</span></th><th colspan="2"><span>Creator</span></th><th><span>Create Date</span>
                </th>
                </tr>
            </thead>
            <tbody>
                <tr class="quotation-info-row"   v-for="(item, index) in items" @click="showDetailsQuotation(item.id,index)" v-bind:data-id="item.id">
                    <td v-bind:data-key="item.id" v-bind:title="('ID #'+item.id)"><span class="cell">{{item.id}}</span></td>
                    <td v-bind:data-key="clientName"  title="Client's Name"><span class="cell" v-bind:placeholder="(item.clientName==''||item.clientName==null?'Client not specified':item.clientName)"></span></td>
                    <td v-bind:data-key="item.name" title="Quotation Name"><span class="cell" v-bind:placeholder="('Name not specified')">{{item.name}}</span></td>
                    <td v-bind:data-key="item.destinations" title="Destinations"><span class="cell">{{item.destinations}}</span></td>
                    <td v-bind:data-key="item.nights" title="Number of Nights"><span class="cell">{{item.nights}}</span></td>
                    <td v-bind:data-key="item.pax" title="Group size range"><span class="cell">{{item.pax}}</span></td>
                    <td v-bind:data-key="item.lang">
                        <img v-if="getCountryFlag(item.lang) != null"  v-bind:title="item.lang" v-bind:alt="item.lang"   v-bind:src="'static/images/img/'+getCountryFlag(item.lang) " >
                        <img v-else   v-bind:title="item.lang" v-bind:alt="item.lang"   src="static/images/img/stars.png" >
                    </td>
                    <!--<td data-key="user.name" title="Creator">Name</td>-->
                    <td v-bind:data-key="item.operator.name" title="Creator"><span class="cell-pail">{{item.operator.name}}</span></td>
                        <td v-if="item.user.image !=''&&item.user.image !=null" data-key="user.image"><img class="img-avatar" v-bind:src="'/static/uploads/users/'+item.user.image" title="Name" ></img></td>
                        <td v-if="item.user.image ==''||item.user.image==null" data-key="user.image"><img  class="img-avatar" src="/static/images/defaultavatar.png" title="Avatar" ></img></td>
                    <td data-key="created" title="Date of Creation"><span class="cell-pail">{{item.created}}</span></td>
                </tr>
            </tbody>
        </table>



    </div>
    <!-- b:Modal Component:createNewQuotation -->
    <quotation-new ref="createQuotationModalRef"></quotation-new>

    <!--<b-modal ref="createQuotationModalRef" hide-footer title="Create new quotation:">-->

        <!--<div class="d-block text-center">-->
            <!--<b-row class="my-1">-->
                <!--<b-col sm="2">-->
                    <!--<label for="input-q-name">Name:</label>-->
                <!--</b-col>-->
                <!--<b-col sm="10">-->
                    <!--<b-form-input id="input-q-name" type="text" placeholder="Enter quotation name" v-model="q_new_name"></b-form-input>-->
                <!--</b-col>-->
            <!--</b-row>-->
        <!--</div>-->
        <!--<b-btn class="btn btn-outline-success" variant="info"  @click="hideQuotationCreateModal">Create</b-btn>-->
    <!--</b-modal>-->


    <!-- e:Modal Component:createNewQuotation -->
    <!--<b-modal id="create-new-q-modal" title="Bootstrap-Vue">-->
        <!--<p clas="my-4">Hello from modal!</p>-->
    <!--</b-modal>-->
</div>

</template>

<script>
import axios from 'axios'
import QuotationOldNavBar from '@/components/QuotationOldNavBar'
import QuotationNew from "./QuotationNew.vue";
//import QuotationNew from '@/components/QuotationNew'
export default {
    name: 'QuotationList',
    components:{
        QuotationNew,
        QuotationOldNavBar,
        //QuotationNew
    },
    created() {

        //axios.defaults.withCredentials = true;
        //axios.defaults.headers.common['Content-type'] = "application/x-www-form-urlencoded";
        //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    },
    mounted() {
        axios.defaults.baseURL ="http://olta-tour-copy.local";
        this.getAppUser();
        this.getQuotationList();
    },
    data () {
        return {
            current_user:{},
            curent_username:'Andrey',
            is_user_name_site:false,
            url_app_user:'async/basic.getappuser',
            url_access_app_user:'async/checkaccesstoapplication',
            url_quotation_list:'async/rfq.getmyquotations',

            items:[
                {"id":"12","duplicateOfId":null,"code":"wdcypjhh","userId":"50","tourOperatorCompanyId":"1","tourOperatorUserId":"50","created":"09-08-2017 05:58","executed":null,"name":"TestTest","clientName":"Test Operator","lang":"English","nights":"3","hotelPriceType":"Group","ftlNumber":"0","ftlAccType":"DBL","dateRangeType":"daterange","totals":null,"failure":null,
                    "operator":{"id":"50","companyId":"1","created":"2017-08-09 00:00:00","department":null,"head":"0","name":"Test Operator","username":"test_operator","password":"cc03e747a6afbbcbf8be7668acfebee5","role":"2","image":null,"active":"1"},
                    "user":{"id":"50","companyId":"1","created":"2017-08-09 00:00:00","department":null,"head":"0","name":"Test Operator","username":"test_operator","password":"cc03e747a6afbbcbf8be7668acfebee5","role":"2","image":null,"active":"1"},
                    "destinations":"Moscow","pax":"15-25","server_item":{}},
                {"id":"25","duplicateOfId":null,"code":"wdcypjhh","userId":"50","tourOperatorCompanyId":"1","tourOperatorUserId":"50","created":"09-08-2017 05:58","executed":null,"name":"TestTest","clientName":"Test Operator-2","lang":"English","nights":"7","hotelPriceType":"Group","ftlNumber":"0","ftlAccType":"DBL","dateRangeType":"daterange","totals":null,"failure":null,
                    "operator":{"id":"50","companyId":"1","created":"2017-08-09 00:00:00","department":null,"head":"0","name":"Test Operator-2","username":"test_operator","password":"cc03e747a6afbbcbf8be7668acfebee5","role":"2","image":null,"active":"1"},
                    "user":{"id":"50","companyId":"1","created":"2017-08-09 00:00:00","department":null,"head":"0","name":"Test Operator","username":"test_operator","password":"cc03e747a6afbbcbf8be7668acfebee5","role":"2","image":null,"active":"1"},
                    "destinations":"Piterburg","pax":"15-25","server_item":{}}
            ],
            q_new_name:'',//--new quotation name when add modal
            countries: [
                {name:'Chinese',name_img_flag:'chin-flag.png'},
                {name:'Bulgaria',name_img_flag:'bulgaria.png'},
                {name:'Czech',name_img_flag:'czech.png'},
                {name:'Dutch',name_img_flag:'bulgaria.png'},
                {name:'English',name_img_flag:'britan-flag.png'},
                {name:'Farsi',name_img_flag:'iran.png'},
                {name:'Finnish',name_img_flag:'Finnish.png'},
                {name:'French',name_img_flag:'franch-flag.png'},
                {name:'German',name_img_flag:'deutsch-flag.png'},
                {name:'Italian',name_img_flag:'italian-flag.png'},
                {name:'Japanese',name_img_flag:'japan-flag.png'},
                {name:'Korean',name_img_flag:'korea-flag.png'},
                {name:'Mandarin',name_img_flag:'chin-flag.png'},
                {name:'Norwegian',name_img_flag:'norway-flag.png'},
                {name:'Persian',name_img_flag:'iran.png'},
                {name:'Polish',name_img_flag:'poland-flag.png'},
                {name:'Portuguese',name_img_flag:'portug-flag.png'},
                {name:'Romanian',name_img_flag:'Romanian.png'},
                {name:'Russian',name_img_flag:'Russian-flag.png'},
                {name:'Spanish',name_img_flag:'spain-flag.png'},
                {name:'Swedish',name_img_flag:'swedish-flag.png'},
                {name:'Turkish',name_img_flag:'Turkish.png'},
                {name:'Vietnamese',name_img_flag:'Vietnamese.png'},
            ],
        }
    },
    methods: {
        getAppUser() {
            //alert('getAppUser');
            var params = new URLSearchParams();
            var self = this;
            //params.append('username', this.curent_username);
            axios({
                url: this.url_app_user,
                method: 'post',
                params,
                withCredentials: true,
                headers: {'Referer': 'http://olta-tour-copy.local/application/rfq.rfq'}
            }).then(
                function (response) {
                    //alert('User=' + response.data.data.user);
                    self.current_user = response.data.data.user;
                    self.$root.current_user = self.current_user;
                   console.log('Check user name: ' + self.$root.current_user.name);
                    console.log('Check user set-cookie:' + response.headers["set-cookie"]);
                }
            ).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                }
            )
        },
        createNewQuatation() {
            //alert('create new quotation!');
            //this.QuotationNew.show();
            this.$refs.createQuotationModalRef.show();

        },
        getCountryFlag(name){
            for (let i=0;i<this.countries.length;i++) {
                if (this.countries[i].name ==name) {
                    return this.countries[i].name_img_flag;
                }
            }
            return null;
        },
        hideQuotationCreateModal() {
            this.$refs.createQuotationModalRef.hide();
            var last_item = Object.assign({}, this.items[this.items.length-1]);
            //last_item=this.items[this.items.length-1];
            last_item.id=0;
            last_item.name=this.q_new_name;
            this.items.push(last_item);
        },
        showDetailsQuotation(id,item_index) {
            //alert('Details for id='+id);
            this.$root.cur_quotation=this.items[item_index];
            this.$router.push({name:'QuotationDetails',params:{id:id}});
        },
        getQuotationList() {
                self=this;
                axios.post(this.url_quotation_list).then(
                    function (response) {
                        if (response.data.data.records.length >0) {
                            //this.items = response.data.data.records;

                            var records=response.data.data.records;
                            //alert('QuotationRecords:'+records.length);
                            self.makeQuotationList(records);
                        }
                    }
                ).catch(function (error) {
                    console.log('ERROR when getQuotationList!');
                });


        },
        makeQuotationList(records) {
            //alert('makeQuotationList='+records.length);
            if (records.length >0) {
                this.items =[];
                for (let i=0; i< records.length;i++) {
                    //alert('Push item: id='+records[i].id+'  nights='+records[i].nights);
                    this.items.push({
                        "id":records[i].id,
                        "clientName":records[i].clientName,
                        "name":records[i].name,
                        "destinations":records[i].destinations,
                        "nights":records[i].nights,
                        "pax":records[i].pax,
                        "lang":records[i].lang,
                        "created":records[i].created,
                        "operator":records[i].operator,
                        "user":records[i].user,
                        "server_item":records[i]
                    });
                }
                console.log(' QuotationList.length='+this.items.length);

                //alert(' this.items[0].id='+this.items[0].id);
            } else{
                console.log('makeQList:empty...');
            }
        }
    },
    computed: {

    }
}
</script>
<style>
    .page-fon {

        justify-content: top;

    }
</style>
<style scoped>
body {
    background: #f0f2f4;
}
.cell{
    font-weight: bold;
}
.cell-pail {
    color: #afb7bc;
    font-size: 12px;
}
#profile-img {
    height: 40px; width: 40px;
    margin: 14px;
    cursor: pointer;
    display: block;
    border-radius: 50%;
    background-image: url("/static/images/defaultavatar.png");
    background-size: cover;
    background-position: center center;
}

.QuotationList {
    /*background-color: #f0f2f4;*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*font-family: "Roboto",sans-serif;*/
    /*justify-content: top;*/
    /*left: 0;*/
    /*position: fixed;*/
    /*top: 0;*/
    /*margin-top:0px;*/
    /*height: 100%;*/
    /*width: 100%;*/
}
.img-avatar {
    background-position: center center;
    background-size: cover;
    border-radius: 50%;
    height: 36px;
    width: 36px;
}


.table-head-text {
    border: 1px solid #e3e7eb;
    border-radius: 13px;
    color: #97a4ad;
    cursor: default;
    display: inline-block;
    font-family: "Roboto",sans-serif;
    font-weight: 400;
    line-height: 22px;
    padding: 0 10px;
    position: relative;
    transition: border 0.2s ease-in 0s;
}
.quotation-info-row {
    /*background-color: white;*/
    /*border-bottom: 1px solid black;*/
    /*border-top: 1px solid black;*/
    /*border-collapse: collapse;*/
    /*box-sizing: border-box;*/
    /*color: #425d6f;*/
    /*font-size: 14px;*/
    /*font-weight: 500;*/
    /*margin: 10px 0px 0px 0px;*/
    /*padding: 0;*/
    /*position: relative;*/
    /*cursor:hand;*/
}
.quotation-info-row td {
    padding-bottom:5px;
}

*, *::before, *::after {
    box-sizing: inherit;
}
*, *::before, *::after {
    box-sizing: inherit;
}

.table td {
    /*background-color: white;*/
    /*border-bottom: 1px solid black;*/
    /*margin-top: 10px;*/
    /*padding: 10px 0.75rem 0.75rem;*/
    /*vertical-align: top;*/
    /*cursor: pointer;*/
    /*font-weight: bold;*/
}
.text-normal {
    font-weight: normal;
}
</style>