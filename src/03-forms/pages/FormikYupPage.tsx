import { useFormik } from 'formik';
import '../styles/styles.css'
import * as yup from 'yup'

export const FormikYupePage = () => {
    const {   handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: yup.object({
            firstName: yup.string().max(15,'Debe de tener 15 caracteres minimo').required('Requerido'),
            lastName: yup.string().max(15,'Debe de tener 15 caracteres minimo').required('Requerido'),
            email: yup.string().email('Check correct email ').required('Requerido'),
        })
    });    
    return (
        <div>
            <h1>Formik yup</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor='firstname' >Firstname</label>
                <input type='text' {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span > {errors.firstName}</span>}
                <label htmlFor='lastname' >Lastname</label>
                <input type='text' {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span > {errors.lastName}</span>}
                <label htmlFor='email'>Email</label>
                <input type='email' {...getFieldProps('email')} />
                {touched.email && errors.email && <span > {errors.email}</span>}

                <button type='submit' >Register</button>
            </form>
        </div>
    )
};

