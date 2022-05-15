import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__className">Women's Boxing NW</div>
      <div className="nav__address">
        <p>Address</p>
        <div>
          <p>Unit 12 Sovereign Park</p>
          <p>Coronation Road</p>
          <p>Park Royal</p>
          <p>London</p>
          <p>NW10 7QP</p>
          <CopyToClipboard text="12 Sovereign Park London NW10 7QP">
            <h4 className="nav__copy">Click here to copy address</h4>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default Nav;
