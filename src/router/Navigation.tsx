import { BrowserRouter, Routes, NavLink ,Route, Navigate} from "react-router-dom"
import { RegisterPage } from "../03-forms/pages/RegisterPage"
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
                        <NavLink className={({isActive})=>isActive?'nav-active':''} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'nav-active':''} to="/users">Users</NavLink>
                    </li>
                </ul>
                </nav>
                <Routes>
                    <Route path="/about"  element={<h1>About Page</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/*" element={<Navigate to="register" replace></Navigate>} />
                </Routes>                
            </div>

        </BrowserRouter>

    )
}
