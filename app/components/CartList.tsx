import React from "react";
import { useAppSelector } from "../redux/hooks";
import CartCard from "./CartCard";

const CartList = ({ isMutable = true }: { isMutable?: boolean }) => {
  const cartList = useAppSelector((data) => data.cart.list);
  return (
    <>
      {cartList.map((product) => {
        return <CartCard key={product.id} {...product} isMutable={isMutable} />;
      })}
    </>
  );
};

export default CartList;
