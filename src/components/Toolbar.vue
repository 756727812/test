<template>
    <mu-container>
        <div class="toolBtn" v-if="isCheck">
            <span class="icon" @click="deleteNote"><mu-icon value="trash-alt"></mu-icon></span>
            <span class="icon"><mu-icon value="dolly"></mu-icon></span>
        </div>
        <div class="addNote" v-else>
            <div class="float-button mu-float-button" @click="addNote"><mu-icon value="add_circle"></mu-icon></div>
        </div>
        <mu-dialog title="删除便签" width="360" :open.sync="openSimple">
            您确定删除所选便签吗？
            <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
        </mu-dialog>
    </mu-container>
</template>

<script>

export default {
  data () {
    return {
      notes:[],
      isCheck:false,
      openSimple: false
    }
  },
  components: {
    
  },
  methods: {
      openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    },
    deleteNote(){

    },
    addNote(){
        this.$router.push({path:'editor'});
    }
  }
}
</script>

<style scoped>
.toolBar{
    position: absolute;
    bottom: 0;
    width: 100%;
}
.addNote{
    padding: 1rem;
    text-align: right;
}
</style>
