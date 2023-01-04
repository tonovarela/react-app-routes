import { ChangeEvent, FormEvent, useState } from "react"


export const UseForm = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '12345',
        password2: '12345',
    })

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRegisterData({ ...registerData, [event.target.name]: event.target.value })
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(registerData);
    
    }


    return  {
        registerData,
        onChange,
        onSubmit,

    }
}