import * as React from "react";
import "./Header.less";

export const Header: React.FC = () => {
  return (
    <div className="Header">
      <div className="Header__menu">
        <div className="Header__menu--items">
          <span>Men</span>
          <span>Women</span>
          <span>Goods</span>
          <span>Journal</span>
        </div>
        <div className="Header__menu--shops">
          <div className="search"></div>
          <div className="login"></div>
          <div className="heart"></div>
          <div className="shopping"></div>
          <div className="cart">Výběr(0)</div>
        </div>
      </div>
    </div>
  );
};
