"use client";
import { getAllProducts } from "@/services/getProducts";
import { DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { IconButton, TextField } from "@radix-ui/themes";
import axios from "axios";
import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];

const SearchField = () => {
  // const [menuIsOpen, setMenuIsOpen] = useState(false);

  // const customStyles = {
  //   control: (provided, state) => ({
  //     ...provided,
  //     borderRadius: "50px",
  //     padding: "0px 5px",
  //   }),
  // };
  // const loadOptions = async (searchValue: string, callback) => {
  //   const loverSearchValue = searchValue.toLowerCase();
  //   const products = await getAllProducts();
  //   const options = products
  //     .filter((product) =>
  //       product.title.toLowerCase().includes(loverSearchValue)
  //     )
  //     .map((product) => ({
  //       value: product.title,
  //       label: product.title,
  //     }));

  //   callback(options);
  // };

  return (
    <>
      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Search the docs…" size="3" />
        <TextField.Slot pr="3">
          <IconButton size="2" variant="ghost">
            <DotsHorizontalIcon height="16" width="16" />
          </IconButton>
        </TextField.Slot>
      </TextField.Root>
    </>
  );
};

export default SearchField;
