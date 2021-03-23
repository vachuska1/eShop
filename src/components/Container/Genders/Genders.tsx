import * as React from "react";
import "./Genders.less";

export const Genders: React.FC = () => {
  return (
    <div className="Genders">
      <div className="Genders__Mens">
        <div className="Genders__Mens--name">Mens</div>
      </div>
      <div className="Genders__Womens">
        <div className="Genders__Womens--name">Womens</div>
      </div>
    </div>
  );
};
