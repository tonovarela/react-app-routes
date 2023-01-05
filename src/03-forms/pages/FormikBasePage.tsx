

import { useFormik } from 'formik';
import { ErrorMessage } from 'formik/dist/ErrorMessage'
import { FormikErrors } from 'formik/dist/types';
import '../styles/styles.css'
import { useForm } from './../hooks/useForm';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikPage = () => {
    const { isValidEmail } = useForm({});
    const validate = ({ lastName, firstName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {}
        if (!firstName) {
            errors.firstName = 'Firstname required';
        }
        if (firstName.length < 10) {
            errors.firstName = 'Must be at least 10 characters';
        }
        if (!lastName) {
            errors.lastName = 'Lastname required';
        }
        if (lastName.length < 10) {
            errors.lastName = ' Must be at least 10 characters';
        }
        if (!email) {
            errors.email = "Email is required"
        }
        if (!isValidEmail(email)) {
            errors.email = "Email not valid"
        }
        return errors;

    };
    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate,
    });

    const { firstName, lastName, email } = values;
    return (
        <div>
            <h1>Formik base tutorial</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor='firstname' >Firstname</label>
                <input type='text' name='firstName' onChange={handleChange} onBlur={handleBlur} value={firstName} />
                {touched.firstName && errors.firstName && <span > {errors.firstName}</span>}
                <label htmlFor='lastname' >Lastname</label>
                <input type='text' name='lastName' onChange={handleChange} onBlur={handleBlur} value={lastName} />
                {touched.lastName && errors.lastName && <span > {errors.lastName}</span>}
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={email} />
                {touched.email && errors.email && <span > {errors.email}</span>}

                <button type='submit' >Register</button>
            </form>
        </div>
    )
};

