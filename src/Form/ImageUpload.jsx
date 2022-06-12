import React, { useState } from "react";
import { FormControl, Box } from '@mui/material';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const ImageUpload = () => {
    const [file, setFile] = useState(undefined);

    const handleChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    }
    return (
        <FormControl >
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="profilePic"
                multiple
                type="file"
                onChange={handleChange}
            />

            <label htmlFor="profilePic">
                {file ?
                    <Box sx={{ height: 190, width: 190, borderRadius: 50, overflow: 'hidden', cursor: 'pointer' }}>
                        <img src={file} style={{ width: '100%' }} alt="imageFile" />
                    </Box>
                    :
                    <Box>Profile Picture<AddPhotoAlternateIcon style={{ cursor: 'pointer' }} /></Box>
                }
            </label>
        </FormControl>
    )

}

export default ImageUpload
