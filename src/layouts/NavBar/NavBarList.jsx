import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-fontawesome";
// import GoogleAuth from "../../api/GoogleAuth";

const NavBarList = ({ items }) => {
  const getItem = (item) => {
    let itemList = null;
    switch (item.type) {
      case "logo":
        itemList = (
          <Link to={item.link}>
            <img className="h-5 min-w-[154px]" src={item.src} alt={item.name} />
          </Link>
        );
        break;
      case "language":
        itemList = (
          <p className="border-white rounded-[3px] py-[3px] px-[5px] border-[1px] border-solid hover:bg-white hover:text-tmdbDarkBlue">
            {item.name}
          </p>
        );
        break;
      case "icon":
        itemList = <FontAwesomeIcon name={item.name} size="lg" />;
        break;
      case "button":
        itemList = "login";
        break;
      default:
        itemList = (
          <Link to={item.link === null ? null : item.link}>
            <p>{item.name}</p>
          </Link>
        );
        break;
    }
    return itemList;
  };
  return (
    <ul className="flex gap-7 items-center">
      {items.map((item, index) => {
        return <li key={index}>{getItem(item)}</li>;
      })}
    </ul>
  );
};

export default NavBarList;
