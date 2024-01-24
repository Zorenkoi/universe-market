import { Box, Flex, Grid, Separator } from "@radix-ui/themes";
import Skeleton from "../components/Skeleton";

const OneProductLoadingPage = async () => {
  return (
    <>
      <Grid
        columns={{
          initial: "1",
          sm: "2",
        }}
        gap={"7"}
      >
        <Box
          px={{
            initial: "4",
            sm: "6",
          }}
          className="one-product-img-container"
        >
          <Skeleton className="h-full" />
        </Box>

        <Flex direction={"column"} gap={"3"}>
          <Flex direction={"column"} gap={"1"}>
            <Skeleton className="h-6" />
            <Box className="mr-52">
              <Skeleton className="h-6" />
            </Box>
          </Flex>
          {/* ////////////////////////////// */}

          <Skeleton className="h-10" />
          <Separator size={"4"} />
          <Box className="w-20">
            <Skeleton className="h-9" />
          </Box>
          <Separator size={"4"} />
          <Skeleton className="h-10 my-2" />
          <Flex direction={"column"}>
            <Skeleton className="h-5" />
            <Skeleton className="h-5" />
            <Skeleton className="h-5" />
            <Skeleton className="h-5" />
            <Skeleton className="h-5" />
          </Flex>
        </Flex>
      </Grid>
    </>
  );
};

export default OneProductLoadingPage;
