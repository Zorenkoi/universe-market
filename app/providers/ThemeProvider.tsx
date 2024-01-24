"use client";
import { Theme } from "@radix-ui/themes";
import { PropsWithChildren, useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { isDarkTheme } = useAppSelector((data) => data.theme);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <Theme
      appearance={isDarkTheme ? "dark" : "light"}
      accentColor="ruby"
      radius="full"
    >
      {children}
    </Theme>
  );
};

export default ThemeProvider;
