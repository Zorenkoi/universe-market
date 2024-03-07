import { Box, Flex, Grid } from "@radix-ui/themes";
import Skeleton from "../components/Skeleton";

import BackLink from "../components/BackLink";

const LoadingOrderPage = () => {
  return (
    <>
      <Box mb={"6"} className="block md:hidden">
        <BackLink />
      </Box>
      <Grid columns={"5"} gap={"7"}>
        <Box className="col-span-5 order-last md:order-none md:col-span-3 ">
          <Box mb={"6"} className="hidden md:block">
            <BackLink />
          </Box>

          <form>
            <Flex direction={"column"} gap={"5"}>
              <Skeleton height={35} borderRadius={50} />
              <Skeleton height={35} borderRadius={50} />
              <Skeleton height={35} borderRadius={50} />
              <Skeleton height={35} borderRadius={50} />
              <Skeleton height={35} borderRadius={50} />
              <Skeleton height={35} borderRadius={50} />
            </Flex>
          </form>
        </Box>

        <Flex
          gap={"3"}
          direction={"column"}
          className="col-span-5 md:col-span-2"
        >
          <Skeleton height={30} className="mb-5" />
          <Skeleton height={64} borderRadius={10} />
          <Skeleton height={64} borderRadius={10} />
        </Flex>
      </Grid>
    </>
  );
};

export default LoadingOrderPage;
