import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitable buying
          and selling of product or services over the internet serves as a
          virtual marketplace where bisiness and indivice showcase their
          products, interact with customers, and conducation transactions
          without.
        </p>
        <p>
          E-commerce websites typically display products or sevices detailed
          descriptions, images, prices, and any available .
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
