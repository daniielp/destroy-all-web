import { AppBar, Box, Toolbar, Typography, Link } from '@mui/material'
import React from 'react'
import LightSwitch from '../../components/LightSwitch'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" enableColorOnDark>
                <Toolbar variant="dense">
                    <Link href="/" variant="h6" color="inherit" underline="hover">
                        Destroy All Web
                    </Link>
                    <Box sx={{ml: 5,}}>
                        <Link href="/blog" variant="body1" color="inherit" underline="hover">Blog</Link>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <LightSwitch />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header