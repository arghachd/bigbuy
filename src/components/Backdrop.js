import { styled } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { hideMenu } from '../redux/actions/global'

const BackdropContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.3)',
  /* width: 400px; */
  top: 0,
  left: 0,
  zIndex: 100,
  overflow: 'hidden',
  overflowY: 'hidden',
}))

const Backdrop = () => {
  const dispatch = useDispatch()

  return <BackdropContainer onClick={() => dispatch(hideMenu())} />
}

export default Backdrop
