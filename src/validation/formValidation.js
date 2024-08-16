import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    username:yup.string().required("Username cannot be empty"),
    email:yup.string().email("Enter a valid email").required("Email cannot be empty"),
    password:yup.string().min(8,"password should be at least 8 characters long").max(50,"Password should not be longer than 50 characters"),
    confirmPassword:yup.string().oneOf([yup.ref("password"),null],"Passwords do not match."),
    role:yup.string().required("the role is required"),
    IAgree:yup.bool().oneOf([true],"You must agree to all Terms and Conditions")
});


export const signInSchema = yup.object().shape({
    username: yup.string().required("Username cannot be empty"),
    password: yup.string()
        .min(8, 'Passwords should be at least 8 characters long.')
        .max(50, 'Password should not be longer than 50 characters')
        .required('Password is required'),
});