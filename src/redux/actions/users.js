import userTypes from '../types/users'

export const createUserWithEmailAndPassword = (formData) => ({
  type: userTypes.CREATE_USER_WITH_EMAIL_AND_PASSWORD_REQUEST,
  payload: formData,
})
export const createUserWithEmailAndPasswordSuccess = () => ({
  type: userTypes.CREATE_USER_WITH_EMAIL_AND_PASSWORD_SUCCESS,
})
export const createUserWithEmailAndPasswordFailed = () => ({
  type: userTypes.CREATE_USER_WITH_EMAIL_AND_PASSWORD_FAILED,
})

export const signInWithEmailAndPassword = (formData) => ({
  type: userTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_REQUEST,
  payload: formData,
})
export const signInWithEmailAndPasswordSuccess = () => ({
  type: userTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS,
})
export const signInWithEmailAndPasswordFailed = () => ({
  type: userTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILED,
})

export const signOut = (data) => ({
  type: userTypes.SIGN_OUT,
  payload: data,
})
export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS,
})
export const signOutFailed = () => ({
  type: userTypes.SIGN_OUT_FAILED,
})

export const signInWithGoogle = (data) => ({
  type: userTypes.SIGN_IN_WITH_GOOGLE_REQUEST,
  payload: data,
})
export const signInWithGoogleSuccess = () => ({
  type: userTypes.SIGN_IN_WITH_GOOGLE_SUCCESS,
})
export const signInWithGoogleFailed = () => ({
  type: userTypes.SIGN_IN_WITH_GOOGLE_FAILED,
})
