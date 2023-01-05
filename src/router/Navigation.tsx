
import { BrowserRouter, Routes, NavLink ,Route, Navigate} from "react-router-dom"
import { FormikYupePage,FormikPage,RegisterPage, FormikComponents, FormikAbstract } from "../03-forms/pages"


import logo from '../logo.svg'





export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo"></img>
                    <ul>
                    <li>
                        <NavLink className={({isActive})=>isActive?'nav-active':''} to="/register">Register page</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'nav-active':''} to="/formik">Formik  basic</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'nav-active':''} to="/yup">Formik UP </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'nav-active':''} to="/formikcomponent">Formik Components </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'nav-active':''} to="/formikabstract">Formik Abstract </NavLink>
                    </li>
                </ul>
                </nav>
                <Routes>
                    <Route path="/yup"  element={<FormikYupePage/>} />
                    <Route path="/formik" element={<FormikPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/formikcomponent" element={<FormikComponents/>} />
                    <Route path="/formikabstract" element={<FormikAbstract/>} />
                    <Route path="/*" element={<Navigate to="formik" replace></Navigate>} />
                </Routes>                
            </div>

        </BrowserRouter>

    )

}
