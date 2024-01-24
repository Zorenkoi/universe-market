"use client";
import { Grid } from "@radix-ui/themes";
import { AnimatePresence } from "framer-motion";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/interfaces/interfaces";

const ProductCardList = ({ products }: { products: Product[] }) => {
  return (
    <Grid
      gap={"5"}
      columns={{
        initial: "1",
        xs: "2",
        sm: "3",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
};

export default ProductCardList;
