import React from 'react';
import Image from 'next/image';

const index = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark py-2 fs-5.5 align-item-baseline">
        <div className="container">
          <a className="navbar-brand fw-bold text-white fs-4" href="#">
            VireMail
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex justify-content-center flex-grow-1">
              <ul className="navbar-nav d-flex gap-1">
                <li className="nav-item">
                  <a className="nav-link px-3" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#">Resources</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#">Support</a>
                </li>
              </ul>
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-baseline gap-3">
              <li className="nav-item">
                <a className="nav-link me-3" href="#">Sign in</a>
              </li>
              <li className="nav-item ">
                <a className="btn btn-light text-dark rounded-pill px-4 py-2" href="#"><b>Download</b></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <section>
        <div className='container'>
          <div className="row">
            <div className="left-home">
              <h1 className="heading gradient-text">
                Keep Your Emails<br />Private, Secure, and<br />Encrypted!
              </h1>
              <p className='mx-3'>
                VireMail offers world class security and encryption, protecting your communication from prying eyes. Whether you are at home or on the go, enjoy peace of mind knowing your email stays private.
              </p>
              <button type="submit" className="form-button">
                Create Free Account
              </button>
            </div>

            <div className="right-home">
              <p className="form-heading">Get started with ad-free email.</p>
              <form className="form">
                <div className="radio-group">
                  <label><input type="radio" name="type" /> Business email</label>
                  <label><input type="radio" name="type" /> Personal email</label>
                </div>
                <input type="text" placeholder="name *" className="form-input" />
                <input type="email" placeholder="email *" className="form-input" />
                <input type="password" placeholder="password *" className="form-input" />
                <input type="tel" placeholder="phone number *" className="form-input" />
                <label className="checkbox-label">
                  <input type="checkbox" /> I agree to the Terms of Service and Privacy Policy.
                </label>
                <button type="submit" className="form-button">
                  Sign Up For Free <span className="arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>

      <section>
        <div className="container ">
          <div className="row align-items-center g-4 welcome">
            {/* Left Image */}
            <div className="col-lg-6 col-12  left-wel">
              <Image
                src="/img/privacy.jpg"
                alt="Privacy"
                className="img"
                width={500}
                height={350}
              />
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-12 right-wel p-4">
              <h2 className="fw-bold mb-4">
                Welcome to Mail Secure –<br />Protecting Your Privacy
              </h2>
              <p>
                In an age where personal data is constantly at risk, protecting your privacy has never been more important.
                At Mail Secure, we are dedicated to providing you with the most secure and private email experience possible.
                Whether you’re an individual looking to safeguard your personal conversations or a business ensuring
                confidentiality in professional communications, we’ve got you covered.
              </p>
              <p>
                Our mission is simple: to keep your emails safe from prying eyes. We believe that privacy is a fundamental right,
                and we’re committed to offering secure solutions without compromising ease of use.
              </p>
            </div>
          </div>
        </div>
        <div className='white-line'>
          <ul>
            <li>
              End-to-End-Encryption *
            </li>
            <li>
              Zero Access to User Data *
            </li>
            <li>
              Self-Destructing Emails *
            </li>
            <li>
              No Ads, No Tracking *
            </li>
            <li>
              User Friendly Interface *
            </li>
          </ul>
        </div>
      </section>






    </>
  )
}

export default index

