import { lazy, LazyExoticComponent } from "react";
import { JsxEmit } from "typescript";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element
interface route {
    name: string;
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent
}
const Lazy1 = lazy(() => import(/* webpackChunkName:"LazyPage1" */"../01-lazyload/pages/LazyPage1"))
const Lazy2 = lazy(() => import(/* webpackChunkName:"LazyPage2" */"../01-lazyload/pages/LazyPage2"))
const Lazy3 = lazy(() => import(/* webpackChunkName:"LazyPage3" */"../01-lazyload/pages/LazyPage3"))

export const routes: route[] = [
    { name: "Lazy-1", to: "/lazy1", path: "lazy1", component: Lazy1 },
    { name: "Lazy-2", to: "/lazy2", path: "lazy2", component: Lazy2 },
    { name: "Lazy-3", to: "/lazy3", path: "lazy3", component: Lazy3 },
]