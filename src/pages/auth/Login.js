import { Button, Card, Container, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import loginImg from '../../assets/login.png'
import { Link } from 'react-router-dom'
import { BsGoogle } from 'react-icons/bs'
import { appearFromBottom, dropFromTop } from '../../utils/animations'

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

const LeftWrapper = styled('div')(({ theme }) => ({
  overflowY: 'hidden',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
const RightWrapper = styled('div')(({ theme }) => ({
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
const ForgotPasswordLinkWrapper = styled('div')(({ theme }) => ({
  alignSelf: 'flex-start',
  marginTop: '1rem',
}))
const ForgotPasswordLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  ':hover': {
    textDecoration: 'underline',
    color: '#c2410c',
  },
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
const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.lightBlue,
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: theme.colorPrimary,
  },
}))

const GoogleSignInBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginTop: '1rem',
}))

const Login = () => {
  return (
    <Main>
      <LeftWrapper>
        <Image src={loginImg} alt='login' />
      </LeftWrapper>
      <RightWrapper>
        <FormCard>
          <Form>
            <FormTitle variant='h2'>Login</FormTitle>
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              fullWidth
              color='secondary'
            />
            <TextField
              id='outlined-basic'
              label='Password'
              variant='outlined'
              fullWidth
              color='secondary'
            />
            <LoginButton variant='contained' fullWidth>
              Login
            </LoginButton>
          </Form>

          <ForgotPasswordLinkWrapper>
            <ForgotPasswordLink to='/reset'>
              <Typography variant='subtitle1'>Forgot Password</Typography>
            </ForgotPasswordLink>
          </ForgotPasswordLinkWrapper>

          <OrTextWrapper variant='subtitle1'>-- or --</OrTextWrapper>

          <GoogleSignInBtn
            variant='contained'
            startIcon={<BsGoogle />}
            fullWidth
          >
            Google
          </GoogleSignInBtn>

          <OrTextWrapper variant='subtitle1'>
            Don't have an account?
            <FormRedirectLink to='/register'>
              <Typography variant='subtitle1'>Register</Typography>
            </FormRedirectLink>
          </OrTextWrapper>
        </FormCard>
      </RightWrapper>
    </Main>
  )
}

export default Login
