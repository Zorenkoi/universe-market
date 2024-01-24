"use client";
import { Flex, Select, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SortPrice = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [value, setValue] = useState(searchParams.get("sort") || "asc");
  useEffect(() => {
    setValue(searchParams.get("sort") || "asc");
  }, [searchParams]);

  const changeValue = (sortType: string) => {
    setValue(sortType);
    const params = new URLSearchParams(searchParams);
    params.delete("page");

    params.set("sort", sortType);
    const query = params.size ? `/?${params}` : "/";

    router.push(query);
  };

  return (
    <Flex gap={"3"} align={"center"}>
      <Text>Сортування:</Text>
      <Select.Root
        value={value}
        defaultValue={"asc"}
        onValueChange={changeValue}
      >
        <Select.Trigger placeholder="Обрати категорію..." />
        <Select.Content>
          <Select.Item value={"asc"}>Спочатку дешевші</Select.Item>
          <Select.Item value={"desc"}>Спочатку дорожчі</Select.Item>
          <Select.Item value={"pop"}>Спочатку популярні</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default SortPrice;
