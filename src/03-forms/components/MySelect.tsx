import { useField, ErrorMessage } from 'formik';
interface Props {    
    name: string;
    label: string;
    multiple?:boolean        
    children?:any    
}

export const MySelect = ({label,...props}:Props) => {
    const  [field] =useField(props);
    return (
        <>
            <label htmlFor={props.name } >{label}</label>
            <select {...field} {...props}/>     
            <ErrorMessage  name={props.name}/>
            {/* {
                meta.touched && meta.error && <span>{meta.error}</span>
            } */}
        </>
    )
}

