import { useResetPasswordMutation } from 'features/auth/authAPI';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import logo from 'static/images/logo.svg';
import 'style/style.css';

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [resetPassword, { isSuccess }] = useResetPasswordMutation();
    let { from } = location.state || { from: { pathname: '/' } };

    const onSubmit = async (data) =>
        await resetPassword({
            password: data.password,
            confirmPassword: data.password,
            token: token,
        });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        isSuccess && navigate(from, { replace: true });
    }, [from, isSuccess, navigate]);

    return (
        <div className="authentication-bg">
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-4 col-lg-5">
                            <div className="card">
                                <div
                                    className="card-header pt-4 pb-4 text-center bg-primary"
                                    style={{ background: '#f8f9fa !important' }}
                                >
                                    <a href="index.html">
                                        <span>
                                            <img
                                                src={logo}
                                                alt="logo"
                                                height={60}
                                                width={200}
                                            />
                                        </span>
                                    </a>
                                </div>

                                <div className="card-body p-4">
                                    <div className="text-center w-75 m-auto">
                                        <i className="fa-solid fa-user"></i>
                                        <h4 className="text-dark-50 text-center mt-3 fw-bold">
                                            Hi ! Shanto
                                        </h4>
                                        <p className="text-muted mb-4">
                                            Enter your password to access the
                                            admin.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="password"
                                                className="form-label"
                                            >
                                                Password
                                            </label>
                                            <input
                                                className="form-control"
                                                type="password"
                                                placeholder="Enter your password"
                                                {...register('password', {
                                                    required:
                                                        'Password is required',
                                                })}
                                            />
                                            {errors?.password && (
                                                <span className="text-danger">
                                                    {errors?.password?.message}
                                                </span>
                                            )}
                                        </div>

                                        <div className="mb-0 text-center">
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                            >
                                                Log In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    <p className="text-muted">
                                        Not you? return
                                        <a
                                            href="pages-login.html"
                                            className="text-muted ms-1"
                                        >
                                            <b>Sign In</b>
                                        </a>
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

export default ResetPassword;
