import { CartProduct } from "@/interfaces/interfaces";
import { Box, Flex, Avatar, Button, Separator, Text } from "@radix-ui/themes";
import React from "react";
import { cutString } from "../helper/helper";
import { useAppDispatch } from "../redux/hooks";
import {
  removeProductFromCart,
  addProductToCart,
} from "../redux/slices/cartSlice";
import Link from "next/link";

interface CartProductProps extends CartProduct {
  isMutable: boolean;
}

const CartCard = ({
  id,
  image,
  title,
  price,
  quantity,
  isMutable,
}: CartProductProps) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeProductFromCart(id));
  };

  const handleAdd = () => {
    const newProduct = { id, image, title, price };
    dispatch(addProductToCart(newProduct));
  };

  return (
    <Box>
      <Flex gap={"4"} p={"3"}>
        <Avatar src={image} fallback="A" size={"5"} radius="medium" />

        <Flex direction="column" justify={"between"} width={"100%"}>
          <Link href={`/${id}`}>
            <Text className="text-sm">{cutString(title, 30)}</Text>
          </Link>

          <Flex justify={"between"} align={"end"}>
            {isMutable && (
              <Flex align={"center"} gap={"3"}>
                <Button
                  onClick={handleRemove}
                  disabled={false}
                  color="gray"
                  variant="soft"
                >
                  <Text className="font-bold">-</Text>
                </Button>
                <Text>{quantity}</Text>
                <Button
                  onClick={handleAdd}
                  disabled={false}
                  color="gray"
                  variant="soft"
                >
                  <Text className="font-bold">+</Text>
                </Button>
              </Flex>
            )}

            <Text className="font-bold text-md">{price}$</Text>
          </Flex>
        </Flex>
      </Flex>
      <Separator size={"4"} />
    </Box>
  );
};

export default CartCard;
