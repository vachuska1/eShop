import * as React from "react";
import "./Goods.less";

export const Goods: React.FC = () => {
  return (
    <div className="Goods">
      <div className="Goods__Good">
        <div className="Goods__Good--name">Goods</div>
      </div>
      <div className="Goods__Journal">
        <div className="Goods__Journal--name">Journal</div>
      </div>
    </div>
  );
};
