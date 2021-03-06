import * as React from "react";
import "./Genders.less";

export const Genders: React.FC = () => {
  return (
    // pojmenovavej classy malyma pismenama, je to takovej standart "genders, genders__mens, genders__mens--name"
    // podle me tyhle sekce budou asi stejny obe dve, tak proc mas rozdilny classy?
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
