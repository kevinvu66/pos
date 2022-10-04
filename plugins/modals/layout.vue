<template>
  <div modal="true">
    <div>
        <div :data-modal="name" v-if="visible" class="modal border-2 border-black bg-white">
            <div aria-modal="true" data-reach-dialog-content="true"
             tabindex="-1" class="modal_mask"
             >
             
            <div class="modal_body">
                <slot :payload="payload" ></slot>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
    import VModal from './handle'
export default {
props:{
    name:{
        type: String,
        require:true
    }
},
data(){
    return{
        payload:null,
        visible:false
    }
},beforeMount(){
VModal.EventBus.$on('open',params=>{
    if (this.name=== params.name){
        this.open(params)
    }
}),
VModal.EventBus.$on('close',params=>{
    if (this.name=== params.name){
        this.close(params)
    }
})
}
,methods:{
open(params) {
    this.visible=true
},
close(params) {
    this.visible=false
}
}

}
</script>

<style lang="scss" scoped>
    .modal{
        text-align: center;
        position: fixed;
        top: 25%;
        left: 25%;
        width: 50%;
        
        height: 50%;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>