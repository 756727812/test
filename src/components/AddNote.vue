<template>
    <div class="addNote">
        <div class="edit-tool">
            <span @click="backList"><mu-icon value="keyboard_arrow_left"></mu-icon></span>
            <span>{{activeNote.date}}</span>
            <span class="saveNote" @click="commitAdd()" v-show="isShow">完成</span>
        </div>
        <input v-model="activeNote.content" type="text" @keyup="editorNote">
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            content:"",
            isShow: false
        }
    },
    created(){
        this.content = this.activeNote.content;
    },
    computed: {
        ...mapGetters(['activeNote'])
    },
    methods: {
        backList(){
            this.$router.push({path:'/'});
        },
        commitAdd(){
            console.log(this.content);
            this.$store.dispatch('addNote', this.activeNote);
            this.$router.push({path: "/"});
        },
        editorNote(){
            this.isShow = (this.activeNote.content!=="" && this.activeNote.content!==this.content);
        }
    }
}
</script>

<style scoped>
.edit-tool{
    overflow: hidden;
    line-height: 2.5rem;
}
.saveNote{
    float: right;
}
</style>
