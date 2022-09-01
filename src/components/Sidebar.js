import { styled } from '@mui/material/styles'
import { Backdrop } from '.'
import { useSelector } from 'react-redux'

const SidebarMenuWrapper = styled('div')(({ theme, showMenu }) => ({
  height: '100%',
  background: theme.colorWhite,
  // boxShadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  boxShadow: theme.shadows[12],
  position: 'fixed',
  top: 0,
  left: 0,
  width: showMenu ? '300px' : 0,
  zIndex: 200,
  transition: 'width 0.6s ease',
}))

const Sidebar = () => {
  const { showMenu } = useSelector((state) => state.global)

  return (
    <>
      {showMenu && <Backdrop />}
      <SidebarMenuWrapper showMenu={showMenu}>Yo</SidebarMenuWrapper>
    </>
  )
}

export default Sidebar
