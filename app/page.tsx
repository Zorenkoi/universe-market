import { Product } from "@/interfaces/interfaces";
import { getAllProducts, getProductsByCategory } from "@/services/getProducts";
import { Flex } from "@radix-ui/themes";
import { sort as fastsort } from "fast-sort";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
import ProductCardList from "./components/ProductCardList";
import SearchField from "./components/SearchField";
import SetPrices from "./components/SetPrices";

interface Props {
  searchParams: {
    category: string;
    sort: string;
    page: string;
    min: string;
    max: string;
  };
}

const Home = async ({ searchParams }: Props) => {
  const { category, sort, page, min, max } = searchParams;

  const products = await getProducts(category);
  const filteredProducts = filterProducts(products, Number(min), Number(max));
  const sortedProducts = sortProducts(filteredProducts, sort);

  const countItems = filteredProducts.length;
  const currentPage = Number(page) || 1;
  const sizePage = 6;

  const slicedProducts = getSubarray(
    sortedProducts,
    sizePage,
    (currentPage - 1) * sizePage
  );

  return (
    <Flex direction={"column"} gap={"5"}>
      <FilterBar />

      <ProductCardList products={slicedProducts} />

      <Pagination
        currentPage={currentPage}
        countItems={countItems}
        sizePage={sizePage}
      />
      <SetPrices allProducts={products} />
    </Flex>
  );
};

export default Home;

function getSubarray<T>(arr: T[], count: number, startIndex: number): T[] {
  if (startIndex < 0 || startIndex >= arr.length || count <= 0) {
    return arr;
  }

  const subarray = arr.slice(startIndex, startIndex + count);

  return subarray;
}

function getProducts(category: string): Promise<Product[]> {
  if (!category) {
    return getAllProducts();
  }

  return getProductsByCategory(category);
}

function sortProducts(products: Product[], sortType: string): Product[] {
  if (!sortType || sortType === "asc") {
    return fastsort(products).asc((product) => product.price);
  }
  if (sortType === "desc") {
    return fastsort(products).desc((product) => product.price);
  }
  if (sortType === "pop") {
    return fastsort(products).desc((product) => product.rating.rate);
  }

  return products;
}

function filterProducts(
  products: Product[],
  min: number,
  max: number
): Product[] {
  if (!min || !max) return products;

  return products.filter(
    ({ price }) => price >= Number(min) && price <= Number(max)
  );
}
