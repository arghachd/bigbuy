import * as type from '../types/global'

const initialState = {
  showMenu: false,
}

export default function global(state = initialState, action) {
  switch (action.type) {
    case type.TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu,
      }
    case type.HIDE_MENU:
      return {
        ...state,
        showMenu: false,
      }
    default:
      return state
  }
}
