import * as React from "react";
import "./Info.less";

export const Info: React.FC = () => {
  return (
    <div className="Info">
      <div className="Info__content">
        <div className="Info__content--left">
          // tady je dost divna struktura, mel bys drzet ten BEM - najednou tu mas leftlogo, leftname a dalsi / trochu zvlastni na precteni
          <div className="leftlogo"></div>
          <div className="leftname">15% Off First Order</div>
          <div className="leftdescription">
            Subscribe to our mailing list <br /> for 15% off your first order.
          </div>
        </div>
        <div className="Info__content--center">
          <div className="centerlogo"></div>
          <div className="centername">30 Day Returns</div>
          <div className="centerdescription">
            Shop with certainty with a <br /> 30 day returns policy.
          </div>
        </div>
        <div className="Info__content--right">
          <div className="rightlogo"></div>
          <div className="rightname">Worldwide Shipping</div>
          <div className="rightdescription">
            Free worldwide shipping on <br /> all orders over £50.
          </div>
        </div>
      </div>
    </div>
  );
};
