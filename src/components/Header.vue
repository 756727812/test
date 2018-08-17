<template>
    <div class="head" :class="{visible:isVisible}">
        <div :class="{visible:isVisible}">
            <div v-if='isCheck'>
                <span class="icon" @click="openFolder"><mu-icon value="folder-open"></mu-icon></span>
                <h2>便签</h2>
                <span>
                    <span class="icon" v-if="layout=='grid'" @click="changeLayout"><mu-icon value="list"></mu-icon></span>
                    <span class="icon" v-else @click="changeLayout"><mu-icon value="th-large"></mu-icon></span>
                </span>
            </div>
            <div v-else class='flex'>
                <button >取消</button>
                <span>已选择{{count}}</span>
                <button @click="checkAll()">{{checkBtnTxt}}</button>
            </div>
        </div>
        <div class="search">
            <div class="icon"><mu-icon value="search"></mu-icon></div>
            <input type="text" v-model="searchTxt" @keyup="search" @focus="searchFocus" @blur="searchBlur"/>
        </div>
        <!-- <noteList></noteList> -->
    </div>
</template>

<script>
import noteList from './NoteList.vue';
import { mapGetters } from "vuex";
export default {
  name: 'headComponent',
  data () {
    return {
    //   count: 0,
        checkBtnTxt: '全选',
      searchTxt:'',
      isVisible: false
    }
  },
  computed: {
      ...mapGetters(['isCheck']),
      count(){
          return this.$store.state.deleteNodes.length;
      }
  },
  methods:{
      changeLayout(){

      },
      searchBlur(){
          this.isVisible=false;
      },
      searchFocus(){
          this.isVisible=true;
      },
      search(){
          this.$store.state.search = this.searchTxt;
      },
      checkAll(){
          
          this.$store.dispatch('checkAll');
      }
  }
}

</script>
<style scoped>
.head{
    width: 100%;
}
.head.visible{
    padding-top: 0.5rem;
}
.head .visible{
    display: none;
}
    .flex{
        width: 100%;
        display: flex;
        align-items: flex-end;
    }
    .flex *{
        flex: 1;
    }
    .flex button{
        flex-grow: 1;
    }
    .flex span{
        flex-grow: 2;
    }

    .search{
    position: relative;
    margin: 0 0.5rem;
    border: 1px solid #eee;
    background: #fff;
}
.search .icon{
    position: absolute;
    top: 0.2rem;
    left:0.2rem;
    color: #ccc;
    vertical-align: middle;
    cursor: pointer;
}
.search input{
    height: 1.8rem;
    border: 0;
    width: 100%;
    padding-left: 1.5rem;
    outline: none
}
</style>

