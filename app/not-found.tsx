import React from "react";
import BackLink from "./components/BackLink";
import { Flex, Heading } from "@radix-ui/themes";

const Page404 = () => {
  return (
    <div className="h-56 w-full flex justify-center align-middle">
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Heading size={"9"} mb={"3"}>
          404
        </Heading>
        <Heading className="text-center" mb={"3"}>
          сторінка не знайдена
        </Heading>
        <div className="inline-block">
          <BackLink />
        </div>
      </Flex>
    </div>
  );
};

export default Page404;
