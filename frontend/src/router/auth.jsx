import Loadable from 'components/Loadable';
import { lazy } from 'react';

const SignIn = Loadable(lazy(() => import('pages/authentication/SignIn')));
const SignUp = Loadable(lazy(() => import('pages/authentication/SignUp')));
const ResetPassword = Loadable(
    lazy(() => import('pages/authentication/ResetPassword'))
);
const ForgotPassword = Loadable(
    lazy(() => import('pages/authentication/ForgotPassword'))
);
const ResendEmail = Loadable(
    lazy(() => import('pages/authentication/ResendEmail'))
);

const auth = [
    { path: '/login', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/password/forgot', element: <ForgotPassword /> },
    { path: '/password/reset/:token', element: <ResetPassword /> },
    { path: '/email-send-to/:email', element: <ResendEmail /> },
];

export default auth;
