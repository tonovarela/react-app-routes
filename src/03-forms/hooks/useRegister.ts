import * as yup from 'yup';
export const useRegister =()=>{
    
    const initialValues = {
        name: '',
        email: '',
        password1: '',
        password2: '',
    }
    const validationSchema = yup.object({
        name: yup.string().min(2).max(15).required("Requerido"),
        email: yup.string().email("Esto no parece ser un email válido").required("Requerido"),
        password1: yup.string().min(6).required("Requerido"),
        password2: yup.string().required("Requerido").oneOf([yup.ref('password1')], 'Las contraseñas no son iguales'),
    });
    const onSubmit = (values: any) => {
        console.log(values);
    }


    return {
        initialValues,
        validationSchema,
        onSubmit,
    }

}