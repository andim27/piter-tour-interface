<template >

  <section class="quotation-detals">
      <div class="container-olta" >
      <quotation-old-nav-bar ></quotation-old-nav-bar>

      <div id="content">

          <div class="buttons-row ">
              <button id="back-to-list" @click="back">Back to List</button>
              <button class="add-quotation-btn" @click="createNewQuatation">New Quotation</button>
          </div>


          <span class="grey-title"><span>#{{ this.$route.params.id }}</span></span>
          <div class="container-olta title-row" id="selectedRecord">
              <div class="left-col">
                  <div id="clientName" class="client-name" value="Friday Client" placeholder="Client Name" contenteditable="true">{{$root.cur_quotation.clientName}}</div>
                  <p id="quotationName" class="tour-name" value="Friday" placeholder="Tour Name" contenteditable="true">{{$root.cur_quotation.server_item.name}}</p></div>
              <div class="right-col"><span class="grey-title">15-09-2017 11:17</span><br>
                  <span class="grey-title">created by Andrey</span><br>
                  <div style="height: 40px; width: 40px; margin-top: 5px; display: inline-block; border-radius: 50%; background-image: url('static/images/defaultavatar.png'); background-position: center center; background-size: cover;"></div>
              </div>
          </div>
          <section class="about-tour">
              <div class="container-olta" style="padding: 0px;">
                  <quotation-options></quotation-options>

                  <div class="fl-wrapper">
                      <div class="dates" id="datesBlock">
                          <div class="top-row"><h3 class="h3" style="margin: 0px;">Dates</h3>
                              <a class="h3-grey" title="Switch to Periods mode" style="cursor: pointer; margin-left: 5px;">Periods</a>
                              <div class="add-btn" title="Add Date" id="date">+</div></div>
                          <div class="info-row" data-id="53">
                              <div class="delete-btn" title="Delete Date">×</div>
                              <div class="info-col">
                                  <h5 class="h5">From</h5>
                                  <span class="data-info">02-10-2017</span></div>
                              <div class="info-col">
                                  <h5 class="h5">To</h5><span class="data-info">07-10-2017</span></div>
                          </div>
                          <div class="info-row" data-id="54">
                          <div class="delete-btn" title="Delete Date">×</div>
                              <div class="info-col"><h5 class="h5">From</h5>
                                  <span class="data-info">13-11-2017</span></div>
                              <div class="info-col"><h5 class="h5">To</h5>
                                  <span class="data-info">18-11-2017</span></div></div>
                          <div class="info-row" data-id="55">
                              <div class="delete-btn" title="Delete Date">×</div>
                              <div class="info-col"><h5 class="h5">From</h5>
                                  <span class="data-info">11-12-2017</span></div>
                              <div class="info-col"><h5 class="h5">To</h5>
                                  <span class="data-info">16-12-2017</span></div></div></div>
                      <div class="periods" id="periodsBlock" style="display: none;"></div>
                      <div class="groups" id="groupsBlock"><div class="top-row">
                          <h3 class="h3" style="margin: 0px;">Groups</h3><a class="h3-grey" title="Switch to Individuals" data-value="Individual" style="cursor: pointer; margin-left: 5px;">Individuals</a><div class="add-btn" title="Add Group">+</div></div><div class="info-col" style="height: 49px;"><h5 class="h5">Number of PAX</h5><span class="data-info groups-list"><span class="group" title="Delete Group" data-group-id="132">20</span><span class="group" title="Delete Group" data-group-id="133">25</span><span class="group" title="Delete Group" data-group-id="134">40</span></span></div></div><div class="accommodations" id="accommodationsBlock"><div class="top-row"><h3 class="h3">Accommodations</h3><div class="add-btn" title="Add Accommodation">+</div></div><div class="info-row" accommodation-id="108"><div class="info-col" data-key="cityName"><h5 class="h5">City</h5><span class="data-info">Moscow</span></div><div class="info-col" data-key="nights"><h5 class="h5">Nights</h5><span class="data-info" value="2" placeholder="2" style="display: block; min-width: 37px;" contenteditable="true">2</span></div>
                      <div class="info-col" data-key="hotelTypeId" style="cursor: pointer;"><h5 class="h5" style="cursor: pointer;">Hotel Type</h5><span class="data-info" style="cursor: pointer;" value="1">Hotel 3* central</span><div class="check-list" style="width: 191px;"><div class="check-wrap" data-value="1"><div class="check-dot"></div><span>Hotel 3* central</span></div><div class="check-wrap" data-value="2"><div class="check-dot"></div><span>Hotel 3* non-central</span></div><div class="check-wrap" data-value="3"><div class="check-dot"></div><span>Hotel 4* central</span></div><div class="check-wrap" data-value="4"><div class="check-dot"></div><span>Hotel 4* non-central</span></div><div class="check-wrap" data-value="5"><div class="check-dot"></div><span>Hotel 5* central</span></div><div class="check-wrap" data-value="6"><div class="check-dot"></div><span>Hotel 5* non-central</span></div><div class="check-wrap" data-value="7"><div class="check-dot"></div><span>Test SPB</span></div><div class="check-wrap" data-value="8"><div class="check-dot"></div><span>Test MSK</span></div></div></div><div class="delete-btn" title="Delete Accommodation">×</div><div class="insert-btn" title="Insert Accommodation">+</div><div class="move-up-btn" title="Move Up Accommodation">↑</div></div><div class="info-row" accommodation-id="109"><div class="info-col" data-key="cityName"><h5 class="h5">City</h5><span class="data-info">St.Petersburg</span></div><div class="info-col" data-key="nights"><h5 class="h5">Nights</h5><span class="data-info" value="3" placeholder="3" style="display: block; min-width: 37px;" contenteditable="true">3</span></div><div class="info-col" data-key="hotelTypeId" style="cursor: pointer;"><h5 class="h5" style="cursor: pointer;">Hotel Type</h5><span class="data-info" style="cursor: pointer;" value="1">Hotel 3* central</span><div class="check-list" style="width: 191px;"><div class="check-wrap" data-value="1"><div class="check-dot"></div><span>Hotel 3* central</span></div><div class="check-wrap" data-value="2"><div class="check-dot"></div><span>Hotel 3* non-central</span></div><div class="check-wrap" data-value="3"><div class="check-dot"></div><span>Hotel 4* central</span></div><div class="check-wrap" data-value="4"><div class="check-dot"></div><span>Hotel 4* non-central</span></div><div class="check-wrap" data-value="5"><div class="check-dot"></div><span>Hotel 5* central</span></div><div class="check-wrap" data-value="6"><div class="check-dot"></div><span>Hotel 5* non-central</span></div><div class="check-wrap" data-value="7"><div class="check-dot"></div><span>Test SPB</span></div><div class="check-wrap" data-value="8"><div class="check-dot"></div><span>Test MSK</span></div></div></div>
                      <div class="delete-btn" title="Delete Accommodation">×</div><div class="insert-btn" title="Insert Accommodation">+</div><div class="move-up-btn" title="Move Up Accommodation">↑</div>

                  </div>

                  </div>
              </div>

              </div>
          </section>

          <!--b:Itinerity-->
          <quotation-itinerity></quotation-itinerity>
          <!--e:Itinerity-->
          <!--b:Result block-->
          <div class="results" id="resultsBlock" style="margin: 10px 0px;">
              <button id="execute" class="execute-btn">Calculate the Cost</button>

              <div id="totals13"></div><div id="result"><h1>Results:</h1><div class="green-table table"><h3>Totals (WE)</h3><div class="table-wrapper"><table id="table-result-totals"><tbody><tr><th>Dates</th><th>15</th><th>20</th><th>25</th><th>SS</th></tr><tr><td>16 - 21 August 2017</td><td>$148</td><td>$148</td><td>$148</td><td>$104</td></tr></tbody></table></div></div><div class="green-table table"><h3>Totals (WD)</h3><div class="table-wrapper"><table id="table-result-totals-wd"><tbody><tr><th>Dates</th><th>15</th><th>20</th><th>25</th><th>SS</th></tr><tr><td>16 - 21 August 2017</td><td>$148</td><td>$148</td><td>$148</td><td>$104</td></tr></tbody></table></div></div>
          </div>
          </div>
          <!--e:Result block-->
      </div>
      <!-- b:Modal Component:createNewQuotation -->
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
      </div>
      <!-- b:Modal Component:createNewQuotation -->
      <quotation-new ref="createQuotationModalRef"></quotation-new>
  </section>

</template>

<script>
import axios from 'axios'
import QuotationOldNavBar from '@/components/QuotationOldNavBar'
import QuotationNew from "./QuotationNew.vue";
import QuotationOptions from '@/components/QuotationOptions'
import QuotationItinerity from '@/components/QuotationItinerity'
export default  {
    name: 'quotation-detals',
    props: [],
    components: {
        QuotationOldNavBar,
        QuotationNew,
        QuotationOptions,
        QuotationItinerity
    },
    created() {
        axios.defaults.baseURL ="http://olta-tour-copy.local";
        axios.defaults.withCredentials = true;
        axios.defaults.headers.common['Content-type'] = "application/x-www-form-urlencoded";
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    },
    data() {
        return {

        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        createNewQuatation() {

            this.$refs.createQuotationModalRef.show();

        },
        hideQuotationCreateModal() {
            this.$refs.createQuotationModalRef.hide();
        },
    },
    computed: {

    }
}
</script>

<style scoped >

.quotation-detals {
    /*background-color: #f0f2f4;*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*font-family: "Roboto",sans-serif;*/
    /*justify-content: top;*/
    /*left: 0;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*margin-top:0px;*/
    /*height: 300%;*/
    /*width: 100%;*/
}

</style>
