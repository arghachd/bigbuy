import * as type from '../types/global'

export function toggleMenu() {
  return {
    type: type.TOGGLE_MENU,
  }
}
export function hideMenu() {
  return {
    type: type.HIDE_MENU,
  }
}
