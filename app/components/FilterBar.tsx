import { Flex } from "@radix-ui/themes";
import React from "react";
import FilterCategory from "./FilterCategory";
import SortPrice from "./SortPrice";
import SliderPrice from "./SliderPrice";

const FilterBar = () => {
  return (
    <Flex gap={"5"} px={"2"} className="flex-wrap" align={"start"}>
      <FilterCategory />
      <SortPrice />
      <SliderPrice />
    </Flex>
  );
};

export default FilterBar;
