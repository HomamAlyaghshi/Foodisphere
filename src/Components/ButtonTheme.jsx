import { Button } from '@mui/material'
import React from 'react'

const ButtonTheme = ({variant ,bgcolor, color ,size , startIcon ,onClick ,href , children} ) => {
  return (
    <Button variant={variant}  size={size} startIcon={startIcon} fullWidth onClick={onClick} href={href} color={bgcolor} 
    sx={{ fontWeight: 'bold',borderRadius: '24px',borderWidth:'2px',px:'12px',py:'12px' ,borderColor:'#474747' ,color: {color}}}>
        {children}
    </Button>
  )
}

export default ButtonTheme
