import { call, put, takeLatest, all } from 'redux-saga/effects'
import {
  handleCreateUserWithEmailAndPassword,
  handleSignInWithEmailAndPassword,
  handleSignInWithGoogle,
  handleSignOut,
} from '../../apis/auth'
import {
  createUserWithEmailAndPasswordFailed,
  createUserWithEmailAndPasswordSuccess,
  signInWithEmailAndPasswordFailed,
  signInWithEmailAndPasswordSuccess,
  signInWithGoogleFailed,
  signInWithGoogleSuccess,
  signOutFailed,
  signOutSuccess,
} from '../actions/users'
import userTypes from '../types/users'

function* createUserWithEmailAndPassword({ payload }) {
  const { email, password, toast, navigate } = payload

  try {
    const result = yield call(
      handleCreateUserWithEmailAndPassword,
      email,
      password
    )
    yield put(createUserWithEmailAndPasswordSuccess())
    toast.success('Registration successful')
    navigate('/')
  } catch (e) {
    toast.error(e.message)
    yield put(createUserWithEmailAndPasswordFailed())
  }
}
function* signInWithEmailAndPassword({ payload }) {
  const { email, password, toast, navigate } = payload

  try {
    const result = yield call(handleSignInWithEmailAndPassword, email, password)
    yield put(signInWithEmailAndPasswordSuccess())
    toast.success('Login successful')
    navigate('/')
  } catch (e) {
    toast.error(e.message)
    yield put(signInWithEmailAndPasswordFailed())
  }
}
function* signOut({ payload }) {
  const { navigate, toast } = payload

  try {
    const result = yield call(handleSignOut)
    yield put(signOutSuccess())
    navigate('/login')
    toast.success('Logout successfully')
  } catch (e) {
    toast.error(e.message)
    yield put(signOutFailed())
  }
}
function* signInWithGoogle({ payload }) {
  const { navigate, toast } = payload

  try {
    const result = yield call(handleSignInWithGoogle)
    yield put(signInWithGoogleSuccess())
    navigate('/')
    toast.success('Login successful')
  } catch (e) {
    console.log(e.message)
    // toast.error(e.message)
    yield put(signInWithGoogleFailed())
  }
}

function* userSaga() {
  yield all([
    takeLatest(
      userTypes.CREATE_USER_WITH_EMAIL_AND_PASSWORD_REQUEST,
      createUserWithEmailAndPassword
    ),
    takeLatest(
      userTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_REQUEST,
      signInWithEmailAndPassword
    ),
    takeLatest(userTypes.SIGN_OUT, signOut),
    takeLatest(userTypes.SIGN_IN_WITH_GOOGLE_REQUEST, signInWithGoogle),
  ])
}

export default userSaga
