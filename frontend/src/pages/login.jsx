import { useLoginMutation } from 'features/auth/authAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../components/login/login.css';

const Login = () => {
    const navigate = useNavigate();
    const [login, { isSuccess, isLoading }] = useLoginMutation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => login(data);


    useEffect(() => {
        if (isSuccess) {
            navigate('/dashboard');
        }
    }, [isSuccess, navigate]);

    return (
        <>
            <div class="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div class="container">
                    <div class="row justify-content-center ">
                        <div
                            class="col-xxl-4 col-lg-5 col-md-5 "
                            style={{ backgroundColor: '#f8f9fa !important' }}
                        >
                            <div
                                class="cardlogin"
                                style={{
                                    backgroundColor: '#f8f9fa !important',
                                }}
                            >
                                <div class="card-headerlogin pt-4 pb-4 text-center">
                                    <Link to='/'>
                                        <span>
                                            <img
                                                style={{
                                                    width: '200px',
                                                    height: '60px',
                                                }}
                                                src="images/SKU-Market-Logo.svg"
                                                alt="logo"
                                                height=""
                                            />
                                        </span>
                                    </Link>
                                </div>

                                <div
                                    class="card-body2 p-4"
                                    style={{
                                        backgroundColor: '#f8f9fa !important',
                                    }}
                                >
                                    <div class="text-center ">
                                        <h4 class="text-dark-50 text-center pb-0 fw-bold ">
                                            Sign In
                                        </h4>
                                        <p class="text-muted mb-4 fs-5">
                                            Enter your email address and
                                            password to access admin panel.
                                        </p>
                                    </div>

                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        style={{
                                            backgroundColor:
                                                '#f8f9fa !important',
                                        }}
                                    >
                                        <div class="mb-3">
                                            <label
                                                for="emailaddress"
                                                class="form-label fs-5"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                class="form-control"
                                                type="email"
                                                id="emailaddress"
                                                required=""
                                                placeholder="Enter your email"
                                                {...register('email', {
                                                    required:
                                                        'Email is required',
                                                })}
                                            />
                                        </div>

                                        <div class="mb-3">
                                            <Link
                                               
                                                class="text-muted float-end"
                                            >
                                                <small>
                                                    Forgot your password?
                                                </small>
                                            </Link>
                                            <label
                                                for="password"
                                                class="form-label fs-5"
                                            >
                                                Password
                                            </label>
                                            <div class="input-group input-group-merge">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    class="form-control"
                                                    placeholder="Enter your password"
                                                    {...register('password', {
                                                        required:
                                                            'Password is required',
                                                    })}
                                                />
                                                <div
                                                    class="input-group-text"
                                                    data-password="false"
                                                >
                                                    <span class="password-eye"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-3 mb-0 text-center">
                                            <button
                                                class="py-1 px-2 fs-5 text-white border-none"
                                                type="submit"
                                                style={{
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    color: 'white',
                                                    backgroundColor: '#1560FF',
                                                }}
                                                disabled={isLoading}
                                            >
                                                Log In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-12 text-center">
                                    <p class="text-muted">
                                        Don't have an account?{' '}
                                        <Link to="/Register"
                                            class="text-muted ms-1 fw-bold fs-5"
                                        >
                                            <b>Sign Up</b>
                                        </Link>
                                    </p>

                                    <h6 class="fw-normal text-muted fs-5">
                                        All rights reserved @ 2022 - 2023
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
