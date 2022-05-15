import React from "react";
import { Icon } from "@iconify/react";

function Banner() {
  return (
    <div className="banner">
      <h1 className="banner__hook">
        All Women Invited to Banging Box<span>ing Classes</span>
      </h1>
      <a href="https://www.instagram.com/stfeyes/" className="banner__btn btns">
        <Icon icon="ant-design:instagram-filled" color="white" height="38" />
        <h3>Check It Out</h3>
      </a>
    </div>
  );
}

export default Banner;
