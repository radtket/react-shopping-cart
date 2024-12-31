"use client";

import { isEmpty } from "lodash";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import MOCK_DATA from "./mock-data.json";

const ProductsContext = createContext(undefined);

export const useProductsContext = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }

  return context;
};

export function ProductsProvider(props) {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  const value = useMemo(
    () => ({
      isFetching,
      setIsFetching,
      products,
      setProducts,
      filters,
      setFilters,
    }),
    [isFetching, products, filters]
  );

  return <ProductsContext.Provider value={value} {...props} />;
}

const getProducts = () =>
  new Promise(resolve => {
    resolve(MOCK_DATA.data.products);
  });

export const useProducts = () => {
  const {
    isFetching,
    setIsFetching,
    products,
    setProducts,
    filters,
    setFilters,
  } = useProductsContext();

  const fetchProducts = useCallback(() => {
    setIsFetching(true);
    getProducts().then(data => {
      setIsFetching(false);
      setProducts(data);
    });
  }, [setIsFetching, setProducts]);

  const filterProducts = useCallback(
    filterPayload => {
      setIsFetching(true);
      getProducts().then(data => {
        setIsFetching(false);

        setFilters(filterPayload);
        setProducts(
          isEmpty(filterPayload)
            ? data
            : data.filter(p => filterPayload.includes(p.availableSizes))
        );
      });
    },
    [setFilters, setIsFetching, setProducts]
  );

  return {
    isFetching,
    fetchProducts,
    products,
    filterProducts,
    filters,
  };
};
