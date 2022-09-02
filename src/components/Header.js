import { Stack, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link, NavLink } from 'react-router-dom'
import { Logo, CartLinkIcon } from '.'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/actions/global'

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

const HeaderLink = styled(NavLink)(({ theme }) => ({
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
  '&.active': {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}))

const DesktopHeaderWrapper = styled(Stack)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
const MobileHeaderWrapper = styled(Stack)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}))

const MenuIcon = styled(HiOutlineMenuAlt3)`
  cursor: pointer;
`

const Header = () => {
  const dispatch = useDispatch()

  const handleOpenMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Stack>
            <Link to='/'>
              <Logo />
            </Link>
          </Stack>
          <DesktopHeaderWrapper>
            <Stack direction='row' spacing={2}>
              <HeaderLink
                to='/'
                // className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <Typography variant='subtitle1'>Home</Typography>
              </HeaderLink>
              <HeaderLink to='/contact'>
                <Typography variant='subtitle1'>Contact Us</Typography>
              </HeaderLink>
            </Stack>
          </DesktopHeaderWrapper>
          <DesktopHeaderWrapper>
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
          </DesktopHeaderWrapper>
          <MobileHeaderWrapper direction='row' spacing={2}>
            <HeaderLink to='/cart'>
              <CartLinkIcon />
            </HeaderLink>
            <MenuIcon onClick={handleOpenMenu} size={20} color='#fff' />
          </MobileHeaderWrapper>
        </HeaderContainer>
      </HeaderWrapper>
    </>
  )
}

export default Header
