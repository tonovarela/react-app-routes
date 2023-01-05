import { useField, ErrorMessage } from 'formik';
interface Props {    
    name: string;
    label: string;    
    [x:string]:any    
}

export const MyCheckbox = ({label,...props}:Props) => {
    const  [field,meta] =useField({...props,type:'checkbox'});
    return (
        <>
            <label htmlFor={props.name} >
            <input type="checkbox" className='input-text' {...field} {...props} />     
                {label}</label>            
                <ErrorMessage name={props.name} />
            {/* {
                meta.touched && meta.error && <span>{meta.error}</span>
            } */}
        </>
    )
}
