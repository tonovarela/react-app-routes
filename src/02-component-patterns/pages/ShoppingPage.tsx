import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

import '../styles/custom-style.css';
const product = {
  id: '1',
  title: "Coffe mugg---",
  img: "coffee-mug.png"
}
export const ShoppingPage = () => {
  return (
    <div className="bg-dark">
      ShoppingPage
      <hr />
      <div style={{ display: 'flex', flexDirection: "row",flexGrow:2, flexWrap: 'wrap' }} >
      <ProductCard className="bg-dark text-white " product={product}>
        <ProductImage className="custom-image"></ProductImage>
        <ProductTitle className="text-white text-bold"></ProductTitle>
        <ProductButtons className="custom-buttons"></ProductButtons>
      </ProductCard>



      
     

      <ProductCard  product={product} className="bg-dark text-white ">        
        <ProductCard.Image className="custom-image"></ProductCard.Image>
        <ProductCard.Title className="text-white text-bold" title={"varela"} ></ProductCard.Title>
        <ProductCard.Buttons className="custom-buttons"></ProductCard.Buttons>        
      </ProductCard>

      <ProductCard  product={product} style={{backgroundColor:'#70D1F8'}}>
        <ProductImage style={{boxShadow:'10px 10px 10px rgba(0,0,0 ,0.2)'}} className="custom-image"></ProductImage>
        <ProductTitle style={{fontWeight:'bold'}} ></ProductTitle>
        <ProductButtons style={{display:'flex',justifyContent:'end'}}></ProductButtons>
      </ProductCard>
      </div>
      
    </div>
  )
};

