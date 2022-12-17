import { Area, AreaChart } from 'recharts';
import './index.css';
import RedChart from "../../assets/images/redChart.png";
import { useState } from 'react';


const DataStoreag = () => {
    const [labelTime, setLabelTime] = useState("24 H");

    const handleLabelTime = (t) => {
        if (t === "24 H") {
            setLabelTime("07 D");
            console.log(labelTime);
        }
        if (t === "07 D") {
            setLabelTime("30 D");
        }
        if (t === "30 D") {
            setLabelTime("24 H");
        }
    };


    const dataStock = [
        {
            "Day": 1,
            "high": 100,
            "low": 90
        },
        {
            "Day": 2,
            "high": 1300,
            "low": 800
        },
        {
            "Day": 3,
            "high": 1900,
            "low": 1600
        },
        {
            "Day": 4,
            "high": 2000,
            "low": 1300
        },
        {
            "Day": 5,
            "high": 2100,
            "low": 2000
        },
        {
            "Day": 6,
            "high": 3120,
            "low": 2600
        },
        {
            "Day": 7,
            "high": 3000,
            "low": 2700
        },
        {
            "Day": 8,
            "high": 3500,
            "low": 1900
        },
        {
            "Day": 9,
            "high": 3000,
            "low": 2200
        },
        {
            "Day": 0,
            "high": 3700,
            "low": 2700
        },
        {
            "Day": 1,
            "high": 3600,
            "low": 3100
        },
        {
            "Day": 2,
            "high": 4600,
            "low": 3359
        },
        {
            "Day": 3,
            "high": 3995,
            "low": 3402
        },
        {
            "Day": 4,
            "high": 4100,
            "low": 3500
        },
        {
            "Day": 5,
            "high": 42000,
            "low": 3920
        },
        {
            "Day": 6,
            "high": 4300,
            "low": 4000
        }
    ]
    return (

        // <div className='container'>
        //     <div className="row">
        //         <div className="col-md-12 watchlist-main">
        //             <div className="card">
        //                 <div className="card-body">
        //                     <div className="row ">
        //                         <div className="col-md-12 Watchlist-top">
        //                             <span style={{fontSize: "18px"}}>Watchlist</span>
        //                         </div>
        //                     </div>


        //                             <div className="watchlist-bottom">
        //                                 <div className="row gap-2">
        //                                     <div className="col-md-4 d-flex col-sm-4 col-lg-3 box-shadow" style={{height: "80px"}}>
        //                                         <div className='pt-2'>
        //                                             <span className=''>Watchlist Marketcap</span>
        //                                             <a className=" rate-btn"> 24H</a>
        //                                             <div className="watch-rate rate-up">
        //                                             <span className="text-bold">$319.54B</span>
        //                                             <span className="rate-green" style={{ fontSize: "8px" }}>0.64% <i className="fa-solid fa-arrow-right"></i></span>
        //                                         </div>
        //                                         </div>

        //                                         <div className="watch-chart" style={{marginTop: ""}}>
        //                                             <AreaChart
        //                                                 width={
        //                                                     130
        //                                                 }
        //                                                 height={
        //                                                     70
        //                                                 }
        //                                                 data={dataStock}
        //                                                 margin={{
        //                                                     top: 10,
        //                                                     right: 30,
        //                                                     left: 0,
        //                                                     bottom: 0,
        //                                                 }}
        //                                             >
        //                                                 <defs>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                         style={{height: "61px"}}
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorUv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />

        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                 </defs>
        //                                                 <Area
        //                                                     type="monotone"
        //                                                     dataKey="low"
        //                                                     stroke="#20c997"
        //                                                     fillOpacity={
        //                                                         1
        //                                                     }
        //                                                     fill="url(#colorUv)"
        //                                                 />
        //                                             </AreaChart>
        //                                         </div>
        //                                     </div>
        //                                      <div className="col-md-4 d-flex col-sm-4 col-lg-3 box-shadow" style={{height: "80px"}}>
        //                                         <div className='pt-2'>
        //                                             <span className=''>Watchlist Marketcap</span>
        //                                             <a className=" rate-btn"> 24H</a>
        //                                             <div className="watch-rate rate-up">
        //                                             <span className="text-bold">$319.54B</span>
        //                                             <span className="rate-green" style={{ fontSize: "8px" }}>0.64% <i className="fa-solid fa-arrow-right"></i></span>
        //                                         </div>
        //                                         </div>

        //                                         <div className="watch-chart" style={{marginTop: ""}}>
        //                                             <AreaChart
        //                                                 width={
        //                                                     130
        //                                                 }
        //                                                 height={
        //                                                     70
        //                                                 }
        //                                                 data={dataStock}
        //                                                 margin={{
        //                                                     top: 10,
        //                                                     right: 30,
        //                                                     left: 0,
        //                                                     bottom: 0,
        //                                                 }}
        //                                             >
        //                                                 <defs>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                         style={{height: "61px"}}
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorUv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />

        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                     <linearGradient
        //                                                         id="colorPv"
        //                                                         x1="0"
        //                                                         y1="0"
        //                                                         x2="0"
        //                                                         y2="1"
        //                                                     >
        //                                                         <stop
        //                                                             offset="5%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0.8
        //                                                             }
        //                                                         />
        //                                                         <stop
        //                                                             offset="95%"
        //                                                             stopColor="#20c997"
        //                                                             stopOpacity={
        //                                                                 0
        //                                                             }
        //                                                         />
        //                                                     </linearGradient>
        //                                                 </defs>
        //                                                 <Area
        //                                                     type="monotone"
        //                                                     dataKey="low"
        //                                                     stroke="#20c997"
        //                                                     fillOpacity={
        //                                                         1
        //                                                     }
        //                                                     fill="url(#colorUv)"
        //                                                 />
        //                                             </AreaChart>
        //                                         </div>
        //                                     </div>

        //                                     <div className="col-md-4 d-flex col-sm-4 col-lg-3 box-shadow" style={{ }}>
        //                                         <div className="progress-chart " style={{height: "80px"}}>
        //                                             <div className="progress-top">
        //                                                 <span>Gainers/losers Number</span>
        //                                                 <a className=" rate-btn"> 24H</a>
        //                                             </div>

        //                                             <div className="progress progress-line">
        //                                                 <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="80"></div>
        //                                             </div>
        //                                             <div className="progress-bottom">
        //                                                 <div className="row">
        //                                                     <div className="col-md-6">
        //                                                         <span>1555 <font>(67%)</font></span>
        //                                                     </div>
        //                                                     <div className="col-md-6" style={{ textAlign: "right" }}>
        //                                                         <span>780 <font>(33%)</font></span>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                     </div> 
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        // </div>


        <div class="container-width">
            <div class="row">
                <div class="col-md-12 watchlist-main">
                    <div class="card">
                        <div class="card-body my-3 mx-2">
                            <div class="row ">
                                <div class="col-md-12 Watchlist-top">
                                    <span className='text-black fs-5'> My Watchlist</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-2 col-lg-2 watchlistcards mt-1" style={{ width: "19%" }}>
                                    <div class="watchlist-bottom card">
                                        <div class="row">
                                            <div class="col-9 col-md-9 col-lg-9">
                                                <div>
                                                    <span className='text-black pe-1'>Watchlist Marketcap</span>
                                                    <button
                                                        onClick={() => handleLabelTime(labelTime)}
                                                        class="label__Label-sc-1p5pknx-0 styled__StyledHistoricalButton-sc-zcqu0d-0 iBByqe kqciMg labelTime-btn"
                                                    >
                                                        {labelTime}
                                                    </button>
                                                </div>


                                                <div class="watch-rate rate-down">
                                                    <span class="text-black fw-bolder">$319.54B</span>
                                                    <span class="rate-red" style={{ fontSize: '8px' }}>-12.41% <i class="fa-solid fa-arrow-right"></i></span>
                                                </div>
                                            </div>
                                            <div class="col-3 col-sm-3 col-md-3 watch-chart">
                                                <img src={RedChart} alt="" width="60px" height="30px;" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-2 watchlistcards mt-1" style={{ width: "20%" }}>
                                    <div class="watchlist-bottom card">
                                        <div class="row">
                                            <div class="col-9 col-md-9 col-lg-9">
                                                <div>
                                                    <span className='text-black pe-1'>Watchlist Marketcap</span>
                                                    <button
                                                        onClick={() => handleLabelTime(labelTime)}
                                                        class="label__Label-sc-1p5pknx-0 styled__StyledHistoricalButton-sc-zcqu0d-0 iBByqe kqciMg labelTime-btn"
                                                    >
                                                        {labelTime}
                                                    </button>
                                                </div>

                                                <div class="watch-rate rate-up">
                                                    <span class="text-black fw-bolder">$319.54B</span>
                                                    <span class="rate-green" style={{ fontSize: '8px' }}>0.64% <i class="fa-solid fa-arrow-right"></i></span>
                                                </div>
                                            </div>
                                            <div class="col-3 col-sm-3 col-md-3 watch-chart">
                                                <img src={RedChart} alt="" width="60px" height="30px;" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-2 watchlistcards mt-1" style={{ width: "20%" }}>
                                    <div class="watchlist-bottom card">
                                        <div class="row">
                                            <div class="col-9 col-md-9 col-lg-9">
                                                <div>
                                                    <span className='text-black pe-1'>Watchlist Marketcap</span>
                                                    <button
                                                        onClick={() => handleLabelTime(labelTime)}
                                                        class="label__Label-sc-1p5pknx-0 styled__StyledHistoricalButton-sc-zcqu0d-0 iBByqe kqciMg labelTime-btn"
                                                    >
                                                        {labelTime}
                                                    </button>
                                                </div>

                                                <div class="watch-rate rate-up">
                                                    <span class="text-black fw-bolder">$319.54B</span>
                                                    <span class="rate-green" style={{ fontSize: '8px' }}>0.64% <i class="fa-solid fa-arrow-right"></i></span>
                                                </div>
                                            </div>
                                            <div class="col-3 col-sm-3 col-md-3 watch-chart">
                                                <img src={RedChart} alt="" width="60px" height="30px;" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-2 watchlistcards mt-1" style={{ width: "20%" }}>
                                    <div class="watchlist-bottom card">
                                        <div class="row">
                                            <div class="col-9 col-md-9 col-lg-9">
                                                <div>
                                                    <span className='text-black pe-1'>Watchlist Marketcap</span>
                                                    <button
                                                        onClick={() => handleLabelTime(labelTime)}
                                                        class="label__Label-sc-1p5pknx-0 styled__StyledHistoricalButton-sc-zcqu0d-0 iBByqe kqciMg labelTime-btn"
                                                    >
                                                        {labelTime}
                                                    </button>
                                                </div>

                                                <div class="watch-rate rate-up">
                                                    <span class="text-black fw-bolder">$319.54B</span>
                                                    <span class="rate-green" style={{ fontSize: '8px' }}>0.64% <i class="fa-solid fa-arrow-right"></i></span>
                                                </div>
                                            </div>
                                            <div class="col-3 col-sm-3 col-md-3 watch-chart">
                                                <img src={RedChart} alt="" width="60px" height="30px;" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card col-12 col-sm-12 col-md-6 col-lg-3 watchlistcards mt-1 Lastcard" style={{ width: "20%" }}>
                                    <div class="progress-chart">
                                        <div class="progress-top">
                                            <span className='text-black pe-1'>Gainers/losers Number</span>
                                            <button
                                                onClick={() => handleLabelTime(labelTime)}
                                                class="label__Label-sc-1p5pknx-0 styled__StyledHistoricalButton-sc-zcqu0d-0 iBByqe kqciMg labelTime-btn"
                                            >
                                                {labelTime}
                                            </button>
                                        </div>

                                        <div class="progress progress-line">
                                            <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="80"></div>
                                        </div>
                                        <div class="progress-bottom">
                                            <div class="row">
                                                <div class="col-md-6 ">
                                                    <span className='fw-bold text-black'>1555 <font>(67%)</font></span>
                                                </div>
                                                <div class="col-md-6 fw-bold text-black" style={{ textAlign: 'right' }}>
                                                    <span className='fw-bold text-black'>780 <font>(33%)</font></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataStoreag;