<template>
    <div class="noteList">
        <div class='listWrap' v-for="note in filterNote" :key="note.id">
            <div class="noteTitle">{{note.date}}</div>
            <p>{{note.content}}<mu-checkbox label="" v-model="note.done" class="checkbox"/></p>
            
            <!-- <input name="checkbox" v-show="isCheck" v-model="note.done" type="checkbox" value="checkbox" checked="checked" /> -->
        </div>

        <mt-checklist
  align="right"
  title="右对齐"
  v-model="value"
  :options="options">
</mt-checklist>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      openSimple: false,
      // options : [
      //   {
      //     label: '被禁用'+this.filterNote[0].date,
      //     value: '值F',
      //     disabled: true
      //   },
      //   {
      //     label: '选中禁用',
      //     value: '1',
      //     disabled: true
      //   },
      //   {
      //     label: '选项A',
      //     value: '值A'
      //   },
      //   {
      //     label: '选项B',
      //     value: '值B'
      //   }
      // ],
      value:[]
    };
  },
  computed: {
    ...mapGetters(["filterNote", "isCheck"]),
    options(){
      let a = [];
      this.filterNote.forEach((element, i) => {
        let o = {label:element.date+" "+element.content, value: i}
        a.push(o);
      });
      return a;
    }
  },
  components: {},
  methods: {
    openSimpleDialog() {
      this.openSimple = true;
    },
    closeSimpleDialog() {
      this.openSimple = false;
    }
  }
};
</script>

<style scoped>
.noteList{
    padding: 1rem 0;
}
.listWrap{
  clear: both;
  margin: 12px;
}
.listWrap p{
  font-size: 1.2rem
}
.noteList .mu-checkbox{
  float: right;
}
.noteTitle{
  font-size: 1rem;
  color: #999999;
}
</style>
