import React from 'react'
import { backend } from './Data';

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>

      {backend.map((item) => {
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
}

export default Backend