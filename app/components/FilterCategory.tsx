"use client";
import { getAllCategories } from "@/services/getProducts";
import { Flex, Select, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterCategory = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const [value, setValue] = useState(searchParams.get("category") || "_");

  useEffect(() => {
    setValue(searchParams.get("category") || "_");
  }, [searchParams]);

  const changeValue = (category: string) => {
    setValue(category);
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    params.delete("min");
    params.delete("max");

    if (category === "_") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const query = params.size ? `/?${params}` : "/";

    router.push(query);
  };

  return (
    <Flex gap={"3"} align={"center"}>
      <Text>Категорія:</Text>
      <Select.Root defaultValue={"_"} onValueChange={changeValue} value={value}>
        <Select.Trigger placeholder="all categories" />
        <Select.Content>
          <Select.Item value={"_"}>all categories</Select.Item>
          {categories &&
            categories.map((category) => {
              return (
                <Select.Item key={category} value={String(category)}>
                  {category}
                </Select.Item>
              );
            })}
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default FilterCategory;
