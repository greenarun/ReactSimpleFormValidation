import { useState } from "react";

const PostContactForm = async (
    values,
    successCallback,
    errorCallback
) => {
    if (true) successCallback();
    else errorCallback();
};

const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    formSubmitted: false,
    success: false
};

export const useValidation = () => {
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});

    const validate = (fieldValues = values) => {
        let temp = { ...errors };

        if ("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required.";
        if ("lastName" in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required.";
        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required.";
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                    ? ""
                    : "Email is not valid.";
        }

        if ("description" in fieldValues)
            temp.description =
                fieldValues.description.length !== 0 ? "" : "This field is required.";

        setErrors({
            ...temp
        });
    };

    const handleInputValue = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        validate({ [name]: value });
    };

    const handleSuccess = () => {
        setValues({
            ...initialFormValues,
            formSubmitted: true,
            success: true
        });
    };

    const handleError = () => {
        setValues({
            ...initialFormValues,
            formSubmitted: true,
            success: false
        });
    };

    const formIsValid = (fieldValues = values) => {
        const isValid =
            fieldValues.firstName &&
            fieldValues.lastName &&
            fieldValues.email &&
            fieldValues.description &&
            Object.values(errors).every((x) => x === "");

        return isValid;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const isValid =
            Object.values(errors).every((x) => x === "") && formIsValid();
        if (isValid) {
            await PostContactForm(values, handleSuccess, handleError);
        }
    };

    return {
        values,
        errors,
        handleInputValue,
        handleFormSubmit,
        formIsValid
    };
};
