import * as React from "react";
import "./News.less";

export const News: React.FC = () => {
  return (
    <div className="News">
      <div className="News__Name">New Arrivals</div>
      <div className="News__Items">
        <div className="News__Items--1"></div>
        <div className="News__Items--2"></div>
        <div className="News__Items--3"></div>
        <div className="News__Items--4"></div>
        <div className="News__Items--5"></div>
        <div className="News__Items--6"></div>
        <div className="News__Items--7"></div>
      </div>
    </div>
  );
};
