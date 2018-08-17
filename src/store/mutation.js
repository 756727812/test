import * as types from "./mutation-types";
import * as moment from 'moment';

export const mutations = {
    [types.BACK_SAVE] (state, note){
        if(note.content==="")return;
        state.notes.splice(state.notes.indexOf(note), 1);
    },
    [types.NEW_NOTE] (state, note){
        if(note.content==="")return;
        let newNote = {
            id: +new Date(),
            date: note.date,
            content: note.content,
            done: false
        }
        state.activeNote = newNote;
        state.notes.push(note);
        console.log(newNote);
    },
    [types.ALL_CHECK](state){
        state.notes.forEach(n => {
            n.done = true;
        });
        console.log(state.notes);
    }
}