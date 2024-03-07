"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  countItems: number;
  currentPage: number;
  sizePage: number;
}

const Pagination = ({ countItems, sizePage, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const countPages = Math.ceil(countItems / sizePage);

  if (countPages <= 1) {
    return null;
  }

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", String(page));

    router.push(`?${params.toString()}`);
  };

  return (
    <Flex
      gap={"4"}
      align={"center"}
      className="mt-3"
      direction={{
        initial: "column-reverse",
        xs: "row",
      }}
    >
      <Text size={"4"}>
        Page <span className="font-bold text-2xl">{currentPage}</span> of{" "}
        <span className="font-bold text-lg">{countPages}</span>
      </Text>
      <Flex gap={"4"}>
        <Button
          className="cursor-pointer"
          onClick={() => changePage(1)}
          disabled={currentPage === 1}
          color="gray"
          variant="soft"
          size={"3"}
        >
          <DoubleArrowLeftIcon />
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          color="gray"
          variant="soft"
          size={"3"}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === countPages}
          color="gray"
          variant="soft"
          size={"3"}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() => changePage(countPages)}
          disabled={currentPage === countPages}
          color="gray"
          variant="soft"
          size={"3"}
        >
          <DoubleArrowRightIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pagination;
