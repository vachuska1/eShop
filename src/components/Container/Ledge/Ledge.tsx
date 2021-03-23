import * as React from "react";
import "./Ledge.less";

export const Ledge: React.FC = () => {
  return (
    <div className="Ledge">
      <div className="Ledge__left">
        <div className="Ledge__left--info">Info</div>
        <div className="Ledge__left--sign">
          <div className="icon"></div>
          <div className="name">Sign in</div>
        </div>
        <div className="Ledge__left--help">
          <div className="icon"></div>
          <div className="name">Help Centre</div>
        </div>
        <div className="Ledge__left--live">
          <div className="icon"></div>
          <div className="name">Live Chat</div>
        </div>
        <div className="Ledge__left--carrer">
          <div className="icon"></div>
          <div className="name">Carrers</div>
        </div>
        <div className="Ledge__left--contact">
          <div className="icon"></div>
          <div className="name">Contact</div>
        </div>
        <div className="Ledge__left--icons">
          <div className="instagram"></div>
          <div className="pinterest"></div>
          <div className="youtube"></div>
          <div className="facebook"></div>
        </div>
        <div className="Ledge__left--button">
          <div className="text">Change Store Location</div>
        </div>
        <div className="Ledge__left--copyright">
          Copyright ©2021
          <br />
          Terms & Conditions
          <br />
          Privacy & Cookies
          <br />
          Site by Shopify Plus Agency - Digital Cake
          <br />
          <br />
          Clark & Timms Ltd.
          <br />
          Company no. 08442586
        </div>
      </div>
      <div className="Ledge__right">
        <div className="Ledge__right--info">Keep in touch</div>
        <div className="Ledge__right--sign">I'm interested in:</div>
        <div className="Ledge__right--mens">
          <input className="mensinput" type="checkbox" />
          <div className="mensname">Men's</div>
        </div>
        <div className="Ledge__right--womens">
          <input className="womensinput" type="checkbox" />
          <div className="womensname">Women's</div>
        </div>
        <div className="Ledge__right--email">
          <div className="name">Enter your email here...</div>
          <div className="icon"></div>
        </div>
      </div>
    </div>
  );
};
