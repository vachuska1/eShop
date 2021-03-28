import * as React from "react";
import "./Jacket.less";

export const Jacket: React.FC = () => {
  return (
    <div className="Jacket">
      <div className="Jacket__image"></div>
      <div className="Jacket__description">
        <div className="Jacket__description--heading">
          Something to
          // ty br tagy se uz moc dneska nepouzivaji, ale nic proti nicemu
          <br /> Write Home
          <br /> About
        </div>
        <div className="Jacket__description--title">New: The Tour Jacket</div>
        <div className="Jacket__description--text">
          Not only is our Tour Jacket pattern
          <br /> based on the classic 1950’s-'60s
          <br /> mechanic jacket, but the hand-drawn
          <br /> artwork print that lines the inside was
          <br /> influenced by the same era. The 'Aloha'
          <br /> style drawings were inspired by
          <br /> vintage Hawaiian radio & postcards
          <br /> from our Creative Director's personal
          <br /> collection.
        </div>
        <div className="Jacket__description--button">
          <div className="name">Discover The Tour Jacket</div>
        </div>
      </div>
    </div>
  );
};
