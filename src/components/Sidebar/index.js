import React from "react";
import { SidebarConatiner, SidebarMenu, SidebarLink } from "./SidebarElements";

export const Sidebar = ({ handleDropdown, handleDropdownLeave }) => {
  return (
    <SidebarConatiner
      onMouseEnter={handleDropdown}
      onMouseLeave={handleDropdownLeave}
    >
      <SidebarMenu>
        <SidebarLink to="/">
          <p>Ice Creams</p>
        </SidebarLink>
        <SidebarLink to="/">
          <p>Burgers</p>
        </SidebarLink>
        <SidebarLink to="/">
          <p>Drinks</p>
        </SidebarLink>
        <SidebarLink to="/">
          <p>View All</p>
        </SidebarLink>
      </SidebarMenu>
    </SidebarConatiner>
  );
};
