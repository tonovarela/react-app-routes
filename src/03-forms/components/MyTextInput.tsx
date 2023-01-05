import { useField, ErrorMessage } from 'formik';

interface Props {    
    name: string;
    label: string;
    type?: 'text' | 'email'  | 'password';
    placeholder?: string;
    [x:string]:any    
}

export const MyTextInput = ({label,...props}:Props) => {
    const  [field] =useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name } >{label}</label>
            <input  autoComplete="off"  className='text-input'   {...field}  {...props}  />
            <ErrorMessage name={props.name} component="span" />
            {/* {
                meta.touched && meta.error && <span>{meta.error}</span>
            } */}

        </>
    )
}
