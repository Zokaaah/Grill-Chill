import React from "react";
import banner from "../assets/images/bkgBanner.png";
import "../assets/banner.css";

const Banner = () => {
  return (
    <div>
      <div className="bannerContent">
        <div className="textContent">
          <h1 className="BannerTitle">
            Grill & Chill<span>.</span>
          </h1>
          <h2 className="BannerSubtitle">A melhor hamburgueria da cidade</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <button className="BtnContato">Faça seu pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
