import React from 'react';
import Header from './widgets/common/header';
import Footer from './widgets/common/footer';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const index = () => {
  return (
    <>
      <Header />

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
                <Link href="/privacy">
                  <img
                    src="/img/privacy.jpg"
                    alt="Privacy"
                    className="img"
                    width={500}
                    height={370}
                  />
                </Link>
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
        <marquee>
          <div className='white-line my-5'>
            <ul>
              <li>
                End-to-End-Encryption *
              </li>
              <li>
                Zero Access to User Data *
              </li>
              <li>x
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
        </marquee>
      </section>

      {/* // Features Box //  */}

      <section>
        <div className="container my-4">
          <h2 className="text-center">Popular Features</h2>
          <h1 className="text-center mb-4 fw-bold">Features We Provide</h1>
          <div className="boxes">
            <div className="box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M22 11.9996C21.1643 11.3719 20.1256 11 19 11C16.581 11 14.5633 12.7178 14.1 15H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V11.9996ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM22 17H23V22H15V17H16V16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16V17ZM20 17V16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V17H20Z"></path></svg>                <h4><b>Zero-Knowledge Encryption</b></h4>
              <p>
                We use state-of-the-art encryption technology to ensure that your emails can only be read by you and your intended recipients. Even we cannot decrypt your messages.
              </p>
            </div>

            <div className="box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M22 11.9996C21.1643 11.3719 20.1256 11 19 11C16.581 11 14.5633 12.7178 14.1 15H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V11.9996ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM22 17H23V22H15V17H16V16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16V17ZM20 17V16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V17H20Z"></path></svg>              <h4><b>Two-Factor Authentication</b></h4>
              <p>
                Add an extra layer of protection to your account with two-factor authentication (2FA). It ensures that only you can access your account, even if someone has your password.
              </p>
            </div>

            <div className="box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M22 11.9996C21.1643 11.3719 20.1256 11 19 11C16.581 11 14.5633 12.7178 14.1 15H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V11.9996ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM22 17H23V22H15V17H16V16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16V17ZM20 17V16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V17H20Z"></path></svg>                <h4><b>Self-Destructing Emails</b></h4>
              <p>
                Set your emails to automatically delete after a certain period, adding an extra layer of privacy to your most sensitive communications.
              </p>
            </div>

            <div className="box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M22 11.9996C21.1643 11.3719 20.1256 11 19 11C16.581 11 14.5633 12.7178 14.1 15H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V11.9996ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM22 17H23V22H15V17H16V16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16V17ZM20 17V16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V17H20Z"></path></svg>                <h4><b>Password Protection</b></h4>
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
          <div className="row g-4 my-5">
            {/* --- Left Column --- */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-5">
              <div className="left-wel">
                <Link href="/privacy">
                  <img
                    src="/img/privacy.jpg"
                    alt="Privacy"
                    className="img"
                    width={500}
                    height={370}
                  />
                </Link>
              </div>
            </div>

            {/* --- Right Column --- */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-7">
              <div className="right-wel p-4">
                <div className="h2 fw-bold mb-4">
                  Your Privacy, Secured with <br /> VireMail
                </div>
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
          </div>
        </div>
      </section>

      {/* // Download Section // */}

      <section>
        <div className="container my-4">
          <h2 className="text-center">Download The App </h2>
          <h1 className="text-center mb-4 fw-bold">Download VireMail for your System </h1>
          <div className="boxes ">
            <div className="box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M3.00098 5.47902L10.3778 4.4625V11.5902H3.00098V5.47902ZM3.00098 18.521L10.3778 19.5375V12.4982H3.00098V18.521ZM11.1894 19.646L21.001 21V12.4982H11.1894V19.646ZM11.1894 4.35402V11.5902H21.001V3L11.1894 4.35402Z"></path></svg>              <h4><b>On Windows </b></h4>
              <p>
                We use state-of-the-art encryption technology to ensure that your emails can only be read by you and your intended recipients. Even we cannot decrypt your messages.
              </p>
            </div>

            <div className="box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path></svg>              <h4><b>On Mac </b></h4>
              <p>
                Add an extra layer of protection to your account with two-factor authentication (2FA). It ensures that only you can access your account, even if someone has your password.
              </p>
            </div>

            <div className="box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path></svg>              <h4><b>On iOS</b></h4>
              <p>
                Set your emails to automatically delete after a certain period, adding an extra layer of privacy to your most sensitive communications.
              </p>
            </div>

            <div className="box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M6.38231 3.9681C7.92199 2.73647 9.87499 2 12 2C14.125 2 16.078 2.73647 17.6177 3.9681L19.0711 2.51472L20.4853 3.92893L19.0319 5.38231C20.2635 6.92199 21 8.87499 21 11V12H3V11C3 8.87499 3.73647 6.92199 4.9681 5.38231L3.51472 3.92893L4.92893 2.51472L6.38231 3.9681ZM3 14H21V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V14ZM9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9ZM15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9Z"></path></svg>              <h4><b>On Android </b></h4>
              <p>
                Protect not only your text-based messages but also any files or attachments that you send through our service. Every attachment is encrypted to the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>

      {/* // Boxes Section // */}
      <section>
        <div className="container my-4">
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

      {/* // FAQ Section //  */}

      <section className="faq-section my-5">
        <div className="container faq-container">
          <div className="text-center mb-5">
            <h1 className="text-light fw-bold mt-3">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="accordion" id="faqAccordion">

            <div className="card faq-card">
              <div
                className="card-header p-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                style={{ cursor: "pointer" }}
              >
                <div className="faq-question px-3 py-3 text-white d-flex justify-content-between align-items-center">
                  What is VireMail?
                </div>
              </div>
              <div id="collapseOne" className="collapse" data-bs-parent="#faqAccordion">
                <div className="card-body text-light">
                  VireMail is a secure and private email platform designed to protect your communication and data with end-to-end encryption.
                </div>
              </div>
            </div>

            <div className="card faq-card">
              <div
                className="card-header p-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{ cursor: "pointer" }}
              >
                <div className="faq-question px-3 py-3 text-white d-flex justify-content-between align-items-center">
                  How is VireMail different from other email services?
                </div>
              </div>
              <div id="collapseTwo" className="collapse" data-bs-parent="#faqAccordion">
                <div className="card-body text-light">
                  Unlike traditional email services, VireMail prioritizes privacy by not tracking user activity and providing complete encryption.
                </div>
              </div>
            </div>

            <div className="card faq-card">
              <div
                className="card-header p-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{ cursor: "pointer" }}
              >
                <div className="faq-question px-3 py-3 text-white d-flex justify-content-between align-items-center">
                  Is VireMail really free?
                </div>
              </div>
              <div id="collapseThree" className="collapse" data-bs-parent="#faqAccordion">
                <div className="card-body text-light">
                  Yes, VireMail offers a free plan with core features. Premium plans are available for advanced security and storage.
                </div>
              </div>
            </div>

            <div className="card faq-card">
              <div
                className="card-header p-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                style={{ cursor: "pointer" }}
              >
                <div className="faq-question px-3 py-3 text-white d-flex justify-content-between align-items-center">
                  How does it protect data?
                </div>
              </div>
              <div id="collapseFour" className="collapse" data-bs-parent="#faqAccordion">
                <div className="card-body text-light">
                  VireMail encrypts your emails and attachments, ensuring only you and the recipient can access the content.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>

      {/* // FeedBack Section // */}

      <section className="feedback-section py-5">
        <div className="container">
          <h2 className="text-center text-light mb-5 display-5">What People Say</h2>
          <div className='feedback-cards'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper" >
              <SwiperSlide>As of our last deployment all of our emails are using VireMail. We are loving the development experience of React Email <br></br> Adam Rankin </SwiperSlide>
              <SwiperSlide>Working with VireMail has been amazing. By using Webhooks, I\'m able to track email events and manage everything cleanly. <br></br> Taylor Facen</SwiperSlide>
              <SwiperSlide> VireMail is super easy to set up. Loving the modern approach the team is taking with supercharging email.
                <br></br> Brek Goin </SwiperSlide>
              <SwiperSlide>Emails now feel like a seamless part of our stack, and the support from the team has been outstanding. <br></br> Annie Zhao</SwiperSlide>
              <SwiperSlide> I never thought sending emails could be so elegant. It saved us hours of development time and works like a charm every time! <br></br> Michael Zhou</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>

      <Footer />

    </>
  )
}

export default index
