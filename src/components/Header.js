import { Stack, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Logo, CartLinkIcon } from '.'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../redux/actions/global'
import { LoadingButton } from '@mui/lab'
import { signOut } from '../redux/actions/users'
import { toast } from 'react-toastify'

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
const LogoutBtn = styled(LoadingButton)(({ theme }) => ({
  color: theme.colorWhite,
  textTransform: 'capitalize',
  transition: 'all 0.3s ease',
  ':hover': {
    color: theme.palette.primary.main,
  },
}))

const MenuIcon = styled(HiOutlineMenuAlt3)`
  cursor: pointer;
`

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pendingSignOut } = useSelector((state) => state.users)

  const handleOpenMenu = () => {
    dispatch(toggleMenu())
  }

  const handleUserLogout = () => {
    dispatch(signOut({ navigate, toast }))
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
            <Stack direction='row' spacing={2} alignItems='center'>
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
              <LogoutBtn loading={pendingSignOut} onClick={handleUserLogout}>
                <Typography variant='subtitle1'>Logout</Typography>
              </LogoutBtn>
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
