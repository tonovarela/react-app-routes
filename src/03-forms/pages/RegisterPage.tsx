
import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css'

export const RegisterPage = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '12345',
        password2: '12345',
    })

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {       
        setRegisterData({...registerData,[event.target.name]: event.target.value})        
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(registerData);

    }

    return (
        <div>
            <h1>RegisterPage</h1>
            <form  onSubmit={onSubmit} noValidate>  
                <input type="text" name='name' onChange={onChange} value={registerData.name} placeholder="Name"></input>
                <input type="email" name="email"  onChange={onChange} value={registerData.email} placeholder="email"></input>
                <input type="password" name="password1"  onChange={onChange} value={registerData.password1} placeholder="Password" ></input>
                <input type="password" name="password2" onChange={onChange} value={registerData.password2} placeholder="Repeat password"></input>
                <button  type="submit">Create</button>
            </form>
        </div>
    )
};

