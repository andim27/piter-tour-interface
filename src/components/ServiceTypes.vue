<template >

  <section class="service-types" v-show="(state=='open')" >

    <div style="position: relative; height: inherit; width: inherit; background: transparent none repeat scroll 0% 0%;"></div>

    <div class="icons-block" id="add-service">
        <div v-for="(item,index) in servicesTypeItems" class="icon" data-service-type-id="3" @click="clickItemService(item)">
            <img v-bind:src="'static/images/img/'+item.img"><span>{{item.name}}</span>
        </div>

    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'service-types',
    props: ['dayindex','serviceindex','serviceaction'],
    created() {
        self=this;
        this.$bus.$on('showService', function (s_index) {
            if (s_index ==self.dayindex) {
                //alert('bus-index:'+s_index+' dayindex:'+self.dayindex);
                if (self.state=='open') {
                    self.state='close';
                } else {
                    self.state='open';
                }
            }

            //alert('showService:dayindex='+self.dayindex);
        }),
        this.$bus.$on('showServiceInsert', function (s_index) {
            if (s_index ==this.serviceindex) {
                //alert('bus-index:'+s_index+' dayindex:'+self.dayindex);
                if (this.state=='open') {
                    this.state='close';
                } else {
                    //this.state='open';
                }
            }

        }.bind(this))
    },
    mounted() {
        this.state='open';
    },
    data() {
      return {
          state:'close',
          servicesTypeItems:[
              {"id":"1","key":"transport","name":"Transport (Deprecated)","img":"meal.png"},
              {"id":"2","key":"guide","name":"Guide","img":"guide.png"},
              {"id":"3","key":"excursion","name":"Excursion","img":"Excursion.png"},
              {"id":"4","key":"meal","name":"Meal","img":"meal.png"},
              {"id":"5","key":"train_tickets","name":"Train Tickets","img":"train.png"},
              {"id":"6","key":"flight_tickets","name":"Flight Tickets","img":"force-plane.png"},
              {"id":"7","key":"show","name":"Show","img":"perfomances.png"},
              {"id":"8","key":"transport_new","name":"Transport","img":"meal.png"},
              {"id":"9","key":"custom","name":"Special Services","img":"meal.png"},
              {"id":"10","key":"meeting","name":"Meeting","img":"guide.png"},
              {"id":"11","key":"arrival_depature","name":"Arrival/Depature","img":"meal.png"},
              {"id":"12","key":"checkin_checkout","name":"Check-In/Check-Out","img":"check-in-out.png"},
              {"id":"13","key":"transfer","name":"Transfer","img":"meal.png"},
              {"id":"14","key":"overnight","name":"Overnight","img":"night-hotel.png"},
              {"id":"15","key":"itransfer","name":"Intercity Transfer","img":"bus.png"},
              {"id":"16","key":"iguide","name":"Intercity Guide","img":"guide.png"}
          ],
      }
    },
    methods: {
        show(){
            //alert('ServiceTypes show!');
            this.state='open'
        },
        close(){
            this.state='close'
        },
        clickItemService(service_item){
            //this.$emit('select-service',{'service_id':service_id});
            this.$bus.$emit('select-service',{'action':this.$props.serviceaction,'dayindex':this.$props.dayindex,'service_item':service_item});
            this.state='close';
        }

    },
    computed: {

    },
    events: {
      clickOut: function (event) {
          //alert('out');
      },
      showService(day_index){
        this.state='open';
        //alert('Events showService');
      }
    }
}
</script>

<style >
  .service-types {
    margin-left: 48%;
    position: relative;
  }
</style>
