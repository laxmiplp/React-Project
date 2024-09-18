import React from 'react';
import ButtonComponent from '../Components/ButtonComponent';
import { Box, Typography } from '@mui/material';

const Home = () => {
    return (
        <>
            <Box>
                <Typography variant="h1" gutterBottom>
                    Welcome to Home Page
                </Typography>
                <ButtonComponent />
            </Box>
        </>
    )
}
export default Home