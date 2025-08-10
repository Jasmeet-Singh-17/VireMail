import React, { PureComponent } from 'react';

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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M19.3034 5.33716C17.9344 4.71103 16.4805 4.2547 14.9629 4C14.7719 4.32899 14.5596 4.77471 14.411 5.12492C12.7969 4.89144 11.1944 4.89144 9.60255 5.12492C9.45397 4.77471 9.2311 4.32899 9.05068 4C7.52251 4.2547 6.06861 4.71103 4.70915 5.33716C1.96053 9.39111 1.21766 13.3495 1.5891 17.2549C3.41443 18.5815 5.17612 19.388 6.90701 19.9187C7.33151 19.3456 7.71356 18.73 8.04255 18.0827C7.41641 17.8492 6.82211 17.5627 6.24904 17.2231C6.39762 17.117 6.5462 17.0003 6.68416 16.8835C10.1438 18.4648 13.8911 18.4648 17.3082 16.8835C17.4568 17.0003 17.5948 17.117 17.7434 17.2231C17.1703 17.5627 16.576 17.8492 15.9499 18.0827C16.2789 18.73 16.6609 19.3456 17.0854 19.9187C18.8152 19.388 20.5875 18.5815 22.4033 17.2549C22.8596 12.7341 21.6806 8.80747 19.3034 5.33716ZM8.5201 14.8459C7.48007 14.8459 6.63107 13.9014 6.63107 12.7447C6.63107 11.5879 7.45884 10.6434 8.5201 10.6434C9.57071 10.6434 10.4303 11.5879 10.4091 12.7447C10.4091 13.9014 9.57071 14.8459 8.5201 14.8459ZM15.4936 14.8459C14.4535 14.8459 13.6034 13.9014 13.6034 12.7447C13.6034 11.5879 14.4323 10.6434 15.4936 10.6434C16.5442 10.6434 17.4038 11.5879 17.3825 12.7447C17.3825 13.9014 16.5548 14.8459 15.4936 14.8459Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
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
