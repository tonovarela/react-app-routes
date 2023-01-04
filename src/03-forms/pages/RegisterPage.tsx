

import '../styles/styles.css'
import { UseForm } from '../hooks/useForm';

export const RegisterPage = () => {
   const  { onSubmit,onChange,registerData} = UseForm();
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

