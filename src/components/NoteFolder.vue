<template>
  <div class="noteFolder">
      <div class="header">
          <span @click="backList"><mu-icon value="keyboard_arrow_left"></mu-icon></span>
          <span v-text="title"></span>
      </div>
      <div class="floder-list">
          <ul>
              <li @click="openNote">
                  <div class="pull-left">
                      <span><mu-icon value="ellipsis-h"></mu-icon></span>
                      <span v-text="noteTaking"></span>
                  </div>
                  <div class="pull-right">
                      <span>{{nodes}}</span>
                      <span><mu-icon value="keyboard_arrow_right"></mu-icon></span>
                  </div>
              </li>
          </ul>
          <ul>
              <li @click="openTrash">
                  <div class="pull-left">
                      <span><mu-icon value="trash"></mu-icon></span>
                  </div>
                  <div class="pull-right">
                      <span>{{trashs}}</span>
                      <span><mu-icon value="keyboard_arrow_right"></mu-icon></span>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        title: "便签夹",
        noteTaking: '随手记',
        trash: '废纸篓'
    }
  },
  components: {
    
  },
  methods: {
      backList(){
          this.$router.push({path: "/"});
      },
      openNote(){

      },
      openTrash(){
          
      }
  }
}
</script>

<style scoped>

</style>
