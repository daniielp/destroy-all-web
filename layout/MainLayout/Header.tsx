import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LightSwitch from '../../components/LightSwitch'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" enableColorOnDark>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Destroy All Web
                    </Typography>
                    <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
                        <LightSwitch />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header