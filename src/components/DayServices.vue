<template >

  <section class="day-services">
         <div v-for="(item_services,index_services) in dayServices" class="act" style="">
                  <!--<div  class="act" data-service-id="1468" style="">-->
                      <img v-bind:src="'static/images/img/'+item_services.service_img">
                      <!--<img v-bind:src="'static/images/img/meal.png'">-->
                      <div class="hover-block"></div>
                      <div class="click-service-area"></div>
                      <div class="click-class-area"></div>
                      {{item_services.service_title}}
                      <!--Kremlin-->
                      <div class="delete-btn" title="Remove Service" @click="clickDelete(index_services)">×</div>
                      <div class="insert-btn" title="Insert Service" @click="clickInsert(index_services)">+</div>
                      <div class="hover-mark" style="opacity: 0; top: 0px;">
                          Excursion
                      </div>
                      <service-types v-if="(index_services == insert_service_index)"  v-bind:ref="('serviceType'+index_services)" v-bind:dayindex="$props.dayindex" v-bind:serviceindex="index_services"  serviceaction="insert"></service-types>
                     <!--<div class="hover-area" >-->
                         <!--<div @click="addService(index)"  class="add-btn" title="Add Service" style="float: none; display: block; margin: auto;"><span>+</span>-->
        <!---->
                         <!--</div>-->
                         <!--<service-types v-if="(index == add_day_index)"  v-bind:ref="('serviceType'+index)" v-bind:dayindex="index" serviceaction="add"></service-types>-->
                     <!--</div>-->
                      <!--<div class="check-wrapper service-names-list" style="display: none;">-->
                          <!--<div class="check-list scroll-pane jspScrollable" style="overflow: hidden; padding: 0px; width: 325px;" tabindex="0">-->
                              <!--<div class="jspContainer" style="width: 325px; height: 500px;">-->
                                  <!--<div class="jspPane" style="padding: 0px; width: 316px; top: 0px;">-->
                                      <!--<div class="check-wrap" data-value="Alexandrov Garden">-->
                                          <!--<div class="check-dot"></div>-->
                                          <!--<span>Alexandrov Garden</span></div>-->
                                      <!--<div class="check-wrap" data-value="Arbat Street">-->
                                          <!--<div class="check-dot"></div><span>Arbat Street</span></div><div class="check-wrap" data-value="Bunker-42"><div class="check-dot"></div><span>Bunker-42</span></div><div class="check-wrap" data-value="Cathedral of Christ the Saviour"><div class="check-dot"></div><span>Cathedral of Christ the Saviour</span></div><div class="check-wrap" data-value="Churches of Moscow Tour"><div class="check-dot"></div><span>Churches of Moscow Tour</span></div><div class="check-wrap" data-value="City tour"><div class="check-dot"></div><span>City tour</span></div><div class="check-wrap" data-value="City tour by night"><div class="check-dot"></div><span>City tour by night</span></div><div class="check-wrap" data-value="Cosmonaut Museum"><div class="check-dot"></div><span>Cosmonaut Museum</span></div><div class="check-wrap" data-value="Free time"><div class="check-dot"></div><span>Free time</span></div><div class="check-wrap" data-value="Izmailovo market"><div class="check-dot"></div><span>Izmailovo market</span></div><div class="check-wrap" data-value="Kolomenskoe"><div class="check-dot"></div><span>Kolomenskoe</span></div><div class="check-wrap" data-value="Kremlin"><div class="check-dot"></div><span>Kremlin</span></div><div class="check-wrap" data-value="Kremlin (Armory Chamber)"><div class="check-dot"></div><span>Kremlin (Armory Chamber)</span></div><div class="check-wrap" data-value="Kremlin (Diamond Fund)"><div class="check-dot"></div><span>Kremlin (Diamond Fund)</span></div><div class="check-wrap" data-value="Lenin Mausoleum"><div class="check-dot"></div><span>Lenin Mausoleum</span></div><div class="check-wrap" data-value="Matryoshka painting"><div class="check-dot"></div><span>Matryoshka painting</span></div><div class="check-wrap" data-value="Metro tour"><div class="check-dot"></div><span>Metro tour</span></div><div class="check-wrap" data-value="Monino"><div class="check-dot"></div><span>Monino</span></div><div class="check-wrap" data-value="Museum of the Great Patriotic War"><div class="check-dot"></div><span>Museum of the Great Patriotic War</span></div><div class="check-wrap" data-value="Nikolaevsky folk show with Dinner"><div class="check-dot"></div><span>Nikolaevsky folk show with Dinner</span></div><div class="check-wrap" data-value="Novodevichy Convent"><div class="check-dot"></div><span>Novodevichy Convent</span></div><div class="check-wrap" data-value="Pushkin Museum of Fine Arts"><div class="check-dot"></div><span>Pushkin Museum of Fine Arts</span></div><div class="check-wrap" data-value="Red Square"><div class="check-dot"></div><span>Red Square</span></div><div class="check-wrap" data-value="River Cruise"><div class="check-dot"></div><span>River Cruise</span></div><div class="check-wrap" data-value="River Cruise on the Radisson ice-breaker "><div class="check-dot"></div><span>River Cruise on the Radisson ice-breaker </span></div><div class="check-wrap" data-value="Saint-Basil’s Cathedral"><div class="check-dot"></div><span>Saint-Basil’s Cathedral</span></div><div class="check-wrap" data-value="Sergiev Posad"><div class="check-dot"></div><span>Sergiev Posad</span></div><div class="check-wrap" data-value="Shopping"><div class="check-dot"></div><span>Shopping</span></div><div class="check-wrap" data-value="Star City"><div class="check-dot"></div><span>Star City</span></div><div class="check-wrap" data-value="Taganka tour"><div class="check-dot"></div><span>Taganka tour</span></div><div class="check-wrap" data-value="Test"><div class="check-dot"></div><span>Test</span></div><div class="check-wrap" data-value="Tretyakov Gallery"><div class="check-dot"></div><span>Tretyakov Gallery</span></div><div class="check-wrap" data-value="Tsaritsyno"><div class="check-dot"></div><span>Tsaritsyno</span></div><div class="check-wrap" data-value="VDNK"><div class="check-dot"></div><span>VDNK</span></div><div class="check-wrap" data-value="Victory Park"><div class="check-dot"></div><span>Victory Park</span></div><div class="check-wrap" data-value="Visit to Vodka Museum"><div class="check-dot"></div><span>Visit to Vodka Museum</span></div><div class="check-wrap" data-value="Walking tour through the city center"><div class="check-dot"></div><span>Walking tour through the city center</span></div></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style="height: 500px;"><div class="jspDrag" style="height: 226px;"><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div></div>-->
         </div>
  </section>

</template>

<script lang="js">
  import ServiceTypes from '@/components/ServiceTypes'
  export default  {
    name: 'day-services',
    props: ['items','dayindex'],
      components:{
          ServiceTypes,
      },
    created() {

    },
    mounted() {
        self=this;
        this.$bus.$on('select-service', function (params) {

            if (this.$props.dayindex == params.dayindex){
                if (params.action=='add') {
                    this.addService(params.service_item);
                } else {
                    this.insertService(params.service_item);
                }

                console.log('BUS inserted, params.dayindex: '+params.dayindex);
            }
        }.bind(this));
    },
    beforeMount() {
      if (this.$props.items.length>0) {
          this.dayServices=[];
          this.dayServices=this.$props.items;
      //alert('BEFORE mount!!!'+this.$props.items.length);

      window.console.log('day-services:'+this.dayServices.length) // Logs the counter value every second, before the DOM updates.
      }
    },
    beforeUpdate() {
        //if (this.$props.items.length>0) {
//            this.dayServices=[];
//            this.dayServices=this.$props.items;
//            alert('BEFORE update!!!'+this.$props.items.length);
        //}
        window.console.log('day-services:'+this.dayServices.length) // Logs the counter value every second, before the DOM updates.
    },
    data() {
      return {
          insert_service_index:-1,
          dayServices:[
              {service_id:4,service_title:'Day-Select service',service_img:'bus.png',servicesTypeItems_index:4},
              {service_id:8,service_title:'Day-Select service',service_img:'meal.png',servicesTypeItems_index:8}
          ]
      }
    },
    methods: {
        clickInsert(service_index){
            console.log('Insert index:'+service_index);
            if (service_index==this.insert_service_index) {
                this.insert_service_index=-1;
            } else {
                this.insert_service_index=service_index;
                this.$nextTick();

            }
            //this.$nextTick();
            this.$bus.$emit('showServiceInsert',service_index);

        },
        clickDelete(index){
            this.dayServices.splice(index, 1);
        },
        insertService(service_item) {
            var item = {service_id:service_item.service_id,service_title:'Select service',service_img:service_item.img,servicesTypeItems_index:8};
            this.dayServices.splice( this.insert_service_index, 0, item );
        },
        addService(service_item){
            var item = {service_id:service_item.service_id,service_title:'Select service',service_img:service_item.img,servicesTypeItems_index:8};
            this.dayServices.push(item );
        }
    },
    computed: {

    }
}
</script>

<style scoped>
  .day-services {

  }
</style>
