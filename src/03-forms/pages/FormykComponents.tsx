import { Field, Formik, ErrorMessage, Form } from 'formik';
import '../styles/styles.css'
import * as yup from 'yup'

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Component yup</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms:false,
                    jobType:''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}

                validationSchema={yup.object({
                    firstName: yup.string().max(15, 'Debe de tener 15 caracteres minimo').required('Requerido'),
                    lastName: yup.string().max(15, 'Debe de tener 15 caracteres minimo').required('Requerido'),
                    email: yup.string().email('Check correct email ').required('Requerido'),
                    terms: yup.boolean().oneOf([true],"Debe de aceptar las condiciones"),
                    jobType: yup.string().notOneOf(["4"],"No es permitido"),
                })}
            >
                {
                    (formik) => (
                        <Form noValidate >
                            <label htmlFor='firstName' >Firstname</label>
                            <Field name="firstName" type="text" autcomplete="off" placeholder="Nombre" ></Field>
                            <ErrorMessage name='firstName' component="span"></ErrorMessage>
                            <label htmlFor='lastName' >Lastname</label>
                            <Field name="lastName" type="text" ></Field>
                            <ErrorMessage name='lastName' component="span"></ErrorMessage>
                            <label htmlFor='email'>Email</label>
                            <Field name="email" type="text" ></Field>
                            <ErrorMessage name='email' component="span" ></ErrorMessage>
                            <label htmlFor='terms'>
                            <Field name="terms" type="checkbox"  ></Field>
                                Terminos y condiciones</label>                            
                            <ErrorMessage name='terms' component="span" ></ErrorMessage>

                            <label htmlFor='jobtype'>Jobtype</label>
                            <Field name="jobtype" as="select"   >
                                <option value="0">Opcion 1</option>
                                <option value="1">Opcion 2</option>
                                <option value="3">Opcion 3</option>
                                <option value="4">Opcion 4</option>
                                <option value="5">Opcion 5</option>
                            </Field>
                            <ErrorMessage name='jobType' component="span" ></ErrorMessage>
                                

                            <button type='submit' >Register</button>
                        </Form>
                    )
                }
            </Formik>



        </div>
    )
};
