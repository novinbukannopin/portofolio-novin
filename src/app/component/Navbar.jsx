"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DevicesIcon from "@mui/icons-material/Devices";
import NightsStayIcon from "@mui/icons-material/NightsStay";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="dark:bg-brand bg-white flex justify-between p-6 mx-auto transition-all duration-150">
      {currentTheme === "dark" ? (
        <DevicesIcon sx={{ color: "#ffffff" }} />
      ) : (
        <DevicesIcon sx={{ color: "#000000" }} />
      )}
      {currentTheme === "dark" ? (
        <DevicesIcon
          className="cursor-pointer"
          sx={{ color: "#ffffff" }}
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <NightsStayIcon
          className="cursor-pointer text-brand"
          sx={{ color: "#000000" }}
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </div>
  );
}
