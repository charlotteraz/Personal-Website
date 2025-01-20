import React from 'react'
import "./qualification.css"
import { useState } from 'react';

const Qualifacation = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">BA in Computer Science</h3>
              <span className="qualification__subtitle">
                University of Alabama at Birmingham
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-brush-alt"></i> Minor in Art Studio
              </div>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> December 2022
              </div>
              <div className="qualification__calendar">
                <i className="uil uil-medal"></i> Magna Cum Laude
              </div>
            </div>
          </div>
          <div className="qualification__data_container">
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UI/UX Engineer</h3>
                <span className="qualification__subtitle">
                  Dragonfly Health
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Nov 2024 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                  General Dynamics Information Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> March 2023 - Nov 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Videographer</h3>
                <span className="qualification__subtitle">
                  University of Alabama at Birmingham
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sept - Dec 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifacation