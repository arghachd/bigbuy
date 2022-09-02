import { styled } from '@mui/material/styles'
import { Backdrop, Logo } from '.'
import { useSelector, useDispatch } from 'react-redux'
import { Stack, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { ImCross } from 'react-icons/im'
import { FiLogOut } from 'react-icons/fi'
import { hideMenu } from '../redux/actions/global'

const SidebarMenuWrapper = styled('div')(({ theme, showMenu }) => ({
  height: '100%',
  background: theme.palette.secondary.main,
  // boxShadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  boxShadow: theme.shadows[12],
  position: 'fixed',
  top: 0,
  left: 0,
  width: showMenu ? '300px' : 0,
  zIndex: 200,
  transition: 'width 0.6s ease',
}))
const SidebarMenuItems = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '3rem 2rem',
  position: 'relative',
}))
const LogoContainer = styled('div')(({ theme }) => ({
  display: 'inline-block',
}))
const TopSidebarLinks = styled(Stack)(({ theme }) => ({
  paddingTop: '5rem',
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

const SidebarLogoutContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  padding: '1.5rem 0',
  alignItems: 'center',
  color: theme.colorWhite,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
}))
const SidebarCloseIcon = styled('div')(({ theme }) => ({
  position: 'absolute',
  color: theme.colorWhite,
  right: 30,
  top: 40,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

const Sidebar = () => {
  const dispatch = useDispatch()
  const { showMenu } = useSelector((state) => state.global)

  return (
    <>
      {showMenu && <Backdrop />}
      <SidebarMenuWrapper showMenu={showMenu}>
        {showMenu && (
          <SidebarMenuItems>
            <div>
              <LogoContainer>
                <Link to='/'>
                  <Logo />
                </Link>
              </LogoContainer>
              <TopSidebarLinks
                display='flex'
                direction='column'
                spacing={3}
                onClick={() => dispatch(hideMenu())}
              >
                <HeaderLink to='/'>
                  <Typography variant='h4'>Home</Typography>
                </HeaderLink>
                <HeaderLink to='/contact'>
                  <Typography variant='h4'>Contact Us</Typography>
                </HeaderLink>
                <HeaderLink to='/login'>
                  <Typography variant='h4'>Login</Typography>
                </HeaderLink>
                <HeaderLink to='/register'>
                  <Typography variant='h4'>Register</Typography>
                </HeaderLink>
                <HeaderLink to='/order-history'>
                  <Typography variant='h4'>My Orders</Typography>
                </HeaderLink>
              </TopSidebarLinks>
            </div>
            <SidebarLogoutContainer>
              <Typography variant='h4'>Logout</Typography>
              <FiLogOut size={20} />
            </SidebarLogoutContainer>
            <SidebarCloseIcon onClick={() => dispatch(hideMenu())}>
              <ImCross />
            </SidebarCloseIcon>
          </SidebarMenuItems>
        )}
      </SidebarMenuWrapper>
    </>
  )
}

export default Sidebar
