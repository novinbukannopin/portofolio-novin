"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      centered
    >
      <Tab
        icon={<PhoneMissedIcon sx={{ color: "#ffffff" }} />}
        iconPosition="start"
        label="Feed"
        sx={{ color: "#ffffff" }}
      />
      <Tab
        icon={<PhoneMissedIcon sx={{ color: "#ffffff" }} />}
        iconPosition="start"
        label="About"
        sx={{ color: "#ffffff" }}
      />
      <Tab
        icon={<PhoneMissedIcon sx={{ color: "#ffffff" }} />}
        iconPosition="start"
        label="Contact"
        sx={{ color: "#ffffff" }}
      />
      <Tab
        icon={<PhoneMissedIcon sx={{ color: "#ffffff" }} />}
        iconPosition="start"
        label="Guestbook"
        sx={{ color: "#ffffff" }}
      />
    </Tabs>
  );
}
