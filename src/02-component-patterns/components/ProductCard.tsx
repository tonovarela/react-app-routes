import styles from '../styles/styles.module.css';

import { useProduct } from './../hooks/useProduct';
import { OnChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import { createContext } from 'react';

export const ProductContext = createContext({} as ProductContextProps)
export const { Provider } = ProductContext;

export interface Props {
    product: Product,
    className?: string,
    children?: React.ReactElement | React.ReactElement[];
    style?:React.CSSProperties,
    onChange?: (args:OnChangeArgs) => void ,
    value?:number
}


export const ProductCard = ({ children, product, className ,style={},onChange,value=0}: Props) => {
    const { counter, increaseBy } = useProduct( { onChange,product,value});

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`}  style={style}>
                {children}
            </div>
        </Provider>

    )
}

