export const getters = {
  activeNote(state){
    return state.activeNote;
  },
  isCheck(state){
    return state.isCheck;
  },
  filterNote(state){
    if(state.search!==''||state.notes.length>0){
      return state.notes.filter(note => note.content.indexOf(state.search) > -1) || [];
    }
    return state.notes||[];
  }
}
