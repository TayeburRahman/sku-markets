import { setMonthly, setPackage } from 'features/pricing/pricingSlice';
import usePricing from 'hooks/usePricing';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import NoonBank from '../../assets/images/noonEasylogo.svg';
import SaabBank from '../../assets/images/SABB_Bank_Logo.png';
import BillingForm from './billingForm';



const SubscriptionHero = () => {
    const pricing = usePricing();
    const dispatch = useDispatch();
    const [description, setDescription] = useState(true);
    const [reviews, setReviews] = useState(false);
    const [selected, setSelected] = useState(pricing.package);
    const [isStatus, setStatus] = useState(pricing.monthly);
    const [isOnChangeValue ,setOnChangeValue]= useState('')
    const [isCouponTotalPrice ,setCouponTotalPrice]= useState('')
    console.log("isTotalPrice",isCouponTotalPrice)

    const handelSelected = (e) => {
        setSelected(e);
        dispatch(setPackage({ package: e }));
    };

    const handelClick = () => {
        setStatus((prev) => !prev);
        dispatch(setMonthly({ monthly: isStatus }));
    };

    const parentCalc = (value) => {
        if (isStatus) {
            return value;
        } else {
            const total = value - (value * 20) / 100;
            return total;
        }
    };

    const perUnitPrice =  pricing.package === 'Launch' ? parentCalc(250) : pricing.package === 'Grow' ? parentCalc(400) : pricing.package === 'Business' ? parentCalc(600) : 0;

    const subTotalPrice = perUnitPrice * (isStatus ? 1 : 12);
    const vatTax = (subTotalPrice * 15) / 100;
    // total price = subtotal + vat(15%)
    const totalPrice = subTotalPrice + vatTax
   

    const descriptionHandler = () => {
        window.scrollTo(0, 0);
        setDescription(true);
        setReviews(false);
    };

    const reviewsHandler = () => {
        window.scrollTo(0, 0);
        setDescription(false);
        setReviews(true);
    };

    const handelOnChange = (event) => { 
        setOnChangeValue(event.target.value);
    };


    const handelOnSubmit = (e) => {
        if(isOnChangeValue === "code"){
          const copunPrice =  totalPrice / 10  
          setCouponTotalPrice(copunPrice)
        }else{
            setCouponTotalPrice(null)
        }  
    }

    return (
        <>
            <div class="container-width">
                <div class="row">
                    <div class="col-md-12 pb-3">
                        <span class="text-bold text-black">Subscriptions</span>
                    </div>
                </div>
            </div>

            <div class="container-width">
                <div class="row">
                    <div class="card">
                        <ul class="nav nav-pills bg-nav-pills nav-justified mb-3">
                            <li class="nav-item" onClick={descriptionHandler}>
                                <a
                                    href="#profile1"
                                    data-bs-toggle="tab"
                                    aria-expanded="true"
                                    class="nav-link rounded-0 active m-0"
                                    style={{
                                        backgroundColor: reviews
                                            ? '#dcdcdc'
                                            : '#0070fc',
                                    }}
                                >
                                    <i class="mdi mdi-account-circle d-md-none d-block"></i>
                                    <span class="d-none d-md-block">
                                        <div
                                            style={{
                                                color: reviews
                                                    ? 'blue'
                                                    : 'white',
                                            }}
                                        >
                                            Subscription
                                        </div>
                                    </span>
                                </a>
                            </li>

                            <li class="nav-item" onClick={reviewsHandler}>
                                <a
                                    style={{
                                        backgroundColor: description
                                            ? '#dcdcdc'
                                            : '#0070fc',
                                    }}
                                    href="#home1"
                                    data-bs-toggle="tab"
                                    aria-expanded="false"
                                    class="nav-link rounded-0 m-0"
                                >
                                    <i class="mdi mdi-home-variant d-md-none d-block"></i>
                                    <span class="d-none d-md-block">
                                        <div
                                            style={{
                                                color: description
                                                    ? 'blue'
                                                    : 'white',
                                            }}
                                        >
                                            Billing Info
                                        </div>
                                    </span>
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane show active" id="profile1">
                                <div class="row">
                                    <div class="col-md-8">
                                        {description && (
                                            <div class="subscribe-top text-center">
                                                <span
                                                    class="text-bold"
                                                    style={{ fontSize: '12px' }}
                                                >
                                                    Subscription
                                                </span>
                                                <p style={{ fontSize: '10px' }}>
                                                    Your current subscription:{' '}
                                                    <span
                                                        class="text-bold"
                                                        style={{
                                                            fontSize: '10px',
                                                        }}
                                                    >
                                                        Free
                                                    </span>
                                                </p>

                                                <span
                                                    class="text-bold"
                                                    style={{ fontSize: '12px' }}
                                                >
                                                    Get Discount Code
                                                </span>
                                                <p style={{ fontSize: '12px' }}>
                                                    Type your discount code
                                                    below
                                                </p>

                                                <input
                                                    class="subscribe-coupon fs-5 me-1"
                                                    type="text"
                                                    placeholder="Coupon Code"
                                                    onChange={handelOnChange}
                                                />
                                                <input
                                                    class="subscribe-apply fs-5"
                                                    type="submit"
                                                    value="Apply"
                                                    onClick={handelOnSubmit}
                                                />

                                                <div class="row section-heading">
                                                    <h5 class="text-bolder fs-4 ">
                                                        Pricing Plans
                                                    </h5>
                                                    <p
                                                        class="price-p"
                                                        style={{
                                                            fontSize: '12px',
                                                        }}
                                                    >
                                                        Start with one of our
                                                        preselected plans to
                                                        analyse & monitors Top
                                                        Ranked & Trendning SKUs.{' '}
                                                        <br /> You can save 20%
                                                        by choosing Annually
                                                        subscription
                                                    </p>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 d-flex align-items-center justify-content-center text-center price-button">
                                                        <font class="fs-5 fw-bold">
                                                            Monthly
                                                        </font>

                                                        <label class="switch">
                                                            <input
                                                                type="checkbox"
                                                                onClick={
                                                                    handelClick
                                                                }
                                                                checked={
                                                                    !isStatus
                                                                }
                                                            />
                                                            <span class="slider round"></span>
                                                        </label>

                                                        <font class="fs-5 fw-bold">
                                                            Annually
                                                        </font>
                                                    </div>
                                                </div>
                                                <div class="row d-flex justify-content-center">
                                                    <div class="subscription-pricing col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                                        <div class="pricingTable">
                                                            <div class="pricingTable-header">
                                                                <h3 class="heading">
                                                                    Launch
                                                                </h3>
                                                                <p>
                                                                    Perfect for
                                                                    startups and{' '}
                                                                    <br />{' '}
                                                                    growing
                                                                    businesses
                                                                </p>

                                                                <div class="price-value">
                                                                    {' '}
                                                                    SAR{' '}
                                                                    {parentCalc(
                                                                        250
                                                                    )}
                                                                    /mo
                                                                    <span class="month"></span>{' '}
                                                                </div>

                                                                <h6>
                                                                    Up to 25,000
                                                                    Top Ranked
                                                                    SKUs <br />{' '}
                                                                    Cross
                                                                    Countries &
                                                                    Categoriea
                                                                </h6>
                                                            </div>

                                                            <div class="pricing-content">
                                                                <ul>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Track &
                                                                        Alert
                                                                        SKUs
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Max, Min
                                                                        Prices &
                                                                        SKUs
                                                                        Rating
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Expected
                                                                        Trade
                                                                        vloume &
                                                                        SOH
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Estimated
                                                                        Market
                                                                        Capital
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Opportunities
                                                                        &
                                                                        Competitors
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div
                                                                onClick={() =>
                                                                    handelSelected(
                                                                        'Launch'
                                                                    )
                                                                }
                                                                class={`${selected ===
                                                                        'Launch'
                                                                        ? 'pricingTable-signup selected-color'
                                                                        : 'pricingTable-signup'
                                                                    }`}
                                                            >
                                                                <button>
                                                                    Select
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="subscription-pricing col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                                        <div class="pricingTable green">
                                                            <div class="pricingTable-header">
                                                                <h3 class="heading">
                                                                    Grow
                                                                </h3>

                                                                <p>
                                                                    Ideal for
                                                                    small to
                                                                    medium-sized{' '}
                                                                    <br />
                                                                    organizations
                                                                </p>

                                                                <div class="price-value">
                                                                    {' '}
                                                                    SAR{' '}
                                                                    {parentCalc(
                                                                        250
                                                                    )}
                                                                    /mo
                                                                    <span class="month"></span>
                                                                </div>

                                                                <h6>
                                                                    Up to 50,000
                                                                    Top Ranked
                                                                    SKUs <br />{' '}
                                                                    Cross
                                                                    Countries &
                                                                    Categoriea
                                                                </h6>
                                                            </div>

                                                            <div class="pricing-content">
                                                                <ul>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Track &
                                                                        Alert
                                                                        SKUs
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Max, Min
                                                                        Prices &
                                                                        SKUs
                                                                        Rating
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Expected
                                                                        Trade
                                                                        vloume &
                                                                        SOH
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Estimated
                                                                        Market
                                                                        Capital
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Opportunities
                                                                        &
                                                                        Competitors
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div
                                                                onClick={() =>
                                                                    handelSelected(
                                                                        'Grow'
                                                                    )
                                                                }
                                                                class={`${selected ===
                                                                        'Grow'
                                                                        ? 'pricingTable-signup selected-color'
                                                                        : 'pricingTable-signup'
                                                                    }`}
                                                            >
                                                                <button>
                                                                    Select
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="subscription-pricing col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                                        <div class="pricingTable blue">
                                                            <div class="pricingTable-header">
                                                                <h3 class="heading">
                                                                    Business
                                                                </h3>

                                                                <p>
                                                                    Designed for
                                                                    higher
                                                                    volumes{' '}
                                                                    <br />{' '}
                                                                    organizations
                                                                </p>

                                                                <div class="price-value">
                                                                    {' '}
                                                                    SAR{' '}
                                                                    {parentCalc(
                                                                        250
                                                                    )}
                                                                    /mo
                                                                    <span class="month"></span>
                                                                </div>
                                                                <h6>
                                                                    Up to
                                                                    100,000 Top
                                                                    Ranked SKUs{' '}
                                                                    <br /> Cross
                                                                    Countries &
                                                                    Categoriea
                                                                </h6>
                                                            </div>
                                                            <div class="pricing-content">
                                                                <ul>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Track &
                                                                        Alert
                                                                        SKUs
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Max, Min
                                                                        Prices &
                                                                        SKUs
                                                                        Rating
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Expected
                                                                        Trade
                                                                        vloume &
                                                                        SOH
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Estimated
                                                                        Market
                                                                        Capital
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Opportunities
                                                                        &
                                                                        Competitors
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div
                                                                onClick={() =>
                                                                    handelSelected(
                                                                        'Business'
                                                                    )
                                                                }
                                                                class={`${selected ===
                                                                        'Business'
                                                                        ? 'pricingTable-signup selected-color'
                                                                        : 'pricingTable-signup'
                                                                    }`}
                                                            >
                                                                <button>
                                                                    Select
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row d-flex justify-content-center pricing-bottom-row">
                                                    <div class="subscription-pricing col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                                        <div class="pricingTable red">
                                                            <div class="pricingTable-header">
                                                                <span class="btn pricing-soon">
                                                                    Soon!
                                                                </span>
                                                                <h3 class="heading">
                                                                    Enterprise
                                                                </h3>

                                                                <p>
                                                                    Designed for
                                                                    higher
                                                                    volumes{' '}
                                                                    <br />{' '}
                                                                    organizations
                                                                </p>

                                                                <div class="price-value">
                                                                    Contact Us{' '}
                                                                    <span class="month"></span>
                                                                </div>
                                                                <h6
                                                                    style={{
                                                                        paddingTop:
                                                                            '25px',
                                                                    }}
                                                                >
                                                                    Up to
                                                                    Unlimited
                                                                    SKUs <br />{' '}
                                                                    Cross
                                                                    Countries &
                                                                    Categoriea
                                                                </h6>
                                                            </div>
                                                            <div class="pricing-content">
                                                                <ul>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Business
                                                                        Plan +
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Ecommerce
                                                                        Platforms
                                                                        &
                                                                        Shopping{' '}
                                                                        <br />
                                                                        Carts
                                                                        Integration
                                                                    </li>
                                                                    {/* <!-- <li><i style="margin-right: 5px;" class="fa-regular fa-circle-check"></i>Expected Trade vloume & SOH</li>
			                            <li><i style="margin-right: 5px;" class="fa-regular fa-circle-check"></i>Estimated Market Capital</li>
			                            <li><i style="margin-right: 5px;" class="fa-regular fa-circle-check"></i>Opportunities & Competitors</li> --> */}
                                                                </ul>
                                                            </div>
                                                            <div class="pricingTable-signup">
                                                                <a href="">
                                                                    Whatsapp Us
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="subscription-pricing col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                                        <div class="pricingTable red">
                                                            <div class="pricingTable-header">
                                                                <span class="btn pricing-soon">
                                                                    Soon!
                                                                </span>
                                                                <h3 class="heading">
                                                                    Enterprise
                                                                    Plus
                                                                </h3>

                                                                <p>
                                                                    Customized
                                                                    for fully
                                                                    organization
                                                                    SKUs <br />
                                                                    sales
                                                                    channels
                                                                    Management
                                                                </p>

                                                                <div class="price-value">
                                                                    Contact Us{' '}
                                                                    <span class="month"></span>
                                                                </div>

                                                                <h6
                                                                    style={{
                                                                        paddingTop:
                                                                            '25px',
                                                                    }}
                                                                >
                                                                    Up to
                                                                    Unlimited
                                                                    SKUs <br />{' '}
                                                                    Cross
                                                                    Countries &
                                                                    Categoriea
                                                                </h6>
                                                            </div>
                                                            <div class="pricing-content">
                                                                <ul>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Enterprise
                                                                        Plan +
                                                                    </li>
                                                                    <li>
                                                                        <i
                                                                            style={{
                                                                                marginRight:
                                                                                    '5px',
                                                                            }}
                                                                            class="fa-regular fa-circle-check"
                                                                        ></i>
                                                                        Complete
                                                                        Sales
                                                                        Channels{' '}
                                                                        <br />
                                                                        Management
                                                                        Platform
                                                                    </li>
                                                                    {/* <!-- <li><i style="margin-right: 5px;" class="fa-regular fa-circle-check"></i>Expected Trade vloume & SOH</li>
			                            <li><i style="margin-right: 5px;" class="fa-regular fa-circle-check"></i>Estimated Market Capital</li>
			                            <li><i style="margin-right: 5px;" class="fa-regular fa-circle-check"></i>Opportunities & Competitors</li> --> */}
                                                                </ul>
                                                            </div>
                                                            <div class="pricingTable-signup">
                                                                <a href=" ">
                                                                    Whatsapp Us
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {reviews && (
                                            <BillingForm
                                                descriptionHandler={
                                                    descriptionHandler
                                                }
                                            />
                                        )}
                                    </div>

                                    <div class="col-md-4">
                                        <div class="border p-3 mt-4 mt-lg-0 rounded">
                                            <h4 class="header-title mb-3 text-black">
                                                Order Summary
                                            </h4>

                                            <div class="table-responsive">
                                                <table class="table table-nowrap table-centered mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p class="m-0 d-inline-block align-middle text-black">
                                                                    {
                                                                        pricing.package
                                                                    }
                                                                    <br />
                                                                    <small
                                                                        style={{
                                                                            fontSize:
                                                                                '10px',
                                                                        }}
                                                                        className="text-black"
                                                                    >
                                                                        {isStatus
                                                                            ? '1'
                                                                            : '12'}{' '}
                                                                        x SAR{' '}
                                                                        {
                                                                            perUnitPrice
                                                                        }
                                                                    </small>
                                                                </p>
                                                            </td>
                                                            <td
                                                                class="text-end text-black"
                                                                style={{
                                                                    fontSize:
                                                                        '13px',
                                                                }}
                                                            >
                                                                SAR{' '}
                                                                {subTotalPrice}
                                                            </td>
                                                        </tr>
                                                        <tr
                                                            class="text-end text-black"
                                                            style={{
                                                                fontSize:
                                                                    '13px',
                                                            }}
                                                        >
                                                            <td>
                                                                <h6 class="m-0">
                                                                    Sub Total:
                                                                </h6>
                                                            </td>
                                                            <td class="text-end">
                                                                SAR{' '}
                                                                {subTotalPrice}
                                                            </td>
                                                        </tr>
                                                        <tr
                                                            class="text-end text-black"
                                                            style={{
                                                                fontSize:
                                                                    '13px',
                                                            }}
                                                        >
                                                            <td>
                                                                <h6 class="m-0">
                                                                    VAT Tax 15%:
                                                                </h6>
                                                            </td>
                                                            <td class="text-end">
                                                                SAR {vatTax}
                                                            </td>
                                                        </tr>
                                                        <tr
                                                            class="text-end text-black"
                                                            style={{
                                                                fontSize:
                                                                    '13px',
                                                            }}
                                                        >
                                                            <td>
                                                                <h6 class="m-0">
                                                                    Total:
                                                                </h6>
                                                            </td>
                                                            <td class="text-end fw-semibold">
                                                                SAR {isCouponTotalPrice? isCouponTotalPrice : totalPrice}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div class="sub-right-bottom">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="card payment-info">
                                                        <div class="row">
                                                            <div class="col-md-12 text-center">
                                                                <span class="text-bold">
                                                                    Payment Info
                                                                </span>
                                                                <p className="mt-3 fw-bold">
                                                                    Your card
                                                                    will be
                                                                    billed
                                                                    monthly in
                                                                    advance. By
                                                                    clicking
                                                                    "Pay" you
                                                                    agree to our
                                                                    terms of
                                                                    services.
                                                                    You may
                                                                    cancel your
                                                                    renewal any
                                                                    time in
                                                                    advance of
                                                                    your next
                                                                    billing date
                                                                    from your
                                                                    account
                                                                    dashboard.
                                                                </p>
                                                                <p className="fw-bold">
                                                                    Our checkout
                                                                    is safe and
                                                                    secure by
                                                                    Noon Payment
                                                                    Gateway.
                                                                    Your
                                                                    personal and
                                                                    payment
                                                                    information
                                                                    is securely
                                                                    transmitted
                                                                    via 128-bit
                                                                    encryption.
                                                                    We do not
                                                                    store any
                                                                    payment card
                                                                    information
                                                                    on our
                                                                    systems.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="row text-center payment-icon">
                                                            <div class="col-md-6">
                                                                <img
                                                                    src={
                                                                        NoonBank
                                                                    }
                                                                    alt=""
                                                                    height="50px"
                                                                    width="100px"
                                                                />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <img
                                                                    src={
                                                                        SaabBank
                                                                    }
                                                                    alt=""
                                                                    height="20px"
                                                                    width="100px"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="card noon-card">
                                                        <button class="noon-payments fs-5">
                                                            Pay with Noon
                                                            Payments
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {description && (
                                    <div class="row text-center">
                                        <div class="col-md-12">
                                            <div class="">
                                                <button
                                                    onClick={reviewsHandler}
                                                    class="topayment fs-5"
                                                >
                                                    Continue to Payment
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {reviews && (
                                    <div class="row text-center">
                                        <div class="col-md-12">
                                            <div class="">
                                                <button
                                                    onClick={descriptionHandler}
                                                    class="topayment fs-5"
                                                >
                                                    Back to Subscription
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscriptionHero;
