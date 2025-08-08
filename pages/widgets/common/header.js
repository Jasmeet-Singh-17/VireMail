import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark viremail-nav">
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

                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sign in</a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a className="btn btn-viremail-action rounded-pill px-4 py-2" href="#">
                                        Download App
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>

        )
    }
}

export default Header
