import axios, { AxiosPromise } from "axios";
import { Product, Category } from "@/interfaces/interfaces";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async (): Promise<Product[] | undefined> => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getOneProductById = async (
  productId: number
): Promise<Product | undefined> => {
  try {
    const res = await fetch(`${BASE_URL}/products/${productId}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[] | undefined> => {
  try {
    const res = await fetch(`${BASE_URL}/products/category/${category}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getAllCategories = async (): Promise<string[] | undefined> => {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
