import { useEffect } from "react";
import { useProducts } from "../context/products";
import { ProductsWrapper } from "../styles/styled-components";
import Product from "./Product";

function Products() {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductsWrapper>
      <div>
        <h2>{products?.length} Product(s) found</h2>
        <main>
          {(products || []).map(p => (
            <Product key={p.sku} product={p} />
          ))}
        </main>
      </div>
    </ProductsWrapper>
  );
}

export default Products;
