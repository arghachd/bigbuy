import userTypes from '../types/users'

const initialState = {
  users: [],
  pendingCreateUserWithEmailAndPassword: false,
  pendingSignInWithEmailAndPassword: false,
  pendingSignOut: false,
  pendingSignInWithGoogle: false,
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case userTypes.CREATE_USER_WITH_EMAIL_AND_PASSWORD_REQUEST:
      return {
        ...state,
        pendingCreateUserWithEmailAndPassword: true,
      }
    case userTypes.CREATE_USER_WITH_EMAIL_AND_PASSWORD_SUCCESS:
      return {
        ...state,
        pendingCreateUserWithEmailAndPassword: false,
      }
    case userTypes.CREATE_USER_WITH_EMAIL_AND_PASSWORD_FAILED:
      return {
        ...state,
        pendingCreateUserWithEmailAndPassword: false,
      }
    case userTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_REQUEST:
      return {
        ...state,
        pendingSignInWithEmailAndPassword: true,
      }
    case userTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS:
      return {
        ...state,
        pendingSignInWithEmailAndPassword: false,
      }
    case userTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILED:
      return {
        ...state,
        pendingSignInWithEmailAndPassword: false,
      }
    case userTypes.SIGN_OUT:
      return {
        ...state,
        pendingSignOut: true,
      }
    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        pendingSignOut: false,
      }
    case userTypes.SIGN_OUT_FAILED:
      return {
        ...state,
        pendingSignOut: false,
      }
    case userTypes.SIGN_IN_WITH_GOOGLE_REQUEST:
      return {
        ...state,
        pendingSignInWithGoogle: true,
      }
    case userTypes.SIGN_IN_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
        pendingSignInWithGoogle: false,
      }
    case userTypes.SIGN_IN_WITH_GOOGLE_FAILED:
      return {
        ...state,
        pendingSignInWithGoogle: false,
      }
    default:
      return state
  }
}
