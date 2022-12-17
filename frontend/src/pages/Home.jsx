import Marquee from 'components/common/Marquee';
import Faq from 'components/Home/Faq';
import Footer from 'components/Home/Footer';
import Header from 'components/Home/Header';
import Pricing from 'components/Home/Pricing';
import ComparebleTable from 'components/landingPage/compableTable';
import { Link } from 'react-router-dom';
import heroJumpLgo from '../assets/images/logo2.png';
import Pluginimg from '../assets/images/plugin.png';
import GifHero from '../assets/images/Web GIF 3_2.gif';
import web01 from '../assets/images/Web-01.png';
import Work1 from '../assets/images/work-1.png';
import Work2 from '../assets/images/work-2.png';
import Work3 from '../assets/images/work-3.png';
import './home.css';

const Home = () => {
    
    return (
        <div className="bg-white">
            <Header />
            <div class="hero mt-5" style={{ paddingBottom: '75px' }} id="home">
                <div class="container-fluid ">
                    <div class="container">
                        <div class="row hero-main">
                            <div class="col-md-6 d-flex flex-wrap align-content-center hero-left text">
                                <a
                                    href=""
                                    className="d-flex align-items-center pb-3"
                                >
                                    {' '}
                                    <img
                                        src={heroJumpLgo}
                                        alt=""
                                        width="15px"
                                        height="15px"
                                        style={{ color: '#0052F' }}
                                    />{' '}
                                    <Link to='/Register' class="text-primary fs-6 p-0 pl-0 mb-0 mx-1">
                                        Jump start your portfolio{' '}
                                    </Link>
                                    <i
                                        class="fa-solid fa-arrow-right"
                                        style={{ color: '#0052ff' }}
                                    ></i>
                                </a>
                                <div>
                                    <h1 className="text-black fw-bold">
                                        A Complete Insights, Analytics,
                                        Statistics & Managemet Platform Built to
                                        Supercharge Your Ecommerce
                                    </h1>
                                    <h6 class="hero-title text-black">
                                        Track it, Get Notified, Added it, Manage
                                        to Sell it to grow your Ecommerce
                                    </h6>

                                    <p className="text-black">
                                        SKU Markets is the easiest place to
                                        scale your Ecommerce
                                    </p>

                                    <h6 class="text-black">
                                        Sign up and get started today
                                    </h6>
                                </div>
                                <button className="py-1 px-4">
                                    <Link to="/Register" class="fs-5">
                                        Sign Up
                                    </Link>
                                </button>
                            </div>
                            <div class="col-md-6 hero-right text-right">
                                <img src={GifHero} alt="" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Marquee class="fs-6 pb-5" />
            <div
                class="target section-padding "
                style={{ marginTop: '90px' }}
                id="target"
            >
                <div class="container-fluid">
                    <div class="container">
                        <div class="row text-center">
                            <div class="com-md-12">
                                <div class="row">
                                    <div class="col-md-7 d-flex align-items-start flex-column">
                                        <h3>
                                            Targeted Countries, Marketplaces,{' '}
                                            <br />
                                            and Sellers benefits our services
                                        </h3>
                                        <p>
                                            Maximize the Efficiency of your
                                            Ecommerce Business Cross Countries
                                            and Categories!
                                        </p>
                                    </div>
                                    ``
                                    <div class="col-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Analysis section --> */}
            <div class="analysis pt-5 " id="sku">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 d-flex flex-wrap align-content-center sku-left">
                                <h3 class="text-black">
                                    SKU Markets Insights, Analytics & Statistics
                                </h3>
                                <p class="text-black fs-6">
                                    Top selling and trending SKUs on the KSA,
                                    UAE and Egypt online marketplaces and Price
                                    List by Market top Ecommerce Platforms such
                                    as Amazon and Noon. List of top Live SKU
                                    prices of 10,000,000 different online SKUs.
                                    A complete list with SKU markets rankings,
                                    trade volume and value charts as of today.
                                </p>
                                <Link to="/Dashboard" onClick={()=>window.scrollTo(0,0)}>
                                    <button>Try SKU Markets</button>
                                </Link>
                            </div>
                            <div class="col-md-6 hero-right text-right">
                                <img src={web01} alt="" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ComparebleTable />
            {/* <ComparableTrade /> */}

            <div class="work section-padding" id="how">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row work-top text-center section-heading">
                            <h3 className="text-black">
                                How SKU Markets Solution works <br /> and help
                                your business?
                            </h3>
                        </div>
                        <div class="row  text-center">
                            <div class="col-md-4">
                                <div class="work-items d-flex flex-column flex-lg-row align-items-center">
                                    <img
                                        src={Work1}
                                        alt=""
                                        width="100px"
                                        height="100px"
                                    />
                                    <p className="text-black pt-2 pt-lg-0">
                                        Simply we provide you with the top
                                        ranked SKUs cross online marketplaces,
                                        countries and Categories even your SKUs
                                        to manage and control it cross sales
                                        channels and know the opportunities also
                                        your competitors stores
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="work-items d-flex flex-column flex-lg-row align-items-center">
                                    <img
                                        src={Work2}
                                        alt=""
                                        width="100px"
                                        height="100px"
                                    />
                                    <p className="text-black pt-2 pt-lg-0">
                                        We measure it for you to make it ready
                                        to build your decisions on the actual
                                        situation of marketplaces. We also
                                        preparing your actions to control,
                                        analysis and interact to scale your
                                        Ecommerce
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="work-items d-flex flex-column flex-lg-row align-items-center">
                                    <img
                                        src={Work3}
                                        alt=""
                                        width="100px"
                                        height="100px"
                                    />
                                    <p className="text-black pt-2 pt-lg-0">
                                        Keep it on our bots to notify you by our
                                        automated WhatsApp alerts to speed up
                                        your actions & save efforts finding good
                                        in heath SKUs to expand your Ecommerce
                                        and manage it to your sales channels
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- plugins starts here --> */}

            <div class="plugin section-padding">
                <div class="">
                    <div class="container">
                        <div class="row text-center d-flex flex-column flex-lg-row justify-center align-items-center">
                            <div class="col-md-5">
                                <h5
                                    style={{ fontSize: '30px' }}
                                    class="text-black"
                                >
                                    Plugins
                                </h5>
                                <p
                                    style={{ fontSize: '13px' }}
                                    class="text-black "
                                >
                                    Our SKU Markets platform plugs easily into
                                    some of the most popular Ecommerce platforms
                                    & shopping carts in the world
                                </p>
                                <p
                                    style={{ fontSize: '13px' }}
                                    class="text-black "
                                >
                                    These plugins help you get started without
                                    any programming needed. You can use the
                                    plugins for a seamless integration that
                                    easily allows you to add on your multi
                                    channels to take control of the most major
                                    Ecommerce & Shopping Carts platforms.
                                    Everything your Ecommerce needs to succeed.
                                </p>
                            </div>
                            <div
                                class="col-md-3 d-flex align-items-center justify-content-center"
                                style={{ marginTop: '154px', fontSize: '13px' }}
                            >
                                <div class="find">
                                    <div class="find-top d-flex justify-content-between">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        {/* <!-- <span style="color: #B7B7B7;">Find your platform</span> --> */}
                                        <input
                                            type="text"
                                            placeholder="Find your Platform"
                                            class="platform-box"
                                        />
                                    </div>
                                    <div class="find-bottom">
                                        <span class="text-primary">
                                            Learn about integration
                                        </span>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex align-items-center">
                                <img
                                    src={Pluginimg}
                                    alt=""
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* why sku markets setion  */}

            <div class=" section-padding" id="why">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row solution-top text-center section-heading">
                            <h3 class="text-black">Why SKU Markets Solution</h3>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="solution-items">
                                    <img src="images/growth-icon.png" />
                                    <h4>Increase Sales & Revenue</h4>
                                    <p>
                                        Save 90% of the time searching for
                                        offers in the MarketPlaces to check for
                                        new opportunities to expand your
                                        selection, preparing your new SKUs 10X
                                        of your competitors to achieve high
                                        sales
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="solution-items">
                                    <img
                                        src="images/low-price (1).png"
                                        alt=""
                                    />
                                    <h4>Reduce Operational Costs</h4>
                                    <p>
                                        The job could be completed at the lower
                                        operational cost by showing you which
                                        SKUs has the opportunities without
                                        wasting your employees time and they can
                                        work more efficiently and productivity
                                        by just looking to the good sources!
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="solution-items">
                                    <img src="images/scale.png" alt="" />
                                    <h4>Scale Your Business</h4>
                                    <p>
                                        The SKU Markets system helps you to
                                        scale your business by expanding your
                                        selection easily as we already can
                                        analyse the top selling and trending
                                        SKUs as we also hunting any potential
                                        SKUs to grab it to you easily!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row solution-bottom">
                            <div class="col-md-4">
                                <div class="solution-items">
                                    <img src="images/security.png" alt="" />
                                    <h4>Enhanced security standards</h4>
                                    <p>
                                        SKU Markets has done all necessary steps
                                        to secure users access keys and
                                        credentials data by applying
                                        enterprise-grade security standards.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="solution-items">
                                    <img src="images/fee.png" alt="" />
                                    <h4>No Additional Fees</h4>
                                    <p>
                                        SKU Markets does not charge any
                                        additional fees. For more information
                                        about our subscription model, please
                                        review our Pricing section.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="solution-items">
                                    <img src="images/privacy.png" alt="" />
                                    <h4>We Respect Your Privacy</h4>
                                    <p>
                                        SKU Markets Does not share personal
                                        user’s data with third parties or data
                                        associated with user’s activity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Faq />
            <Pricing />

            <div className="contact pt-5" id="contact">
                <div className="container-fluid mb-5">
                    <div className="container">
                        <div className="row text-center contact-area section-heading">
                            <h3 className="text-black">Contact Us</h3>
                        </div>
                        <div className="row text-center footer-mobaile">
                            <div className="col-md-4">
                                <div className="d-flex align-items-center justify-content-center">
                                    <a
                                        href="mailto:support@skumarket.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-regular fa-envelope c-icon"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-center justify-content-center">
                                    <a
                                        href="https://api.whatsapp.com/send?phone=966570044545"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i
                                            className="fa-brands fa-whatsapp c-icon"
                                            style={{ marginRight: '10px' }}
                                        ></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-center contact-icon justify-content-center social-icon">
                                    <a
                                        style={{ marginRight: '50px' }}
                                        href="https://www.linkedin.com/company/sku-markets"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fas-fa-solid fa-linkedin-in c-icon"></i>
                                    </a>
                                    <a
                                        href="https://twitter.com/SKUmarkets"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-twitter c-icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
