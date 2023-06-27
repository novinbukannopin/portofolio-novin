"use client";

import { Tabs } from "flowbite-react";
import { HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function FullWidthTabs() {
  return (
    <Tabs.Group aria-label="Full width tabs">
      <Tabs.Item icon={HiUserCircle} title="Profile">
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Profile tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item icon={MdDashboard} title="Dashboard">
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </Tabs.Item>

      <Tabs.Item icon={HiClipboardList} title="Contacts">
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </Tabs.Item>
    </Tabs.Group>
  );
}
