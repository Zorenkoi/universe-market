"use client";
import { Flex, Slider, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppSelector } from "../redux/hooks";

import { useEffect, useState } from "react";

const SliderPrice = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const { minPrice, maxPrice } = useAppSelector((data) => data.prices);

  const defaultMinPrice = Number(searchParams.get("min")) || minPrice;
  const defaultMaxPrice = Number(searchParams.get("max")) || maxPrice;

  const [minValue, setMinValue] = useState(defaultMinPrice);
  const [maxValue, setMaxValue] = useState(defaultMaxPrice);

  useEffect(() => {
    setMinValue(Number(searchParams.get("min")) || minPrice);
    setMaxValue(Number(searchParams.get("max")) || maxPrice);
  }, [minPrice, maxPrice]);

  const changeValue = ([firstValue, secondValue]: [
    firstValue: number,
    secondValue: number
  ]) => {
    setMinValue(firstValue);
    setMaxValue(secondValue);
  };
  //////////////////////////////////////////////////

  const saveParams = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");

    params.set("min", String(Math.floor(minValue)));
    params.set("max", String(Math.ceil(maxValue)));

    const query = params.size ? `/?${params}` : "/";

    router.push(query);
  };

  return (
    <Flex gap={"3"}>
      <Text mt={"1"}>Ціна:</Text>

      <Flex
        direction={"column"}
        gap={"3"}
        className="overflow-hidden w-52 pt-3 px-2"
      >
        <Slider
          min={minPrice}
          max={maxPrice}
          step={1}
          onValueCommit={saveParams}
          onValueChange={changeValue}
          value={[minValue, maxValue]}
          radius="none"
          defaultValue={[defaultMinPrice, defaultMaxPrice]}
          size="3"
        />

        <Flex justify={"between"}>
          <Text>від: {Math.floor(minValue)}$</Text>
          <Text>до: {Math.ceil(maxValue)}$</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SliderPrice;
