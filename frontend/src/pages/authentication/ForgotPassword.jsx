import { useForgotPasswordMutation } from 'features/auth/authAPI';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'static/images/logo.svg';
import 'style/style.css';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [forgotPassword, { isSuccess }] = useForgotPasswordMutation();

    const onSubmit = async (data) => {
        setEmail(data.email);
        await forgotPassword(data);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        isSuccess && navigate(`/email-send-to/${email}`, { replace: true });
    }, [isSuccess, navigate, email]);

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
                                        <h4 className="text-dark-50 text-center mt-0 fw-bold">
                                            Reset Password
                                        </h4>
                                        <p className="text-muted mb-4">
                                            Enter your email address and we'll
                                            send you an email with instructions
                                            to reset your password.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="email0address"
                                                className="form-label"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                placeholder="Enter your email"
                                                {...register('email', {
                                                    required:
                                                        'Email is required',
                                                })}
                                            />
                                            {errors.email && (
                                                <span className="text-danger">
                                                    {errors.email.message}
                                                </span>
                                            )}
                                        </div>

                                        <div className="mb-0 text-center">
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                            >
                                                Reset Password
                                            </button>
                                        </div>
                                    </form>
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

export default ForgotPassword;
