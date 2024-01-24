"use client";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Separator,
} from "@radix-ui/themes";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeCart } from "../redux/slices/cartSlice";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import TotalPurchaseAmount from "./TotalPurchaseAmount";
import { useRouter } from "next/navigation";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { isCartOpen } = useAppSelector((data) => data.cart);
  const { isDarkTheme } = useAppSelector((data) => data.theme);
  const cartList = useAppSelector((data) => data.cart.list);
  const router = useRouter();

  let classname = "cart-container";
  classname += isCartOpen ? " show" : " hidden";
  classname += isDarkTheme ? " bg-neutral-800" : " bg-fuchsia-50 border-l";

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  return (
    <>
      <Flex className={classname} direction={"column"}>
        <Flex className="" p="4" align={"center"} justify={"between"}>
          <Heading>Кошик</Heading>
          <IconButton variant="soft" size={"3"} onClick={handleCloseCart}>
            <Cross2Icon width={"30"} height={"30"} />
          </IconButton>
        </Flex>
        <Separator size={"4"} mb={"4"} />

        {cartList.length === 0 && <EmptyCart closeCart={handleCloseCart} />}

        {cartList.length > 0 && (
          <Flex direction={"column"} gap={"4"}>
            {/* <TotalPurchaseAmount /> */}
            <CartList isMutable={true} />
            <Box className="px-3">
              <Button
                onClick={() => {
                  handleCloseCart();
                  router.push("/toorder");
                }}
                size={"3"}
                className="w-full"
              >
                Оформити замовлення
              </Button>
            </Box>
          </Flex>
        )}
      </Flex>

      <Overlay />
    </>
  );
};

const Overlay = () => {
  const isCartOpen = useAppSelector((data) => data.cart.isCartOpen);
  const dispatch = useAppDispatch();

  if (isCartOpen) {
    return (
      <div
        className="top-[0] left-[0] fixed w-screen h-screen opacity-90 backdrop-filter backdrop-blur-sm z-50"
        onClick={() => {
          dispatch(closeCart());
        }}
      ></div>
    );
  }

  return null;
};

// top-[0] left-[0] fixed w-screen h-screen opacity-90 bg-green

export default Cart;
