import { useContext } from "react"


import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";


export const ProductImage = ({ img = '' }) => {
    const { product } = useContext(ProductContext)
    const imagen =img.length > 0?img :product.img    
    return (
        <img className={styles.productImg} src={imagen ?imagen : noImage} alt="Product"></img>
    )
}