import '../styles/styles.css'
import { useForm } from '../hooks/useForm';
import { FormEvent } from 'react';

export const RegisterPage = () => {
    const { onChange, formData, resetForm,isValidEmail } = useForm({
        name: 'tonovarela',
        email: 'tonovarela@gmail.com',
        password1: '12345',
        password2: '12345',
    });

    const { name, email, password1, password2 } = formData;
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //console.log(formData);
    }

    return (
        <div>
            <h1>RegisterPage</h1>
            <form onSubmit={onSubmit} noValidate>
                <input type="text" className={`${name.trim().length <= 0 && 'has-error'}`}  name='name' onChange={onChange} value={name} placeholder="Name"></input>
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input type="email" className={`${!isValidEmail(email)  && 'has-error'}`}   name="email" onChange={onChange} value={email} placeholder="email"></input>
                {!isValidEmail(email) && <span>Email invalido</span>}
                <input type="password" name="password1" onChange={onChange} value={password1} placeholder="Password" ></input>
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6  && password1.trim().length>0  && <span>Debe de ser mayor a 6</span>}
                <input type="password" name="password2" onChange={onChange} value={password2} placeholder="Repeat password"></input>
                {password2.trim().length>0 && password2 !==password1 && <span>Deben de ser iguales</span>}
                
                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </form>
        </div>
    )
};

