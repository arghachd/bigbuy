import { Typography } from '@mui/material'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { styled } from '@mui/material/styles'

const CartItemCount = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '-14px',
  right: '-7px',
}))

const CartLinkIcon = () => {
  return (
    <>
      <Typography variant='subtitle1'>
        Cart
        <BsFillCartCheckFill size={15} />
      </Typography>
      <CartItemCount variant='subtitle1'>0</CartItemCount>
    </>
  )
}

export default CartLinkIcon
