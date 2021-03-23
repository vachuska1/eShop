import * as React from "react";
import "./Container.less";
import { Header } from "../Container/Header/Header";
import { Pattern } from "../Container/Pattern/Pattern";
import { Info } from "../Container/Info/Info";
import { Genders } from "../Container/Genders/Genders";
import { News } from "../Container/News/News";
import { Goods } from "./Goods/Goods";
import { Jacket } from "./Jacket/Jacket";
import { Ledge } from "./Ledge/Ledge";

export const Container: React.FC = () => {
  return (
    <div className="Container">
      <Header />
      <Pattern />
      <Info />
      <Genders />
      <News />
      <Goods />
      <Jacket />
      <Ledge />
    </div>
  );
};
