import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import SLogo from '../../assets/images/noon-saudi.svg';
import '../../pages/home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { logout } from 'features/auth/authSlice';
import { addMessage } from 'features/message/messageSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = useAuth();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(
            addMessage({
                message: 'Log Out successful',
                type: 'error',
            })
        );
        dispatch(logout());
    };

    return (
        <div>
            <nav className="navbar shadow-none navbar-expand-lg pb-lg-3 pt-0 navbar-dark background header-top d-flex flex-column">
                <div class="container-fluid d-none d-md-block">
                    <div class="row">
                        <div class="col-md-12 d-flex header-top-line">
                            <div class="marquee-items d-flex align-items-center">
                                <div class="marquee-4 pe-2">
                                    <p>Markets Live SKUs:</p>
                                </div>
                                <div class="marquee-2">
                                    <p>380,000</p>
                                </div>
                            </div>

                            <div class="marquee-items d-flex align-items-center">
                                <div class="marquee-4 pe-2">
                                    <p>Fulfilled by Stores:</p>
                                </div>
                                <div class="marquee-2">
                                    <p>280,000</p>
                                </div>
                            </div>

                            <div class="marquee-items d-flex align-items-center">
                                <div class="marquee-4 pe-2">
                                    <p>Fulfilled by MP:</p>
                                </div>
                                <div class="marquee-2">
                                    <p>100,000</p>
                                </div>
                            </div>

                            <div class="marquee-items d-flex ">
                                <div class="marquee-4 pe-2">
                                    <p>Top Dominance Market:</p>
                                </div>
                                <div class="marquee-2">
                                    <img
                                        src={SLogo}
                                        style={{ width: '40px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container pt-3">
                    <a href="/" class="navbar-brand me-lg-5">
                        <img
                            src="images/SKU-Market-Logo.svg"
                            alt="logo"
                            class="logo-dark amdlogo"
                            height="22"
                        />
                    </a>

                    <button
                        class="navbar-toggler"
                        style={{ borderColor: '#1562FF' }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i
                            class="mdi mdi-menu"
                            style={{ color: '#1562FF' }}
                        ></i>
                    </button>

                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavDropdown"
                        style={{ paddingLeft: '8%' }}
                    >
                        <ul class="navbar-nav me-auto align-items-center amd-menu">
                            <li class="nav-item mx-lg-1">
                                <a class="nav-link active" href="#home">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item mx-lg-1">
                                <a class="nav-link" href="#sku">
                                    SKU Markets
                                </a>
                            </li>
                            <li class="nav-item mx-lg-1">
                                <a class="nav-link" href="#how">
                                    How it works!
                                </a>
                            </li>
                            <li class="nav-item mx-lg-1">
                                <a class="nav-link" href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <li class="nav-item mx-lg-1">
                                <a class="nav-link" href="#price">
                                    Pricing Plans
                                </a>
                            </li>
                            <li class="nav-item mx-lg-1">
                                <a class="nav-link" href="#contact">
                                    Contact Us
                                </a>
                            </li>
                        </ul>

                        <ul class="navbar-nav ms-auto align-items-center">
                            <li>
                                <div class="">
                                    <button
                                        class="dropbtn bg-white"
                                        dir="rtl"
                                        lang="ar"
                                        style={{ color: 'black' }}
                                    >
                                        العربية
                                    </button>
                                </div>
                            </li>
                            <li class="nav-item me-0 ">
                                {!user.email ? (
                                    <Link
                                        to="/login"
                                        class="login-icon p-2 login btn btn-sm btn-light rounded-pill d-none d-lg-inline-flex"
                                    >
                                        Login
                                    </Link>
                                ) : (
                                    <button
                                        onClick={handleLogout}
                                        class="login-icon p-2 login btn btn-sm btn-light rounded-pill d-none d-lg-inline-flex"
                                    >
                                        Log Out
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
