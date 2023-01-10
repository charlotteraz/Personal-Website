import React from "react";
import { frontend } from "./Data";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      {frontend.map((item) => {
        return (
          <>
            <div className="skills__box">
              <h3 className="skills__name">{item.title}</h3>
              <div className="skills__bar">
                <span
                  className="skills__per"
                  style={{ width: `${item.percentage}` }}
                >
                  <span className="tooltip"></span>
                </span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Frontend;
