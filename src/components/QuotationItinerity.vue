<template xmlns="http://www.w3.org/1999/html">

  <section class="quotation-itinerity">
      <div class="itinerary" id="programsBlock" style="margin: 10px; ">
          <h3 class="block-header card-title">Itinerary</h3>
          <div v-bind:id="'quotationdays'+this.$route.params.id">
              <div v-for="(item_day, index) in dayCities" data-id="420"  v-bind:class="{ 'day-info': (index != dayCities.length - 1), 'day-info-last': (index === dayCities.length - 1) }">
                  <div >

                      <div class="dayCities" style="margin: 10px 0px;">
                          <h3 class="block-header">
                              <span class="grey-title">16-08-2017 WEDNESDAY</span>
                              Day {{index+1}} of {{nights+1}} Moscow
                              <img src="static/cities/moscow-img.png" class="city-image">
                          </h3>
                          <div style="margin: 10px 0px; display: none;" >
                              <form id="searchquotationdaycities420" class="form-inline" style="display: inline-block;">
                                  <div class="form-group">
                                      <input class="form-control" name="query" style="margin: 0px 5px; display: none;" placeholder="Search..." type="text">
                                  </div>
                                  <input class="form-control" name="quotationDayId" value="420" type="hidden">
                                  <button class="btn btn-primary" style="margin: 0px 5px;">GO</button>
                              </form>
                           </div>
                          <div id="quotationdaycities420">
                              <div data-id="408">
                                  <div>
                                      <div class="dayCityServices ui-sortable" data-day-city-id="408">
                                          <div style="margin: 10px 0px; display: none;">
                                              <form id="searchquotationdaycityservices408" class="form-inline" style="display: inline-block;">
                                              <div class="form-group">
                                                  <input class="form-control" name="query" style="margin: 0px 5px; display: none;" placeholder="Search..." type="text"></div>
                                              <button class="btn btn-primary" style="margin: 0px 5px;">GO</button>
                                              </form>
                                          </div>

                                         <day-services v-bind:items="item_day" v-bind:dayindex="index"></day-services>

                                          <!--<div v-for="(item_days,index_days) in item_day.items.length" class="act" data-service-id="1468" style="">-->
                                          <!--<div  class="act" data-service-id="1468" style="">-->
                                              <!--&lt;!&ndash;<img v-bind:src="'static/images/img/'+dayCities[index].items[index_days].service_img">&ndash;&gt;-->
                                              <!--<img v-bind:src="'static/images/img/meal.png'">-->
                                              <!--<div class="hover-block"></div>-->
                                              <!--<div class="click-service-area"></div>-->
                                              <!--<div class="click-class-area"></div>-->
                                              <!--&lt;!&ndash;{{dayCities[index].items[index_days].service_title}}&ndash;&gt;-->
                                              <!--Kremlin-->
                                              <!--<div class="delete-btn" title="Remove Service">×</div>-->
                                              <!--<div class="insert-btn" title="Insert Service">+</div>-->
                                              <!--<div class="hover-mark" style="opacity: 0; top: 0px;">-->
                                                  <!--Excursion-->
                                              <!--</div>-->
                                              <!---->
                                              <!---->
                                          <!--</div>-->
                                          <div class="hover-area" >
                                              <div @click="addService(index)"  class="add-btn" title="Add Service" style="float: none; display: block; margin: auto;"><span>+</span>

                                              </div>
                                              <service-types v-if="(index == add_day_index)"  v-bind:ref="('serviceType'+index)" v-bind:dayindex="index" serviceaction="add"></service-types>
                                          </div>
                                      </div>
                                  </div>
                                  <div>

                              </div>
                              </div>
                          </div>
                  </div>
              </div>
          </div>
          <div>

      </div>
          </div>
          </div>

  </section>

</template>

<script >
import axios from 'axios'
import ServiceTypes from '@/components/ServiceTypes'
import DayServices from '@/components/DayServices'
export default  {
    name: 'quotation-itinerity',
    props: [],
    components:{
        ServiceTypes,
        DayServices
    },
    created() {
        self=this;
//        this.$bus.$on('select-service', function (params) {
//
//            if (self.add_day_index >=0){
//                self.dayCities[self.add_day_index].push(
//                    {service_id:4,service_title:'Select service',service_img:'bus.png',servicesTypeItems_index:4},
//                );
//            }
//            self.$nextTick();
//        }.bind(self));
    },
    mounted() {
        //axios.defaults.baseURL = Vue.config.baseURL;
        //this.initItinerityDates();
        this.initItinerityNights();
        this.initItinerityDayCities();
    },
    data() {
      return {
          nights:0,
          dateFrom:'',
          dateTo:'',
          url_get_dates:'async/rfq.getdates',
          servicesTypeItems:[
              {"id":"1","key":"transport","name":"Transport (Deprecated)","img":"meal.png"},
              {"id":"2","key":"guide","name":"Guide","img":"meal.png"},
              {"id":"3","key":"excursion","name":"Excursion","img":"Excursion.png"},
              {"id":"4","key":"meal","name":"Meal","img":"meal.png"},
              {"id":"5","key":"train_tickets","name":"Train Tickets","img":"train.png"},
              {"id":"6","key":"flight_tickets","name":"Flight Tickets","img":"force-plane.png"},
              {"id":"7","key":"show","name":"Show","img":"perfomances.png"},
              {"id":"8","key":"transport_new","name":"Transport","img":"bus.png"},
              {"id":"9","key":"custom","name":"Special Services","img":"meal.png"},
              {"id":"10","key":"meeting","name":"Meeting","img":"guide.png"},
              {"id":"11","key":"arrival_depature","name":"Arrival/Depature","img":"meal.png"},
              {"id":"12","key":"checkin_checkout","name":"Check-In/Check-Out","img":"check-in-out.png"},
              {"id":"13","key":"transfer","name":"Transfer","img":"meal.png"},
              {"id":"14","key":"overnight","name":"Overnight","img":"night-hotel.png"},
              {"id":"15","key":"itransfer","name":"Intercity Transfer","img":"bus.png"},
              {"id":"16","key":"iguide","name":"Intercity Guide","img":"guide.png"}
          ],
          dayCities:[
              [
                  {service_id:10,service_title:'Select service',service_img:'guide.png',servicesTypeItems_index:10},
                  {service_id:8,service_title:'Select service',service_img:'bus.png',servicesTypeItems_index:8},
                  {service_id:4,service_title:'Select service',service_img:'bus.png',servicesTypeItems_index:4},
                  {service_id:8,service_title:'Select service',service_img:'meal.png',servicesTypeItems_index:8}
              ],
              [
                  {service_id:4,service_title:'Select service',service_img:'bus.png',servicesTypeItems_index:4},
                  {service_id:5,service_title:'Select service',service_img:'train.png',servicesTypeItems_index:5},
                  {service_id:8,service_title:'Select service',service_img:'meal.png',servicesTypeItems_index:8}
              ],
              [
                  {service_id:3,service_title:'Select service',service_img:'Excursion.png',servicesTypeItems_index:3}
              ],
              [
                  {service_id:3,service_title:'Select service',service_img:'Excursion.png',servicesTypeItems_index:3},
                  {service_id:3,service_title:'Select service',service_img:'Excursion.png',servicesTypeItems_index:3}
              ]
          ],
          add_day_index:-1,
          insert_service_index:-1
      }
    },
    methods: {
        initItinerityDates() {
            self=this;
            axios({method:'post',url:this.url_get_dates,data:{query:'',quotationId:this.$root.cur_quotation.id}}).then(
                    function (response) {
                        if (response.data.success ==true) {
                            self.dateFrom=response.data.data.records.dateFrom;
                            self.dateTo=response.data.data.records.dateTo;
                        } else {
                            console.log('InitDates ERROR');
                        }

                    }).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                }
            );
        },
        initItinerityNights() {
            this.nights = parseInt(this.$root.cur_quotation.nights);
            //alert('nights='+this.nights);
        },
        initItinerityDayCities() {
            this.dayCities=[];
            for (let i=0;i<this.nights;i++) {
                this.dayCities.push({});
            }
        },
        addService(day_index) {
            if (day_index==this.add_day_index) {
                this.add_day_index=-1;
            } else {
                this.add_day_index=day_index;
            }
            //this.$nextTick();
            this.$bus.$emit('showService',day_index);
            this.$nextTick();

        },
        insertService(day_index,service_index) {
            this.$refs['serviceType-'+day_index+'-'+service_index].show();
        }
    },
    computed() {
        return {
            dayInfoStyle(index) {
                return (index === this.dayCities.length - 1) ? 'day-info-last' : 'day-info';
            }
        }
    }
}
</script>

<style scoped>
.quotation-itinerity {

 }
.day-info-last {
    margin-top: -10px;
    padding-bottom: 36px;
    position: relative;
    white-space: nowrap;
    width: 500px;
}
</style>
