import axios, { AxiosPromise } from "axios";
import { Product, Category } from "@/interfaces/interfaces";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOneProductById = async (
  productId: number
): Promise<Product> => {
  try {
    const res = await fetch(`${BASE_URL}/products/${productId}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  // const { data } = await axios.get(`${BASE_URL}/products/category/${category}`);

  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  const data = await res.json();
  return data;
};

export const getAllCategories = async (): Promise<Category[]> => {
  // const { data } = await axios.get(`${BASE_URL}/products/categories`);

  const res = await fetch(`${BASE_URL}/products/categories`);
  const data = await res.json();

  return data;
};

export const getOneCategoryById = async (category: string) => {
  const { data } = await axios.get(`${BASE_URL}/categories/${category}`);

  return data;
};
