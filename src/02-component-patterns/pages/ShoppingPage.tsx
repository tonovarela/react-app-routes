import { ProductButtons, ProductCard, ProductImage, ProductTitle, } from "../components";

import { products } from "../data/products";

const product = products[0];
export const ShoppingPage = () => {

  return (
    <div className="bg-dark">
      ShoppingPage
      <hr />
      <ProductCard key={product.id} product={product} initialValues={{ count: 4, maxCount: 15 }} >
        {
          ({ reset, isMaxCountReached, count, increaseBy }) => (
            <>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons/>
              
            </>
          )
        }
      </ProductCard>
    </div>
  )
};

