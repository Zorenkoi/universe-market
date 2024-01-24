import { Flex, Grid } from "@radix-ui/themes";
import FilterBar from "./components/FilterBar";
import SearchField from "./components/SearchField";
import SkeletonCard from "./components/SkeletonCard";

const LoadingProductsPage = () => {
  const products = ["1", "2", "3", "4", "5", "6"];

  return (
    <Flex direction={"column"} gap={"5"}>
      <SearchField />
      <FilterBar />

      <Grid
        gap={"3"}
        columns={{
          initial: "1",
          xs: "2",
          sm: "3",
        }}
      >
        {products.map((product) => (
          <SkeletonCard key={product} />
        ))}
      </Grid>
    </Flex>
  );
};

export default LoadingProductsPage;
