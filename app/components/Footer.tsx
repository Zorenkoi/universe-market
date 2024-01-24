import { Box, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Separator size={"4"} />
      <div className="wrapper">
        <nav className="py-12">
          <Grid
            columns={{
              initial: "1",
              xs: "2",
              sm: "3",
            }}
            gap={"6"}
          >
            <Flex
              direction={"column"}
              align={{ initial: "center", xs: "start" }}
            >
              <Heading size={"7"}>
                UNIVERSE
                <span className="text-base text-purple-600 ml-2">market</span>
              </Heading>
            </Flex>
            <Flex
              direction={"column"}
              gap={"3"}
              align={{ initial: "center", xs: "start" }}
            >
              <Heading size={"5"}>Contacts</Heading>

              <li className="inline-block">
                <Link href={"/"}>+380 111 000 222</Link>
              </li>

              <li className="inline-block">
                <Link href={"/"}>zorenkoi956@gmail.com</Link>
              </li>
            </Flex>
          </Grid>
        </nav>
      </div>
    </Box>
  );
};

export default Footer;
