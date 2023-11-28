import { useState } from "react";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";

export default function Company() {
  const [openList, setOpenList] = useState(false);
  return (
    <div className="company">
      <p className="company_header">
        Company{" "}
        <span className="icon-arrow">
          <img
            src={openList ? arrowUp : arrowDown}
            alt="icon arrow down"
            width={15}
            onClick={() => {
              setOpenList(!openList);
            }}
          />
        </span>
      </p>
      {openList && (
        <div className="navlist_div">
          <p className="navlist">History</p>
          <p className="navlist">Our Team</p>
          <p className="navlist">Blog</p>
        </div>
      )}
    </div>
  );
}
