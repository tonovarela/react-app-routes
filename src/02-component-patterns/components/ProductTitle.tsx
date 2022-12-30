import { useContext } from "react";

import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({ title = '' }) => {
    const { product } = useContext(ProductContext)
    let titulo=title.length > 0?title:product.title;    
    return (
        <span className={styles.productDescription}>{titulo}</span>
    )
}