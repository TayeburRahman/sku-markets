import Loadable from 'components/Loadable';
import { lazy } from 'react';

import Brand from 'pages/Brand';
import Category from 'pages/Category';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/login';
import NotFound from 'pages/NotFound';
import Profile from 'pages/Profile';
import Register from 'pages/register';
import SKUMarkets from 'pages/SKUMarkets';
import Subscriptions from 'pages/Subscription';

const Home = Loadable(lazy(() => import('pages/Home')));
const About = Loadable(lazy(() => import('pages/About')));
const Contact = Loadable(lazy(() => import('pages/Contact')));
const ProductDetail = Loadable(lazy(() => import('pages/ProductDetail')));
const WatchList = Loadable(lazy(() => import('pages/WatchList')));
const Alerts = Loadable(lazy(() => import('pages/Alerts')));

const main = [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/profile', element: <Profile /> },
    { path: '/watchList', element: <WatchList /> },
    { path: '/alerts', element: <Alerts /> },
    { path: '/marketplace', element: <SKUMarkets /> },
    { path: '/brand', element: <Brand /> },
    { path: '/Category', element: <Category /> },
    { path: '/Login', element: <Login /> },
    { path: '/Register', element: <Register /> },
    { path: '/Subscriptions', element: <Subscriptions /> },
    { path: '/Dashboard', element: <Dashboard /> },
    {
        path: '/product/:productId',
        element: <ProductDetail />,
    },
    { path: '*', element: <NotFound /> },
];

export default main;
