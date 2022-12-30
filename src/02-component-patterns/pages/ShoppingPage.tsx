import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
const product = {
  id: '1',
  title: "Coffe mugg---",
  img: "coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
      ShoppingPage
      <hr />
      <div style={{ display: 'flex', flexDirection: "row", flexWrap: 'wrap' }}>
      <ProductCard product={product}>
        <ProductImage></ProductImage>
        <ProductTitle></ProductTitle>
        <ProductButtons></ProductButtons>
      </ProductCard>
     

      <ProductCard product={product}>        
        <ProductCard.Image></ProductCard.Image>
        <ProductCard.Title title={"varela"} ></ProductCard.Title>
        <ProductCard.Buttons></ProductCard.Buttons>        
      </ProductCard>
      </div>
      
    </div>
  )
};

