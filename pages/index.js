import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid, faWindows } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'



const index = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    swipeToSlide: false,
    draggable: false,
  };

  const feedbacks = [
    {
      name: 'Adam Rankin',
      feedback:
        'As of our last deployment all of our emails are using VireMail. We are loving the development experience of React Email...',
    },
    {
      name: 'Taylor Facen',
      feedback:
        'Working with VireMail has been amazing. By using Webhooks, I\'m able to track email events and manage everything cleanly.',
    },
    {
      name: 'Brek Goin',
      feedback:
        'VireMail is super easy to set up. Loving the modern approach the team is taking with supercharging email.',
    },
    {
      name: 'Annie Zhao',
      feedback:
        'Emails now feel like a seamless part of our stack, and the support from the team has been outstanding.',
    },
    {
      name: 'Michael Zhou',
      feedback:
        "I never thought sending emails could be so elegant. It saved us hours of development time and works like a charm every time!",
    },
  ];

  return (
    <>
      {/* // Navbar // */}
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

      {/* // Home //  */}
      <section>
        <div className='container'>
          <div className="row g-4 my-4">
            {/* --- Left Column --- */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-8">
              <div className="left-home h-100">
                <h1 className="heading">
                  Keep Your Emails<br />Private, Secure, and<br />Encrypted!
                </h1>
                <p>
                  VireMail offers world class security and encryption, protecting your communication from prying eyes. Whether you are at home or on the go, enjoy peace of mind knowing your email stays private.
                </p>
                <button type="submit" className="form-button">
                  Create Free Account
                </button>
              </div>
            </div>

            {/* --- Right Column --- */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="right-home h-100">
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
        </div>
      </section>

      <div className="horizontal-line"></div>

      {/* //Welcome Section // */}
      <section>
        <div className="container ">
          <div className="row g-4 my-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-5">
              <div className="left-wel">
                <Image
                  src="/img/privacy.jpg"
                  alt="Privacy"
                  className="img"
                  width={500}
                  height={370} />
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-7 ">
              <div className="right-wel p-4">
                <div className="h2 fw-bold mb-4">
                  Welcome to VireMail –<br />Protecting Your Privacy
                </div>
                <p>
                  In an age where personal data is constantly at risk, protecting your privacy has never been more important.
                  At VireMail, we are dedicated to providing you with the most secure and private email experience possible.
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
        </div>
      </section>

      {/* //White Line // */}
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

      {/* // Features Box //  */}

      <section>
        <div className="container my-4">
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

          <div className="button">
            <button type="submit" className="box-button">
              See All Features <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>

      {/* // Privacy Section // */}

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
        <div className="container mt-4">
          <h2 className="text-center">Download The App </h2>
          <h1 className="text-center mb-4 fw-bold">Download VireMail for your System </h1>
          <div className="boxes mb-5">
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

      <section>
        <div className="container mt-4 mb-4">
          <h2 className="text-center"> Why VireMail </h2>
          <h1 className="text-center mb-4 fw-bold"> Why Choose Us VireMail</h1>
          <div className="top-boxes">
            <div className="tbox">
              <h4><b>UnMatched Privacy & Security  </b></h4>
              <p>
                At VireMail, privacy isn’t just an option—it’s our core mission. Built with end-to-end encryption and zero-access architecture, MailSecure ensures that your emails are for your eyes only. Not even ProtonMail can access your messages, giving you the peace of mind that your communication is truly private.
              </p>
            </div>

            <div className="tbox">
              <h4><b>Swiss-Based Protection </b></h4>
              <p>
                VireMail is headquartered in Switzerland, a country known for its strict privacy laws. Your data is safeguarded by Swiss neutrality and strong legal protections, ensuring your sensitive information stays secure and beyond the reach of intrusive governments and surveillance.


              </p>
            </div>
          </div>
          <div className='bottom-boxes'>
            <div className="bbox">
              <h4><b>Open Source and Transparent</b></h4>
              <p>
                We believe in transparency. VireMail’s software is open source, meaning anyone can review and audit our code. We regularly undergo independent security audits, so you can trust that our encryption is effective and trustworthy.
              </p>
            </div>

            <div className="bbox">
              <h4><b>Trusted by Millions Worldwide </b></h4>
              <p>
                Millions of people, professionals, and organizations around the world trust MailSecure to keep their communications safe. Whether you’re an individual user or a business, ProtonMail offers the privacy tools you need to protect what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section my-5">
        <div className="container faq-container">
          <div className="text-center mb-5">
            <h1 className="text-light fw-bold mt-3">
              Frequently asked <br /> questions
            </h1>
          </div>

          <div className="accordion" id="faqAccordion">
            {/* FAQ Item */}
            {[
              {
                id: "One",
                question: "What is WireMail",
                answer:
                  "VireMail is a secure and private email platform designed to protect your communication and data with end-to-end encryption.",
              },
              {
                id: "Two",
                question: "How is VireMail different from other email Services",
                answer:
                  "Unlike traditional email services, VireMail prioritizes privacy by not tracking user activity and providing complete encryption.",
              },
              {
                id: "Three",
                question: "Is VireMail really free ?",
                answer:
                  "Yes, VireMail offers a free plan with core features. Premium plans are available for advanced security and storage.",
              },
              {
                id: "Four",
                question: "How it protects Data ?",
                answer:
                  "VireMail encrypts your emails and attachments, ensuring only you and the recipient can access the content.",
              },
            ].map(({ id, question, answer }) => (
              <div className="card faq-card" key={id}>
                <div
                  className="card-header p-0"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${id}`}
                  style={{ cursor: "pointer" }}
                >
                  <div className="faq-question px-3 py-3 text-white">{question}</div>
                </div>
                <div
                  id={`collapse${id}`}
                  className="collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="card-body text-light">{answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>

      <section className="feedback-section py-5">
        <div className="container">
          <h2 className="text-center text-light mb-4 display-5">What People Say</h2>
          <Slider {...settings}>
            {feedbacks.map((item, index) => (
              <div key={index} className="px-3">
                <div className="card text-light p-4 h-100 rounded-4">
                  <p className="mb-4 fs-5">"{item.feedback}"</p>
                  <h6 className="text-end text-white-50 mb-0">— {item.name}</h6>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <div className="horizontal-line"></div>


      <footer className="text-light mt-5 pt-5">
        <div className="container px-5">
          <div className="row">
            <div className="col-6 col-lg-4">
              <h3 className="fw-bold">VireMail</h3>
              <p className="pt-2">
                321, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="col foot-link">
              <h4>Links </h4>
              <ul className="list-unstyled pt-2">
                <li className="py-1">Contact Us </li>
                <li className="py-1">Blog </li>
                <li className="py-1">Docs</li>
                <li className="py-1">Support </li>
              </ul>
            </div>
            <div className="col foot-link">
              <h4>Get VireMail</h4>
              <ul className="list-unstyled pt-2">
                <li className="py-1">iOS</li>
                <li className="py-1">MacOS</li>
                <li className="py-1">Android</li>
                <li className="py-1">Web</li>
                <li className="py-1">VireMail VPN</li>

              </ul>
            </div>
            <div className="col foot-link">
              <h4>Company</h4>
              <ul className="list-unstyled pt-2">
                <li className="py-1">Our Story</li>
                <li className="py-1">Careers</li>
                <li className="py-1">Press & Media </li>
                <li className="py-1">Carousels</li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 text-lg-end">
              <h4>Social Media Links</h4>
              <div className="social-media pt-2">
                <a href="#" className="text-light fs-2 me-3">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="text-light fs-2 me-3">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-light fs-2 me-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="text-light fs-2">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-sm-flex justify-content-between py-1">
            <p>2025 © VireMail. All Rights Reserved. </p>
            <p>
              <a href="#" className="text-light text-decoration-none pe-4">
                Terms of use
              </a>
              <a href="#" className="text-light text-decoration-none">
                {" "}
                Privacy policy
              </a>
            </p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default index

