import BookIcon from "../icons/BookIcon";
import CloudIcon from "../icons/CloudIcon";
import CodeIcon from "../icons/CodeIcon";
import HomeIcon from "../icons/HomeIcon";
import HomeIconBlack from "../icons/HomeIconBlack";
import SettingsIcon from "../icons/SettingsIcon";

const MenuItems = ({ mobileNav = false }) => {
  return (
    <>
      <a href="#" className={`menu-item ${mobileNav ? "" : "active"}`}>
        {mobileNav ? <HomeIconBlack /> : <HomeIcon />}
        <span>Repositories</span>
      </a>
      <a href="#" className="menu-item">
        <CodeIcon />
        <span>AI Code Review</span>
      </a>
      <a href="#" className="menu-item">
        <CloudIcon />
        <span>Cloud Security</span>
      </a>
      <a href="#" className="menu-item">
        <BookIcon />
        <span>How to Use</span>
      </a>
      <a href="#" className="menu-item">
        <SettingsIcon />
        <span>Settings</span>
      </a>
    </>
  );
};

export default MenuItems;
