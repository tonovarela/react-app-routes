import '../styles/styles.css'

import {  Formik, Form } from 'formik';
import * as yup from 'yup'
import { MySelect, MyTextInput,MyCheckbox} from '../components';



export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}

                validationSchema={yup.object({
                    firstName: yup.string().max(15, 'Debe de tener 15 caracteres minimo').required('Requerido'),
                    lastName: yup.string().max(15, 'Debe de tener 15 caracteres minimo').required('Requerido'),
                    email: yup.string().email('Check correct email ').required('Requerido'),
                    terms: yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
                    jobType: yup.string().notOneOf(['5'], "Esta opcion no esta permitida").required('Requerido'),
                })}
            >
                {
                    ({ isValid }) => (
                        <Form noValidate >

                            <MyTextInput label='First Name' name={'firstName'} placeholder='Nombre' />
                            <MyTextInput label='Last Name' name={'lastName'} placeholder="Apellido" />
                            <MyTextInput label='Email' placeholder='example@live.com' name={'email'} />
                            <MyCheckbox name={'terms'} label={'Terminos'} ></MyCheckbox>                            
                            <MySelect label='Job Type' name="jobType" >
                            <option value="">Elije una opcion</option>
                                <option value="1">Opcion 2</option>
                                <option value="3">Opcion 3</option>
                                <option value="4">Opcion 4</option>
                                <option value="5">Opcion 5</option>
                            </MySelect>
                            
                            <button type='submit' disabled={!isValid} >Register</button>
                        </Form>
                    )
                }
            </Formik>



        </div>
    )
};
