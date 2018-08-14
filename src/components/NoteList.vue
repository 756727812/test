<template>
    <div class="noteList">
        <div v-for="note in filterNote" :key="note.id">
            <div class="noteTitle">{{note.date}}</div>
            <p>{{note.content}}</p>
            <!-- <mu-checkbox label="" v-model="note.done" class="checkbox" v-show="isCheck"/> -->
            <input name="checkbox"  v-model="note.done" type="checkbox" value="checkbox" checked="checked" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      openSimple: false
    };
  },
  computed: {
    ...mapGetters(["filterNote", "isCheck"])
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
</style>
