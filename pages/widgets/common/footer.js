import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <footer className="text-light mt-5 pt-5">
                    <div className="container px-5">
                        <div className="row g-4">

                            <div className="col-12 col-lg-3 mb-3 mb-lg-0">
                                <h3 className="fw-bold">VireMail</h3>
                                <p className="text-white-50 mt-2">Secure communication for the modern world.</p>
                            </div>

                            <div className="col-6 col-lg-2">
                                <h5 className="fw-bold">Links</h5>
                                <ul className="list-unstyled pt-2">
                                    <li className="py-1"><a href="#" className="foot-link">Contact Us</a></li>
                                    <li className="py-1"><a href="#" className="foot-link">Blog</a></li>
                                    <li className="py-1"><a href="#" className="foot-link">Docs</a></li>
                                    <li className="py-1"><a href="#" className="foot-link">Support</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-lg-2">
                                <h5 className="fw-bold">Get VireMail</h5>
                                <ul className="list-unstyled pt-2">
                                    <li className="py-1"><a href="#" className="foot-link">iOS</a></li>
                                    <li className="py-1"><a href="#" className="foot-link">MacOS</a></li>
                                    <li className="py-1"><a href="#" className="foot-link">Android</a></li>
                                    <li className="py-1"><a href="#" className="foot-link">Web</a></li>
                                    <li className="py-1"><a href="#" className="foot-link">VireMail VPN</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-lg-2">
                                <h5 className="fw-bold">Company</h5>
                                <ul className="list-unstyled pt-2">
                                    <li className="py-1"><a href="#" className="foot-link">Our Story</a></li>
                                    <li className="py-1"><a href="#" className="foot-link">Careers</a></li>
                                    <li className="py-1"><a href="#" className="foot-link">Press & Media</a></li>
                                    <li className="py-1"><a href="#" className="foot-link">Carousels</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-lg-3">
                                <h5 className="fw-bold">Social Media</h5>
                                <div className="social-media pt-2">
                                    <a href="#" className="text-light fs-4 me-3"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="#" className="text-light fs-4 me-3"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="#" className="text-light fs-4 me-3"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="#" className="text-light fs-4"><FontAwesomeIcon icon={faGithub} /></a>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-5 mb-4" />

                        <div className="d-sm-flex justify-content-between py-1">
                            <p>2025 © VireMail. All Rights Reserved.</p>
                            <p>
                                <a href="#" className="text-light text-decoration-none pe-4">Terms of use</a>
                                <a href="#" className="text-light text-decoration-none">Privacy policy</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer
