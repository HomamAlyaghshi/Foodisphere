import { Button } from '@mui/material'
import React from 'react'

const ButtonTheme = ({variant ,bgcolor, color ,size , endIcon ,onClick ,href , children,width} ) => {
  return (
    <Button variant={variant}  size={size} endIcon={endIcon}  fullWidth onClick={onClick} href={href} color={bgcolor} 
    sx={{width:{width} ,fontWeight: 'bold',borderRadius: '24px',borderWidth:'2px',px:'12px',py:'12px' ,borderColor:'#474747' ,color: {color}}}>
        {children}
    </Button>
  )
}

export default ButtonTheme
