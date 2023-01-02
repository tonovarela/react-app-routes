import { ProductCard, } from "../components";
import { useShoppingCart } from './../hooks/useShoppingCart';
import '../styles/custom-style.css';
import { products } from "../data/products";


export const ShoppingPage = () => {
  const  {shoppingCart,onProductCountChange} = useShoppingCart();
  
  return (
    <div className="bg-dark">
      ShoppingPage
      <hr />
      <div className="block-products">
        {
          products.map((product) => {
            return (
              <ProductCard key={product.id} product={product} className="bg-dark text-white"
                value={shoppingCart[product.id]?.count || 0}
                onChange={onProductCountChange}>
                <ProductCard.Image className="custom-image"></ProductCard.Image>
                <ProductCard.Title className="text-white text-bold" ></ProductCard.Title>
                <ProductCard.Buttons className="custom-buttons" style={{ display: 'flex', justifyContent: "center" }}></ProductCard.Buttons>
              </ProductCard>
            )
          })
        }
      </div>

      <div className="shopping-cart">
        {
          Object.keys(shoppingCart).map(index => {
            const { count, ...product } = shoppingCart[index];
            return (
              <ProductCard
                key={index}
                product={product}
                value={count}
                onChange={onProductCountChange}
                className="bg-dark text-white " style={{ width: '100px' }}>
                <ProductCard.Image className="custom-image"></ProductCard.Image>
                <ProductCard.Buttons className="custom-buttons"></ProductCard.Buttons>
              </ProductCard>
            )
          })
        }
      </div>      
    </div>

  )
};

