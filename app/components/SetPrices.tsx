"use client";
import { Product } from "@/interfaces/interfaces";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setPrices } from "../redux/slices/priceSlice";

const SetPrices = ({ allProducts }: { allProducts: Product[] }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const prices = findMinMaxPrices(allProducts);
    dispatch(setPrices(prices));
  }, [allProducts]);

  return <></>;
};

export default SetPrices;

function findMinMaxPrices(products: Product[]) {
  if (!products || !Array.isArray(products) || products.length === 0) {
    return {
      minPrice: 0,
      maxPrice: 1000,
    };
  }

  // Инициализация минимальной и максимальной цен первого продукта
  let minPrice = products[0].price;
  let maxPrice = products[0].price;

  // Проходим по остальным продуктам и обновляем minPrice и maxPrice при необходимости
  for (let i = 1; i < products.length; i++) {
    const currentPrice = products[i].price;

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }

    if (currentPrice > maxPrice) {
      maxPrice = currentPrice;
    }
  }

  return {
    minPrice,
    maxPrice,
  };
}
