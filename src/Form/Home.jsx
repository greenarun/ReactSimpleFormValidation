import React from "react";
import { Box } from '@mui/material'
import ImageUpload from "./ImageUpload";
import Form from "./Form";

const Home = () => {
    return (
        <Box sx={{ p: 2, m: 2, width: '400px' }}>
            <ImageUpload />
            <Form />
        </Box>
    );
}

export default Home