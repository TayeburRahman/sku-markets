import {
    setMonthly as Monthly,
    setPackage,
} from 'features/pricing/pricingSlice';
import usePricing from 'hooks/usePricing';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
    const pricing = usePricing();
    const [monthly, setMonthly] = useState(pricing.monthly);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelClick = (e) => {
        setMonthly(!monthly ? true : false);
        dispatch(Monthly({ monthly: !monthly }));
    };

    const parentCalc = (value) => {
        if (monthly) {
            return value;
        } else {
            const total = value - (value * 20) / 100;
            return total;
        }
    };

    const setPackageAndNavigate = (e) => {
        dispatch(setPackage({ package: e }));
        navigate('/Subscriptions');
    };

    return (
        <div className="" id="price">
            <div className="container">
                <div className="row section-heading">
                    <h3 className="text-bold text-black">Pricing Plan</h3>
                    <p className="price-p fs-6">
                        Start with one of our preselected plans to analyse &
                        monitors Top Ranked & Trendning SKUs. <br />
                        You can save 20% by choosing Annually subscription
                    </p>
                </div>
                <div className="row">
                    <div className="d-flex  align-items-center col-md-12 justify-content-center text-center price-button">
                        <font style={{ marginRight: '10px' }}>Monthly</font>

                        <label class="switch">
                            <input
                                type="checkbox"
                                checked={!monthly}
                                onClick={handelClick}
                            />
                            <span class="slider round"></span>
                        </label>

                        <font style={{ marginLeft: '10px' }}>Annually</font>
                    </div>
                </div>
                <div className="row d-flex flex-column flex-lg-row justify-content-center">
                    <div className="box-width first-price px-0">
                        <div className="pricingTable pt-0">
                            <div className="pricingTable-header">
                                <h3 className="heading fs-5 text-black">
                                    Launch
                                </h3>
                                <p>
                                    Perfect for startups and <br />
                                    growing businesses
                                </p>

                                <div className="price-value">
                                    {parentCalc(250)}/mo
                                    <span className="month"></span>
                                </div>
                                <div class="pricingTable-signup">
                                    <button
                                        onClick={() =>
                                            setPackageAndNavigate('Launch')
                                        }
                                    >
                                        Get Started Now
                                    </button>
                                </div>

                                <h6>
                                    Up to 50,000 Top Ranked SKUs <br />
                                    Cross Countries & Categoriea
                                </h6>
                            </div>

                            <div className="pricing-content">
                                <ul>
                                    <li>Track & Alert SKUs</li>
                                    <li>Max, Min Prices & SKUs Rating</li>
                                    <li>Expected Trade vloume & SOH</li>
                                    <li>Estimated Market Capital</li>
                                    <li>Opportunities & Competitors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="box-width px-0">
                        <div className="pricingTable green pt-0">
                            <div className="pricingTable-header">
                                <h3 className="heading">Grow</h3>

                                <p className="px-2">
                                    Ideal for small to medium-sized
                                    organizations
                                </p>

                                <div className="price-value">
                                    SAR {parentCalc(400)}/mo
                                    <span className="month"> </span>
                                </div>

                                <div className="pricingTable-signup">
                                    <button
                                        onClick={() =>
                                            setPackageAndNavigate('Grow')
                                        }
                                    >
                                        Get Started Now
                                    </button>
                                </div>

                                <h6>
                                    Up to 100,000 Top Ranked SKUs <br />
                                    Cross Countries & Categoriea
                                </h6>
                            </div>

                            <div className="pricing-content">
                                <ul>
                                    <li>Track & Alert SKUs</li>
                                    <li>Max, Min Prices & SKUs Rating</li>
                                    <li>Expected Trade vloume & SOH</li>
                                    <li>Estimated Market Capital</li>
                                    <li>Opportunities & Competitors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="box-width px-0">
                        <div className="pricingTable blue pt-0">
                            <div className="pricingTable-header">
                                <h3 className="heading">Business</h3>

                                <p>
                                    Designed for higher volumes <br />
                                    organizations
                                </p>

                                <div className="price-value">
                                    SAR {parentCalc(400)}/mo
                                    <span className="month">
                                        <div className="pricingTable-signup">
                                            <button
                                                onClick={() =>
                                                    setPackageAndNavigate(
                                                        'Business'
                                                    )
                                                }
                                            >
                                                Get Started Now
                                            </button>
                                        </div>
                                    </span>
                                </div>
                                <h6>
                                    Up to 100,000 Top Ranked SKUs <br />
                                    Cross Countries & Categoriea
                                </h6>
                            </div>
                            <div className="pricing-content">
                                <ul>
                                    <li>Grow Plan +</li>
                                    <li>Your SKUs Buybox Prices Management</li>
                                    <li>Your SKUs Stock Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="box-width px-0">
                        <div className="pricingTable red pt-0">
                            <div className="pricingTable-header position-relative">
                                <span
                                    style={{
                                        color: 'white',
                                        top: '0',
                                        left: '-15px',
                                        position: 'absolute',
                                        padding: '3px',
                                        background: '#A9A9A9',
                                        borderRadius: '5px',
                                        background: '#A9A9A9',
                                        paddingLeft: '8px',
                                        paddingRight: '13px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    soon!
                                </span>
                                <h3 className="heading">Enterprise</h3>

                                <p>
                                    Customized for specific <br />
                                    organisation SKUs
                                </p>

                                <div className="price-value">
                                    Contact Us <span className="month"> </span>
                                </div>
                                <div className="pricingTable-signup">
                                    <a href="https://api.whatsapp.com/send?phone=966570044545">
                                        Whatsapp Us
                                    </a>
                                </div>
                                <h6 style={{ paddingTop: '25px' }}>
                                    Up to Unlimited SKUs <br />
                                    Cross Countries & Categoriea
                                </h6>
                            </div>
                            <div className="pricing-content">
                                <ul>
                                    <li>Business Plan +</li>
                                    <li>
                                        Ecommerce Platforms & Shopping Carts
                                        Integration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="box-width px-0">
                        <div className="pricingTable red pt-0">
                            <div className="pricingTable-header position-relative">
                                <span
                                    style={{
                                        color: 'white',
                                        top: '0',
                                        left: '-15px',
                                        position: 'absolute',
                                        padding: '3px',
                                        background: '#A9A9A9',
                                        borderRadius: '5px',
                                        background: '#A9A9A9',
                                        paddingLeft: '8px',
                                        paddingRight: '13px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    soon!
                                </span>
                                <h3 className="heading">Enterprise +</h3>

                                <p>
                                    Customized for specific <br />
                                    organisation SKUs
                                </p>

                                <div className="price-value">
                                    Contact Us <span className="month"> </span>
                                </div>
                                <div className="pricingTable-signup">
                                    <a href="https://api.whatsapp.com/send?phone=966570044545">
                                        Whatsapp Us
                                    </a>
                                </div>
                                <h6 style={{ paddingTop: '25px' }}>
                                    Up to Unlimited SKUs <br />
                                    Cross Countries & Categoriea
                                </h6>
                            </div>
                            <div className="pricing-content">
                                <ul>
                                    <li>Enterprise Plan +</li>
                                    <li>
                                        A Complete Sales Channels Management
                                        Platform
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
