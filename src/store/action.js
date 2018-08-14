
import * as types from './mutation-types';
export const actions = {
    backSave({ commit }, note){
        commit(types.BACK_SAVE, note);
    },
    addNote({ commit }, note){
        commit(types.NEW_NOTE, note);
    }
};