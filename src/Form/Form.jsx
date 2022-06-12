import React from "react";
import { Button, TextField } from '@mui/material'
import { useValidation } from "./useValidation";

const inputFieldValues = [
    {
        name: "firstName",
        label: "First Name",
        id: "first-name"
    },
    {
        name: "lastName",
        label: "Last Name",
        id: "last-name"
    },
    {
        name: "email",
        label: "Email",
        id: "email"
    },
    {
        name: "description",
        label: "Description",
        id: "description",
        multiline: true,
        rows: 4
    }
];

const Form = () => {
    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useValidation();

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            {inputFieldValues.map((inputFieldValue, index) => {
                return (
                    <TextField
                        key={index}
                        onChange={handleInputValue}
                        onBlur={handleInputValue}
                        name={inputFieldValue.name}
                        label={inputFieldValue.label}
                        error={errors[inputFieldValue.name]}
                        multiline={inputFieldValue.multiline ?? false}
                        fullWidth
                        rows={inputFieldValue.rows ?? 1}
                        autoComplete="none"
                        {...(errors[inputFieldValue.name] && {
                            error: true,
                            helperText: errors[inputFieldValue.name]
                        })}
                        sx={{ mt: 1 }}
                    />
                );
            })}
            <Button
                variant="contained"
                type="submit"
                disabled={!formIsValid()}
                sx={{ mt: 1 }}
            >
                Send Message
            </Button>
        </form>
    );
};

export default Form
