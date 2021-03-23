import * as React from "react";
import "./Pattern.less";

export const Pattern: React.FC = () => {
  return (
    <div className="Pattern">
      <div className="Pattern__names">
        <div className="Pattern__names--name">Collection</div>
        <div className="Pattern__names--about">ONLINE NOW</div>
        <div className="Pattern__names--buttons">
          <div className="button1">Shop Men's</div>
          <div className="button2">Shop Women's</div>
          <div className="button3">Shop Goods</div>
        </div>
      </div>
    </div>
  );
};
