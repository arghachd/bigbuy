import { Button, Card, Container, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import resetImg from '../../assets/forgot.png'
import { Link } from 'react-router-dom'
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
const RedirectLinkWrapper = styled('div')(({ theme }) => ({
  alignSelf: 'flex-start',
  marginTop: '1rem',
}))
const RedirectLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  ':hover': {
    textDecoration: 'underline',
    color: '#c2410c',
  },
}))
const FormFooter = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))
const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.lightBlue,
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: theme.colorPrimary,
  },
}))

const Reset = () => {
  return (
    <Main>
      <LeftWrapper>
        <Image src={resetImg} alt='login' />
      </LeftWrapper>
      <RightWrapper>
        <FormCard>
          <Form>
            <FormTitle variant='h2'>Reset Password</FormTitle>
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              fullWidth
              color='secondary'
            />
            <LoginButton variant='contained' fullWidth>
              Reset
            </LoginButton>
          </Form>
          <FormFooter>
            <RedirectLinkWrapper>
              <RedirectLink to='/login'>
                <Typography variant='subtitle1'>Login</Typography>
              </RedirectLink>
            </RedirectLinkWrapper>
            <RedirectLinkWrapper>
              <RedirectLink to='/register'>
                <Typography variant='subtitle1'>Register</Typography>
              </RedirectLink>
            </RedirectLinkWrapper>
          </FormFooter>
        </FormCard>
      </RightWrapper>
    </Main>
  )
}

export default Reset
