const initialstate = {
  darke: false
}

const themeReducer = (state = initialstate, action) => {
  switch(action.type){
    case 'CHANGE_THEME':
      return {
        ...state,
        darke: !state.darke
      }
    default:
      return state
  }
}

export { initialstate, themeReducer }