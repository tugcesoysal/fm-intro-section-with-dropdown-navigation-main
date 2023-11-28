import { useState } from "react";
export default function Features() {
  const arrowDownSrc = "/images/icon-arrow-down.svg";
  const arrowUpSrc = "/images/icon-arrow-up.svg";
  const [openList, setOpenList] = useState(false);
  return (
    <div className="features">
      <p className="features_header">
        Features{" "}
        <span className="icon-arrow">
          {" "}
          <img
            src={openList ? arrowUpSrc : arrowDownSrc}
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
          <p className="navlist">
            <img src="/images/icon-todo.svg" />
            Todo List
          </p>
          <p className="navlist">
            <img src="/images/icon-calendar.svg" />
            Calender
          </p>
          <p className="navlist">
            <img src="/images/icon-reminders.svg" />
            Reminders
          </p>
          <p className="navlist">
            <img src="/images/icon-planning.svg" />
            Planning
          </p>
        </div>
      )}
    </div>
  );
}
