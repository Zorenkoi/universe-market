"use client";
import { Product } from "@/interfaces/interfaces";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { cutString, formatMoney } from "../helper/helper";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addProductToCart,
  deleteProductFromCart,
  openCart,
} from "../redux/slices/cartSlice";
import DialogRemove from "./DialogRemove";

const ProductCard = (product: Product) => {
  const { id, image, price, title, rating } = product;

  return (
    <Card className="relative">
      <Flex direction={"column"} gap={"4"} height={"100%"}>
        <Link href={`/${id}`}>
          <Box className="relative overflow-hidden h-64 bg-white">
            <Flex
              justify={"center"}
              align={"center"}
              className="absolute top-0 left-0 w-full h-full scale-110 hover:scale-100 duration-150"
            >
              <Box className="relative p-24">
                <Image
                  fill
                  src={image}
                  alt={title}
                  sizes="contain"
                  className="object-contain "
                />
              </Box>
            </Flex>
          </Box>
        </Link>

        <Flex justify={"between"}>
          <Text mt={"1"} className="font-medium text-xl">
            {formatMoney(price)}
          </Text>

          <Flex className="align-center" align={"end"}>
            <StarFilledIcon
              color="rgb(252,124,18)"
              width={"30"}
              height={"30"}
            />

            <Text className="font-semibold text-sm">
              {rating?.rate?.toFixed(1)}
            </Text>
          </Flex>
        </Flex>
        <Link href={`/${id}`}>
          <Text className="font-semibold cursor-pointer hover:text-red-400 duration-300">
            {cutString(title, 25)}
          </Text>
        </Link>

        <CartAddRemoveButtons {...product} />
      </Flex>
    </Card>
  );
};

export const CartAddRemoveButtons = ({ id, image, title, price }: Product) => {
  const cartList = useAppSelector((data) => data.cart.list);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteProductFromCart(id));
  };

  const handleAdd = () => {
    const newProduct = { id, image, title, price };
    dispatch(addProductToCart(newProduct));
    dispatch(openCart());
  };

  const isInCart = cartList.find((cartProduct) => cartProduct.id === id);
  return (
    <>
      {isInCart && <DialogRemove handleDelete={handleDelete} />}
      {!isInCart && (
        <Button
          className="cursor-pointer"
          mt={"auto"}
          onClick={handleAdd}
          color="green"
          size={"3"}
        >
          Добавити у кошик
        </Button>
      )}
    </>
  );
};

export default ProductCard;
