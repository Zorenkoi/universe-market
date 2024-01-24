"use client";
import cartImg from "@/public/img/shopping-cart (1).png";
import { HomeIcon } from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Separator } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { openCart } from "../redux/slices/cartSlice";
import ToggleTheme from "./ToggleTheme";

import useScrollHeader from "../hooks/useScrollHeader";

// "fixed top-0 left-0 w-full"
const NavBar = () => {
  const dispatch = useAppDispatch();
  const { isDarkTheme } = useAppSelector((data) => data.theme);
  const showHeader = useScrollHeader();

  let classname = "header";
  classname += isDarkTheme ? " bg-neutral-800" : " bg-fuchsia-50 border-l";
  classname += showHeader ? " show-header" : " hide-header";

  return (
    <Box className={classname}>
      <Box py={"4"} className="">
        <div className="wrapper">
          <Flex justify={"between"} gap={"4"}>
            <Link href="/">
              <IconButton size={"3"} radius="large">
                <HomeIcon width={25} height={25} />
              </IconButton>
            </Link>
            {/* ////////////////////////////////////// */}
            <Flex gap={"4"} justify={"end"}>
              <ToggleTheme />
              <IconButton
                color="green"
                size={"3"}
                radius="large"
                onClick={() => {
                  dispatch(openCart());
                }}
              >
                <Image src={cartImg} width={30} height={30} alt="cart icon" />
              </IconButton>
            </Flex>
          </Flex>
        </div>
      </Box>
      <Separator size={"4"} />
    </Box>
  );
};

export default NavBar;
