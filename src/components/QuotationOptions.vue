<template >

  <section class="quotation-options">
      <div class="options" id="options">
          <div class="top-row">
              <h3 class="h3">Options</h3>
          </div>
          <div class="options-row" id="optionCurrency"  >
              <div class="options-col have-list" @click="itemClick('Currency')">
                  <h5 class="h5">Currency</h5>
                  <span class="data-info" data-optionid="503" data-optionkey="currency" value="RUB">{{items['Currency'].value.val}}</span>
                  <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span>
                  <div class="check-list" style="width: 167px;" v-bind:style="{ display: items['Currency'].display_block }">
                  <!--<div class="check-list" style="width: 167px;" v-show="showOptions('currency')">-->
                      <div class="check-dot" data-value="USD" title="USD" @click="optionClick('Currency','USD')"></div><span>$</span>
                      <div class="check-dot" data-value="EUR" title="EUR" @click="optionClick('Currency','EUR')" ></div><span>€</span>
                      <div class="check-dot" data-value="RUB" title="RUB" @click="optionClick('Currency','RUB')"></div><span>₽</span>
                  </div>
              </div>


              <div class="options-col have-list"  @click="itemClick('Lang')">
                  <h5 class="h5">Guide’s Language</h5>
                  <span class="data-info" data-optionid="500" data-optionkey="guide_language" >{{items['Lang'].value.val}}</span>
                  <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span>
                  <div class="check-list country-list" style="width: 500px; " v-bind:style="{ display: items['Lang'].display_block }" >

                     <div v-for="item in countries">
                         <div class="country" data-value="Bulgaria" v-bind:title="item.name" @click="selectLangClick(item.name)">
                             <img v-bind:src="'static/images/img/'+item.name_img_flag" v-bind:alt="item.name"><span>{{item.name}}</span>
                         </div>
                     </div>


                  </div>
              </div>
          </div>

          <div class="options-row">
              <div class="options-col have-string">
                  <h5 class="h5">Nights</h5>
                  <span class="data-info" data-optionid="501" data-optionkey="number_of_nights" v-bind:value="$root.cur_quotation.nights" contenteditable="true">{{$root.cur_quotation.nights}}</span>
                  <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span></div>
              <div class="options-col have-string">
                  <h5 class="h5">Free Tour Leader</h5>
                  <span class="data-info" data-optionid="505" data-optionkey="ftl_number" value="1" contenteditable="true">1</span>
                  <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span></div></div>
          <div class="options-row">
              <div class="options-col have-list" style="width: 335px;" @click="itemClick('Meal')">
                  <h5 class="h5">Meal Service</h5>
                  <span class="data-info" data-optionid="507" data-optionkey="preset_meal_services" value="BB">{{items['Meal'].value.val}}</span>
                  <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span>
                  <div class="check-list" style="width: 265px;" v-bind:style="{ display: items['Meal'].display_block}" >
                      <div class="check-dot" data-value="NO" title="No meal"  @click="optionClick('Meal','NO')" ></div><span>NO</span>
                      <div class="check-dot" data-value="BB" title="Bed Breakfast" @click="optionClick('Meal','BB')" ></div><span>BB</span>
                      <div class="check-dot" data-value="HB" title="Half Board" @click="optionClick('Meal','HB')" ></div><span>HB</span>
                      <div class="check-dot" data-value="FB" title="Full Board" @click="optionClick('Meal','FB')" ></div><span>FB</span>
                  </div>
              </div>
          </div>
          <div class="options-row">
              <div class="options-col have-string" style="width: 335px;">
                  <h5 class="h5">Water Service</h5>
                  <span class="data-info" data-optionid="508" data-optionkey="water_service" value="0" contenteditable="true">0</span>
                  <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span></div></div></div>
  </section>

</template>

<script>
  export default  {
    name: 'quotation-options',
    props: [],
    mounted() {
        this.initLang();
    },
    data() {
      return {
        items: {
                "Currency": {name: 'Currency', title: 'Currency', value:{title:'RUB',val:'₽'}, options: [],display_block:'none'},
                'Lang': {name: 'Lang', title: 'Guide’s Language',value:{title:'Russian',val:'Russian'},display_block:'none'},
                'Nights':{name: 'Nights', title: 'Nights',display_block:'none'},
                'Meal':  {name: 'Meal', title: 'Meal Service',value:{title:'Bed Breakfast',val:'BB'},display_block:'none'},
                'Water': {name: 'Water', title: 'Water Service',display_block:'none'}
        },
        money: {
                'RUB':{title:'RUB',val:'₽'},
                'USD':{title:'USD',val:'$'},
                'EUR':{title:'EUR',val:'€'},
        },
        meal: {
                'NO':{title:'No meal',val:'NO'},
                'BB':{title:'Bed Breakfast',val:'BB'},
                'HB':{title:'Half Board',val:'HB'},
                'FB':{title:'Full Board',val:'FB'},
        },
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
        clicked_item_name:null,
        block_style:'none'
      }
    },
    methods: {
        initLang() {
            if (this.$root.cur_quotation != null) {
                this.items['Lang'].value.title = this.$root.cur_quotation.lang;
                this.items['Lang'].value.val   = this.$root.cur_quotation.lang;
            }

        },
        getItemByName(name) {
            //this.items.map(function(item){if (item.name ==name) return item;})
            return null;
        },
        itemClick(name) {
            this.clicked_item_name = name;
            if (this.items[name].display_block == 'none') {
                this.items[name].display_block='block'
            }
            else {
                this.items[name].display_block='none'
            }
            console.log(this.clicked_item_name);
        },
        optionClick(name,value) {
            if (name =='Currency') {
                this.items[name].value = this.money[value];
            }
            if (name =='Meal') {
                this.items[name].value = this.meal[value];
            }

        },
        selectLangClick(name) {
            this.items['Lang'].value.title = name;
            this.items['Lang'].value.val   = name;
        }

    },
    computed: {

    }
}
</script>

<style scoped>
  .quotation-options {

  }
</style>
