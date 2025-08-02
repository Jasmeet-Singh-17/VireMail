import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid, faWindows } from '@fortawesome/free-brands-svg-icons';

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
        <div className='container '>
          <div className="row home my-5" >
            <div className="col col-lg-8 left-home ">
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

            <div className="col col-lg-4 right-home">
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
          <div className="row welcome my-5">
            <div className="col-lg-5 left-wel">
              <Image
                src="/img/privacy.jpg"
                alt="Privacy"
                className="img"
                width={500}
                height={370}
              />
            </div>

            <div className="col-lg-7 right-wel p-4">
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
      </section>

      <section>
        <div className='white-line my-5'>
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

      <section>
        <div className="container mt-4 mb-4">
          <h2 className="text-center">Popular Features</h2>
          <h1 className="text-center mb-4 fw-bold">Features We Provide</h1>
          <div className="boxes">
            <div className="box">
              <FontAwesomeIcon icon={faLock} size="2x" className="mb-2 icon" />
              <h4><b>Zero-Knowledge Encryption</b></h4>
              <p>
                We use state-of-the-art encryption technology to ensure that your emails can only be read by you and your intended recipients. Even we cannot decrypt your messages.
              </p>
            </div>

            <div className="box">
              <FontAwesomeIcon icon={faLock} size="2x" className="mb-2 icon" />
              <h4><b>Two-Factor Authentication</b></h4>
              <p>
                Add an extra layer of protection to your account with two-factor authentication (2FA). It ensures that only you can access your account, even if someone has your password.
              </p>
            </div>

            <div className="box">
              <FontAwesomeIcon icon={faLock} size="2x" className="mb-2 icon" />
              <h4><b>Self-Destructing Emails</b></h4>
              <p>
                Set your emails to automatically delete after a certain period, adding an extra layer of privacy to your most sensitive communications.
              </p>
            </div>

            <div className="box">
              <FontAwesomeIcon icon={faLock} size="2x" className="mb-2 icon" />
              <h4><b>Password Protection</b></h4>
              <p>
                Protect not only your text-based messages but also any files or attachments that you send through our service. Every attachment is encrypted to the highest standards.
              </p>
            </div>
          </div>

          {/* Centered Button */}
          <div className="button">
            <button type="submit" className="box-button">
              See All Features <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>

      <section>
        <div className="container ">
          <div className="row welcome my-5">
            <div className="col-lg-5 left-wel">
              <Image
                src="/img/privacy.jpg"
                alt="Privacy"
                className="img"
                width={500}
                height={350}
              />
            </div>

            <div className="col-lg-7 right-wel p-4">
              <h2 className="fw-bold mb-4">
                Your Privacy, Secured with <br /> VireMail
              </h2>
              <p>
                At VireMail, we believe that privacy is a fundamental hman right. Our VireMail email service is built from ground up with security in mind, ensuring that your emails remain confidential and protected.
              </p>
              <p>
                <b> Cross-Platform Access:</b> VireMail is available on iOS and Android, ensuring secure email access anytime, anywhere.
              </p>
              <h3>
                Join the Millions Who VireMail
              </h3>
            </div>
          </div>
        </div >
      </section>

      <section>
        <div className="container mt-4 mb-4">
          <h2 className="text-center">Download The App </h2>
          <h1 className="text-center mb-4 fw-bold">Download WireMail for your System </h1>
          <div className="boxes">
            <div className="box">
              <FontAwesomeIcon icon={faWindows} size="2x" className="mb-2 icon" />
              <h4><b>On Windows </b></h4>
              <p>
                We use state-of-the-art encryption technology to ensure that your emails can only be read by you and your intended recipients. Even we cannot decrypt your messages.
              </p>
            </div>

            <div className="box">
              <FontAwesomeIcon icon={faApple} size="2x" className="mb-2 icon" />
              <h4><b>On Mac </b></h4>
              <p>
                Add an extra layer of protection to your account with two-factor authentication (2FA). It ensures that only you can access your account, even if someone has your password.
              </p>
            </div>

            <div className="box">
              <FontAwesomeIcon icon={faApple} size="2x" className="mb-2 icon" />
              <h4><b>On iOS</b></h4>
              <p>
                Set your emails to automatically delete after a certain period, adding an extra layer of privacy to your most sensitive communications.
              </p>
            </div>

            <div className="box">
              <FontAwesomeIcon icon={faAndroid} size="2x" className="mb-2 icon" />
              <h4><b>On Android </b></h4>
              <p>
                Protect not only your text-based messages but also any files or attachments that you send through our service. Every attachment is encrypted to the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default index

