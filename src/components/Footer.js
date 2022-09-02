import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const date = new Date()
const year = date.getFullYear()

const Wrapper = styled('div')(({ theme }) => ({
  height: '8rem',
  background: theme.palette.secondary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.colorWhite,
}))

const Footer = () => {
  return (
    <Wrapper>
      <Typography variant='subtitle1'>
        &copy; {year} All Rights Reserved
      </Typography>
    </Wrapper>
  )
}

export default Footer
