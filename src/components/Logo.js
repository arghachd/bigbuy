import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const BrandLogo = styled(Typography)(({ theme }) => ({
  color: theme.colorWhite,
  fontFamily: 'Pacifico',
}))

const LogoPart = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.h1.fontSize,
}))

const Logo = () => {
  return (
    <BrandLogo variant='h1'>
      Big<LogoPart>Buy.</LogoPart>
    </BrandLogo>
  )
}

export default Logo
