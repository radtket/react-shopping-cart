"use client";

import { useProducts } from "../context/products";

function Cool() {
  const zzz = useProducts();
  console.log({ zzz });
  return <div>Cool</div>;
}

export default Cool;
