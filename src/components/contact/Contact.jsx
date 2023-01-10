import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                charlottekyleraz@gmail.com
              </span>

              {/* <a href="mailto:charlottekyleraz@gmail.com.com" className="contact__button">Write me{""}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a> */}
            </div>

            <div className="contact__card">
              <i className="bx bxs-phone contact__card-icon"></i>
              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">+1 205-237-1668</span>

              {/* <a href="" className="contact__button">Write me{""}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a> */}
            </div>

            <div className="contact__card">
              <a
                href="https://www.linkedin.com/in/charlotteraz/"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin-square contact__card-icon"></i>
              </a>

              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">@charlotteraz</span>

              {/* <a href="" className="contact__button">Write me{""}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact