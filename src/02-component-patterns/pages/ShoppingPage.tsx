import { ProductCard, } from "../components";
import '../styles/custom-style.css';
import { products } from "../data/products";
const product = products[0];
export const ShoppingPage = () => {
  
  return (
    <div className="bg-dark">
      ShoppingPage
      
      
      <hr />      
              <ProductCard key={product.id} product={product} className="bg-dark text-white"  initialValues={{count:4,maxCount:10}} >               
                <ProductCard.Image className="custom-image"></ProductCard.Image>
                <ProductCard.Title className="text-white text-bold" ></ProductCard.Title>
                <ProductCard.Buttons className="custom-buttons" style={{ display: 'flex', justifyContent: "center" }}></ProductCard.Buttons>
              </ProductCard>
            
      </div>
      
          
            
    

  )
};

