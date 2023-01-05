import '../styles/styles.css'
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';
import { useRegister } from '../hooks/useRegister';

export const RegisterFormikPage = () => {
  const {initialValues,onSubmit,validationSchema} = useRegister();
    return (
        <div>
            <h1>Register formik page</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    ({ isValid, handleReset }) => (
                        <Form noValidate >
                            <MyTextInput label='First Name' name={'name'} placeholder='Nombre' />
                            <MyTextInput label='Email' placeholder='example@live.com' name={'email'} />
                            <MyTextInput label='password' placeholder='password' type='password' name={'password1'} />
                            <MyTextInput label='Confirm password' placeholder='password' type="password" name={'password2'} />
                            <button type='submit' disabled={!isValid} >Register</button>
                            <button type='button' onClick={() => { handleReset() }} >Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
};

