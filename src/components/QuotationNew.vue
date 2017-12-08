<template >

  <section class="quotation-new">
      <!--<div  v-show="state=='open'"  @click="state='close'" class="zatemnenie"></div>-->
      <div  v-show="state=='open'"  class="modal fade in" tabindex="-1" role="dialog" id="modal-insert-quotation" style="display: block; padding-right: 17px;">
          <div class="modal-dialog create-modal-block">
              <div class="header-row">
                  <button  @click="close" class="close" type="button" data-dismiss="modal">×</button>
                  <h3 class="h3" style="text-align: center;">Add Quotation</h3>
              </div>
              <div class="content-row">
                  <form autocomplete="off">
                      <div class="input-row"><label for="name">Name<input name="name" id="name" placeholder="Name" autocomplete="off" type="text"></label><span id="nameHelp" class="help-block"></span></div><input name="companyId" value="companyId" type="hidden">
                  </form>
              </div>
              <div class="footer-row">
              <button  @click="create"  class="btn-create" type="button">Create</button>
              </div>
          </div>
      </div>
    <!--<div>-->
        <!--<b-btn v-b-modal.modal1>Launch demo modal</b-btn>-->
        <!--&lt;!&ndash; Main UI &ndash;&gt;-->
        <!--<div class="mt-3 mb-3">-->
            <!--Submitted Names:-->
            <!--<ul>-->
                <!--<li v-for="n in names">{{n}}</li>-->
            <!--</ul>-->
        <!--</div>-->
        <!--&lt;!&ndash; Modal Component &ndash;&gt;-->
        <!--<b-modal id="modal1"-->
                 <!--ref="modal1"-->
                 <!--title="Submit your name"-->
                 <!--@ok="handleOk"-->
                 <!--@shown="clearName">-->
            <!--<form @submit.stop.prevent="handleSubmit">-->
                <!--<b-form-input type="text"-->
                              <!--placeholder="Enter your name"-->
                              <!--v-model="name"></b-form-input>-->
            <!--</form>-->
        <!--</b-modal>-->
    <!--</div>-->
  </section>

</template>

<script>
    //import { bmodal} from 'bootstrap-vue/lib/components'
  export default  {
    name: 'quotation-new',
    props: [],
    mounted() {

    },
    data() {
      return {
          name: '',
          names: [],
          state:'close'
      }
    },
    methods: {
        show() {
            this.state='open';
            //document.body.classList.add('zatemnenie');
            //document.body.innerHTML +="<div id='zatemnenie' style=\"content: '';position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: black;opacity: 0.5;z-index: 1;\"></div>"
        },
        close() {
            this.state='close';
            //document.body.classList.remove('zatemnenie');
//            var elm = document.body.getElementById('zatemnenie');
//            elm.parentNode.removeChild(elm);
        },
        create(){
            this.state='close';
        },
        clearName() {
            this.name = '';
        },
        handleOk(e) {
            e.cancel();
            if (!this.name) {
                alert('Please enter your name');
            } else {
                this.handleSubmit()
            }
        },
        handleSubmit() {
            this.names.push(this.name);
            this.clearName();
            this.$refs.modal1.hide()
        }
    },
    computed: {

    }
}
</script>

<style scoped>
.quotation-new {

}
.zatemnenie {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.5;
    z-index: 1;
}
</style>
