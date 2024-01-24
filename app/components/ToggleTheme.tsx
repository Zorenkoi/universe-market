import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";
import React, { useState } from "react";
import { toggleTheme } from "../redux/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { motion, AnimatePresence } from "framer-motion";

const MMoonIcon = motion(MoonIcon);
const MSunIcon = motion(SunIcon);

const ToggleTheme = () => {
  const { isDarkTheme } = useAppSelector((data) => data.theme);
  const dispatch = useAppDispatch();

  const variants = {
    start: {
      rotate: -180,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
    },
    end: {
      rotate: 180,
      opacity: 0,
    },
  };

  return (
    <Flex>
      <IconButton size={"3"} onClick={() => dispatch(toggleTheme())}>
        <AnimatePresence mode="wait" initial={false}>
          {isDarkTheme ? (
            <MMoonIcon
              key={"moon"}
              initial={"start"}
              animate={"show"}
              exit={"end"}
              variants={variants}
              width={25}
              height={25}
              transition={{
                duration: 0.2,
              }}
            />
          ) : (
            <MSunIcon
              key={"sun"}
              initial={"start"}
              animate={"show"}
              exit={"end"}
              variants={variants}
              width={25}
              height={25}
              transition={{
                duration: 0.2,
              }}
            />
          )}
        </AnimatePresence>
      </IconButton>
    </Flex>
  );
};

export default ToggleTheme;
