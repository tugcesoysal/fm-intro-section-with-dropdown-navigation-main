import { useState } from "react";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import toDo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

export default function Features() {
  const [openList, setOpenList] = useState(false);
  return (
    <div className="features">
      <p className="features_header">
        Features{" "}
        <span className="icon-arrow">
          {" "}
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
          <p className="navlist">
            <img src={toDo} />
            Todo List
          </p>
          <p className="navlist">
            <img src={calendar} />
            Calender
          </p>
          <p className="navlist">
            <img src={reminders} />
            Reminders
          </p>
          <p className="navlist">
            <img src={planning} />
            Planning
          </p>
        </div>
      )}
    </div>
  );
}
