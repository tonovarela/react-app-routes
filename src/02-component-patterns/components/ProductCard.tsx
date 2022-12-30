import styles from '../styles/styles.module.css';

import { useProduct } from './../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import { createContext, ReactElement } from 'react';


export const ProductContext = createContext({} as ProductContextProps)
export const { Provider } = ProductContext;


export interface Props {
    product: Product,
    className?: string,
    children?: ReactElement | ReactElement[];
}


export const ProductCard = ({ children, product, className }: Props) => {
    const { counter, increaseBy } = useProduct();
    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>

    )
}

