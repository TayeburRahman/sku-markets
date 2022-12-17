import { useForgotPasswordMutation } from 'features/auth/authAPI';
import { Link, useParams } from 'react-router-dom';
import logo from 'static/images/logo.svg';
import 'style/style.css';

const ResendEmail = () => {
    const { email } = useParams();
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

    const handelResendEmail = async () => await forgotPassword({ email });

    return (
        <div className="">
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-4 col-lg-5">
                            <div className="card">
                                <div
                                    className="card-header pt-4 pb-4 text-center" 
                                >
                                    <Link to="/">
                                        <span>
                                            <img
                                                src={logo}
                                                alt="logo"
                                                height={60}
                                                width={200}
                                            />
                                        </span>
                                    </Link>
                                </div>

                                <div className="card-body p-4">
                                    <div className="text-center w-75 m-auto">
                                        <h5 className="text-dark-50 text-center mt-0 fw-bold">
                                            Email Send To {email} Successfully
                                        </h5>
                                        <p className="text-muted mb-4">
                                            Please check your email for a link
                                            to reset your password.
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            onClick={handelResendEmail}
                                            disabled={isLoading}
                                            className="btn btn-primary w-md waves-effect waves-light"
                                        >
                                            Resend Email
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    <p className="text-muted">
                                        Back to
                                        <Link
                                            to="/login"
                                            className="text-muted ms-1"
                                        >
                                            <b>Log In</b>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer footer-alt">
                All Rights Reserved© 2022-2023
            </footer>
        </div>
    );
};

export default ResendEmail;
