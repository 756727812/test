<template>
  <div class="hello">
    <h6>{{ msg }}</h6>
    <headComponent></headComponent>
    <noteList></noteList>
    <toolbar></toolbar>
  </div>
</template>

<script>
import headComponent from './Header.vue';
import noteList from './NoteList.vue';
import toolbar from './Toolbar.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'nwoigeriogjweogje'
    }
  },
  components: {
    headComponent,
    noteList,
    toolbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
