import { Link } from "react-router-dom";
import LogoutIcon from "../icons/LogoutIcon";
import PhoneIcon from "../icons/PhoneIcon";

const FooterItems = () => {
  return (
    <>
      <a href="#" className="sidebar-footer-item">
        <PhoneIcon />
        <span>Support</span>
      </a>
      <Link to="/" className="sidebar-footer-item">
        <LogoutIcon />
        <span>Logout</span>
      </Link>
    </>
  );
};

export default FooterItems;
