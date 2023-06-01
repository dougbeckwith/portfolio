import React from "react";
import { Link } from "react-scroll";
const MobileNavItem = ({ link, handleClick = null }) => {
  return (
    <li
      className={`dark:text-gray-500 dark:hover:text-teal-200 text-gray-600 py-6 text-4xl hover:text-teal-200`}>
      <Link
        onClick={handleClick}
        to={link.elementName}
        smooth={true}
        duration={500}>
        {link.text}
      </Link>
    </li>
  );
};

export default MobileNavItem;
