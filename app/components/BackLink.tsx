"use client";
import { motion } from "framer-motion";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import { useRouter } from "next/navigation";

const BackLink = () => {
  const router = useRouter();

  return (
    <div
      className="inline-flex items-center gap-2 cursor-pointer hover:text-red-400 duration-300 "
      onClick={() => {
        router.back();
      }}
    >
      <ChevronLeftIcon width={30} height={30} />
      <Text
        className=""
        size={{
          initial: "4",
          xs: "5",
        }}
      >
        На попередню сторінку
      </Text>
    </div>
  );
};

export default BackLink;
