import { getOneProductById } from "@/services/getProducts";
import { Box, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";
import { CartAddRemoveButtons } from "../components/ProductCard";
import StarRating from "../components/StarRating";
import { formatMoney } from "../helper/helper";
import BackLink from "../components/BackLink";

const OneProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getOneProductById(Number(params.id));

  return (
    <>
      <Box
        mb={{
          initial: "6",
          xs: "7",
        }}
      >
        <BackLink />
      </Box>
      <Grid
        columns={{
          initial: "1",
          sm: "2",
        }}
        gap={"7"}
      >
        <Box
          py={{
            initial: "4",
            sm: "8",
          }}
          px={{
            initial: "4",
            sm: "6",
          }}
          className="h-80 sm:h-96 bg-white "
        >
          <Box className="w-full h-full relative">
            <Image
              fill
              src={product?.image}
              alt={product?.title}
              className="object-contain object-top bg-white"
            />
          </Box>
        </Box>

        <Flex direction={"column"} gap={"3"}>
          <Heading mb={"2"}>{product?.title}</Heading>

          <Flex
            gap={{
              initial: "1",
              xs: "3",
            }}
            direction={{
              initial: "column",
              xs: "row",
            }}
          >
            <StarRating
              rating={product?.rating?.rate}
              starRatedColor="#fc7c12"
              starDimension="35px"
              starSpacing="5px"
            />

            <Flex gap={"2"}>
              <Text className="text-3xl font-bold">
                {product?.rating?.rate.toFixed(1)}
              </Text>
              <Text className="text-xl self-end" mb={"1"}>
                ({product?.rating?.count})
              </Text>
            </Flex>
          </Flex>
          <Separator size={"4"} />
          <Text className="text-2xl font-bold">
            {formatMoney(product?.price)}
          </Text>
          <Separator size={"4"} />
          <Flex direction={"column"} mt={"3"} mb={"4"}>
            <CartAddRemoveButtons {...product} />
          </Flex>
          <Text>{product?.description}</Text>
        </Flex>
      </Grid>
    </>
  );
};

export default OneProductPage;
