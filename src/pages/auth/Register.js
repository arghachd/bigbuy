import { useState } from 'react'
import { Card, Container, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import registerImg from '../../assets/register.png'
import { Link, useNavigate } from 'react-router-dom'
import { appearFromBottom, dropFromTop } from '../../utils/animations'
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from '../../utils/validation'
import { useDispatch, useSelector } from 'react-redux'
import { createUserWithEmailAndPassword } from '../../redux/actions/users'
import { LoadingButton } from '@mui/lab'
import { toast } from 'react-toastify'

const Main = styled(Container)(({ theme }) => ({
  minHeight: 'calc(100vh - 16rem)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 5rem !important',
  overflowX: 'hidden',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}))
const RightWrapper = styled('div')(({ theme }) => ({
  overflowY: 'hidden',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
const LeftWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '90%',
  },
}))
const Image = styled('img')(({ theme }) => ({
  width: '90%',
  // height: '500px',
  objectFit: 'contain',
  animation: `${appearFromBottom} 1000ms ${theme.transitions.easing.easeInOut}`,
}))
const FormCard = styled(Card)(({ theme }) => ({
  width: '90%',
  // height: '500px',
  marginLeft: 'auto',
  padding: '2rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  animation: `${dropFromTop} 1000ms ${theme.transitions.easing.easeInOut}`,
}))
const Form = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
}))
const FormTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: '1rem',
}))
const FormRedirectLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  ':hover': {
    textDecoration: 'underline',
    color: '#c2410c',
  },
  '& h6': {
    display: 'inline',
    marginLeft: '0.6rem',
  },
}))
const OrTextWrapper = styled(Typography)(({ theme }) => ({
  marginTop: '1rem',
}))
const LoginButton = styled(LoadingButton)(({ theme }) => ({
  backgroundColor: theme.lightBlue,
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: theme.colorPrimary,
  },
}))

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pendingCreateUserWithEmailAndPassword } = useSelector(
    (state) => state.users
  )
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isCheckingFormValidity: false,
  })

  const handleCheckFormValidation = () => {
    if (
      !validateEmail(email) &&
      !validatePassword(password) &&
      !validateConfirmPassword(password, confirmPassword)
    ) {
      return Promise.resolve(true)
    } else {
      return Promise.resolve(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleRegisterUser = async (e) => {
    e.preventDefault()
    setFormData((prev) => ({ ...prev, isCheckingFormValidity: true }))
    const isValid = await handleCheckFormValidation()

    if (isValid) {
      setFormData((prev) => ({ ...prev, isCheckingFormValidity: false }))
      dispatch(
        createUserWithEmailAndPassword({ email, password, toast, navigate })
      )
    }
  }

  const { email, password, confirmPassword, isCheckingFormValidity } = formData

  return (
    <Main>
      <LeftWrapper>
        <FormCard>
          <Form onSubmit={handleRegisterUser}>
            <FormTitle variant='h2'>Register</FormTitle>
            <TextField
              id='email'
              label='Email'
              variant='outlined'
              fullWidth
              name='email'
              value={email}
              onChange={handleInputChange}
              color='secondary'
              error={
                isCheckingFormValidity ? Boolean(validateEmail(email)) : false
              }
              helperText={isCheckingFormValidity ? validateEmail(email) : ''}
            />
            <TextField
              type='password'
              id='password'
              label='Password'
              variant='outlined'
              fullWidth
              name='password'
              value={password}
              onChange={handleInputChange}
              color='secondary'
              error={
                isCheckingFormValidity
                  ? Boolean(validatePassword(password))
                  : false
              }
              helperText={
                isCheckingFormValidity ? validatePassword(password) : ''
              }
            />
            <TextField
              id='confirmPassword'
              label='Confirm Password'
              variant='outlined'
              type='password'
              fullWidth
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleInputChange}
              color='secondary'
              error={
                isCheckingFormValidity
                  ? Boolean(validateConfirmPassword(password, confirmPassword))
                  : false
              }
              helperText={
                isCheckingFormValidity
                  ? validateConfirmPassword(password, confirmPassword)
                  : ''
              }
            />
            <LoginButton
              loading={pendingCreateUserWithEmailAndPassword}
              variant='contained'
              fullWidth
              type='submit'
            >
              Register
            </LoginButton>
          </Form>

          <OrTextWrapper variant='subtitle1'>
            Already have an account?
            <FormRedirectLink to='/login'>
              <Typography variant='subtitle1'>Login</Typography>
            </FormRedirectLink>
          </OrTextWrapper>
        </FormCard>
      </LeftWrapper>
      <RightWrapper>
        <Image src={registerImg} alt='login' />
      </RightWrapper>
    </Main>
  )
}

export default Register
