import { useState } from "react";

import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});
    const onProductCountChange = ({ counter, product }: { counter: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {
            const newShoppinCard = { ...oldShoppingCart };
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
            if (productInCart.count + counter > 0) {
                productInCart.count += counter;
                return {
                    ...newShoppinCard,
                    [product.id]: productInCart
                }
            }
            delete newShoppinCard[product.id];
            return { ...newShoppinCard }
            
        });
    }


    return {
        shoppingCart,


        onProductCountChange,

    }

}