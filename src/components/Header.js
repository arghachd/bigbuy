import { Stack, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { Logo, CartLinkIcon } from '.'

const HeaderWrapper = styled('header')(({ theme }) => ({
  height: '8rem',
  width: '100vw',
  position: 'sticky',
  top: 0,
  left: 0,
  backgroundColor: theme.palette.secondary.main,
}))

const HeaderContainer = styled(Container)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

const HeaderLink = styled(Link)(({ theme }) => ({
  color: theme.colorWhite,
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    color: theme.palette.primary.main,

    '&::after': {
      width: '100%',
    },
  },
  '&::after': {
    content: '""',
    display: 'block',
    height: 2,
    backgroundColor: theme.palette.primary.main,
    width: 0,
    transition: 'width 0.3s ease',
  },
}))

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Stack>
          <Link to='/'>
            <Logo />
          </Link>
        </Stack>
        <Stack direction='row' spacing={2}>
          <HeaderLink to='/'>
            <Typography variant='subtitle1'>Home</Typography>
          </HeaderLink>
          <HeaderLink to='/contact'>
            <Typography variant='subtitle1'>Contact Us</Typography>
          </HeaderLink>
        </Stack>
        <Stack direction='row' spacing={2}>
          <HeaderLink to='/login'>
            <Typography variant='subtitle1'>Login</Typography>
          </HeaderLink>
          <HeaderLink to='/register'>
            <Typography variant='subtitle1'>Register</Typography>
          </HeaderLink>
          <HeaderLink to='/order-history'>
            <Typography variant='subtitle1'>My Orders</Typography>
          </HeaderLink>
          <HeaderLink to='/cart'>
            <CartLinkIcon />
          </HeaderLink>
        </Stack>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
