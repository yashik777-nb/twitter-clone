import React from "react";
import Classes from "./SidebarOption.module.css";

const SidebarOption = ({ active, text, Icon }) => {
  const cssClasses = [];
  cssClasses.push(Classes.sidebarOption);
  if (active) cssClasses.push(Classes.activeSidebar);

  return (
    <div className={cssClasses.join(" ")}>
      <Icon className={Classes.icon} />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
