import { Suspense } from "react";
import { BrowserRouter, Routes, NavLink, Route, Navigate, Link } from "react-router-dom"
import logo from '../logo.svg'
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo"></img>
                        <ul>
                            {
                                routes.map(({ to, name }) => (
                                    <li key={to}>
                                        <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to={to}>{name}</NavLink>
                                    </li>
                                ))
                            }
                            <li>
                                <NavLink  className={({ isActive }) => isActive ? 'nav-active' : ''} to="/lazyload/lazy1" >Lazy1</NavLink>
                            </li>
                            <li>
                                <NavLink  className={({ isActive }) => isActive ? 'nav-active' : ''} to="/lazyload/lazy2" >Lazy2</NavLink>
                            </li>
                            <li>
                                <NavLink  className={({ isActive }) => isActive ? 'nav-active' : ''} to="/lazyload/lazy3" >Lazy3</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({ path, component: Component }) => (
                                <Route key={path}
                                    path={path}
                                    element={<Component />} />
                            ))
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace></Navigate>} />
                    </Routes>
                </div>

            </BrowserRouter>
        </Suspense>


    )
}
