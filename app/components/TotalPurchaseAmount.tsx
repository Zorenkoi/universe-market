import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Heading, Text } from "@radix-ui/themes";

const TotalPurchaseAmount = () => {
  const cartList = useAppSelector((data) => data.cart.list);
  const arrPrice = cartList.map((product) => product.price * product.quantity);
  const count = arrPrice.reduce((prev, curr) => prev + curr, 0);
  return (
    <Text size={"6"} className="px-3">
      Повна сумма: {count}$
    </Text>
  );
};

export default TotalPurchaseAmount;
