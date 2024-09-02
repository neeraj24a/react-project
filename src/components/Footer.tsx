import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <AppBar position='sticky' sx={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant='h6'>
                        © Copyright {year}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer