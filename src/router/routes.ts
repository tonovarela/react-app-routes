import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";


type JSXComponent = () => JSX.Element
interface route {
    name: string;
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent
}
//const Lazy1 = lazy(() => import(/* webpackChunkName:"LazyPage1" */"../01-lazyload/pages/LazyPage1"))
//const Lazy2 = lazy(() => import(/* webpackChunkName:"LazyPage2" */"../01-lazyload/pages/LazyPage2"))
//const Lazy3 = lazy(() => import(/* webpackChunkName:"LazyPage3" */"../01-lazyload/pages/LazyPage3"))

const LazyLayout = lazy(() => import(/* webpackChunkName:"LazyLayout" */"../01-lazyload/layout/LazyLayout"))

export const routes: route[] = [
    { name: "Dashboard", to: "/lazyload/", path: "/lazyload/*", component: LazyLayout },        
    { name: "No Lazy", to: "/nolazy", path: "nolazy", component: NoLazy },
]