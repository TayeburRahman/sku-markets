import { useGetAllProductsQuery } from 'features/product/productAPI';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Area, AreaChart } from 'recharts';

const query =
    'limit=5&fields=title,image,sku,rating,rank,current_price,sold_24_hours,estimated_SOH,price_change';

const ComparableTrade = () => {
    const { data } = useGetAllProductsQuery(query);

    const handelOnClick = (props) => {
        console.log(props);
    };

    return (
        <Fragment>
            <div className="product-table">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="trade-right">
                                     
                                    <div className="">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body">
                                                <div className="row table-style">
                                        <div className="col-md-6 text-bold">
                                            <h5 style={{ color: "#6C757D"}}>Comparable trade volume</h5>
                                        </div>
                                        <div className="col-md-6 text-bold d-flex justify-content-end"  style={{ color: "#6C757D", fontSize:"12px"}}>
                                            <Link to="/skumarkets"  style={{ color: "#6C757D"}}>
                                                See All Markets{' '}
                                                <i className="fa-solid fa-angle-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                                    <div className="tab-content">
                                                        <div
                                                            className="tab-pane show active"
                                                            id="basic-datatable-preview"
                                                            style={{
                                                                overflowX:
                                                                    'auto',
                                                            }}
                                                        >
                                                            <table
                                                                id="basic-datatable"
                                                                className="table table-striped dt-responsive nowrap w-100"
                                                            >
                                                                <thead>
                                                                    <tr>
                                                                        <th
                                                                            className="table-heading"
                                                                            style={{
                                                                                width: '20%',
                                                                            }}
                                                                        >
                                                                            SKU
                                                                        </th>
                                                                        <th
                                                                            className="table-heading"
                                                                            style={{
                                                                                width: '10%',
                                                                            }}
                                                                        >
                                                                            Marketplace
                                                                        </th>
                                                                        <th
                                                                            className="table-heading"
                                                                            style={{
                                                                                width: '10%',
                                                                            }}
                                                                        >
                                                                            Stores
                                                                        </th>
                                                                        <th
                                                                            className="table-heading"
                                                                            style={{
                                                                                width: '10%',
                                                                            }}
                                                                        >
                                                                            Rate
                                                                        </th>
                                                                        <th
                                                                            className="table-heading"
                                                                            style={{
                                                                                width: '10%',
                                                                            }}
                                                                        >
                                                                            Rank
                                                                        </th>
                                                                        <th
                                                                            className="table-heading"
                                                                            style={{
                                                                                width: '10%',
                                                                            }}
                                                                        >
                                                                            Buybox
                                                                            Price
                                                                        </th>
                                                                        <th
                                                                            className="table-heading"
                                                                            style={{
                                                                                width: '10%',
                                                                            }}
                                                                        >
                                                                            Chg
                                                                            24H
                                                                        </th>
                                                                        <th
                                                                            className="table-heading"
                                                                            style={{
                                                                                width: '10%',
                                                                            }}
                                                                        >
                                                                            Chart
                                                                        </th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody>
                                                                    {data?.map(
                                                                        (
                                                                            data,
                                                                            idx
                                                                        ) => (
                                                                            <tr
                                                                                key={
                                                                                    idx
                                                                                }
                                                                            >
                                                                                <td>
                                                                                    <div className="row">
                                                                                        <div className="col-lg-4">
                                                                                            <img
                                                                                                src={
                                                                                                    data.image.split(
                                                                                                        ','
                                                                                                    )[0]
                                                                                                }
                                                                                                width="65px"
                                                                                                height="55px"
                                                                                                alt=""
                                                                                            />
                                                                                        </div>
                                                                                        <div className="col-lg-8 item-color">
                                                                                            <Link
                                                                                                onClick={() =>
                                                                                                    handelOnClick(
                                                                                                        data
                                                                                                    )
                                                                                                }
                                                                                                to={`/product/${data?._id}`}
                                                                                                href="#"
                                                                                                className="text-bold"
                                                                                            >
                                                                                                {
                                                                                                    data?.sku
                                                                                                }
                                                                                            </Link>
                                                                                            <span className="table-font">
                                                                                                ASOS
                                                                                                Ridley
                                                                                                High
                                                                                            </span>
                                                                                            <span className="table-font">
                                                                                                Tommee
                                                                                                Tippee
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td
                                                                                    className="table-extra"
                                                                                    style={{
                                                                                        padding:
                                                                                            '5px',
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="images/noon-icon.png"
                                                                                        width="15px"
                                                                                        height="15px"
                                                                                        alt=""
                                                                                    />
                                                                                </td>
                                                                                <td
                                                                                    className="table-extra"
                                                                                    style={{
                                                                                        padding:
                                                                                            '5px',
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        data.estimated_SOH
                                                                                    }
                                                                                </td>
                                                                                <td
                                                                                    className="table-extra"
                                                                                    style={{
                                                                                        padding:
                                                                                            '5px',
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        data.rating
                                                                                    }
                                                                                </td>
                                                                                <td
                                                                                    className="table-extra"
                                                                                    style={{
                                                                                        padding:
                                                                                            '5px',
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        data.rank
                                                                                    }
                                                                                </td>
                                                                                <td
                                                                                    className="table-extra"
                                                                                    style={{
                                                                                        padding:
                                                                                            '5px',
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        data.current_price
                                                                                    }
                                                                                </td>
                                                                                <td
                                                                                    className="table-extra rate-red"
                                                                                    style={{
                                                                                        padding:
                                                                                            '5px',
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        data?.price_change
                                                                                    }
                                                                                </td>
                                                                                <td
                                                                                    className="table-extra product-chart"
                                                                                    style={{
                                                                                        padding:
                                                                                            '5px',
                                                                                    }}
                                                                                >
                                                                                    <AreaChart
                                                                                        width={
                                                                                            130
                                                                                        }
                                                                                        height={
                                                                                            70
                                                                                        }
                                                                                        data={
                                                                                            data.dataStock
                                                                                        }
                                                                                        margin={{
                                                                                            top: 10,
                                                                                            right: 30,
                                                                                            left: 0,
                                                                                            bottom: 0,
                                                                                        }}
                                                                                    >
                                                                                        <defs>
                                                                                            <linearGradient
                                                                                                id="colorPv"
                                                                                                x1="0"
                                                                                                y1="0"
                                                                                                x2="0"
                                                                                                y2="1"
                                                                                            >
                                                                                                <stop
                                                                                                    offset="5%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0.8
                                                                                                    }
                                                                                                />
                                                                                                <stop
                                                                                                    offset="95%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0
                                                                                                    }
                                                                                                />
                                                                                            </linearGradient>
                                                                                            <linearGradient
                                                                                                id="colorUv"
                                                                                                x1="0"
                                                                                                y1="0"
                                                                                                x2="0"
                                                                                                y2="1"
                                                                                            >
                                                                                                <stop
                                                                                                    offset="5%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0.8
                                                                                                    }
                                                                                                />
                                                                                                <stop
                                                                                                    offset="95%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0
                                                                                                    }
                                                                                                />
                                                                                            </linearGradient>
                                                                                            <linearGradient
                                                                                                id="colorPv"
                                                                                                x1="0"
                                                                                                y1="0"
                                                                                                x2="0"
                                                                                                y2="1"
                                                                                            >
                                                                                                <stop
                                                                                                    offset="5%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0.8
                                                                                                    }
                                                                                                />
                                                                                                <stop
                                                                                                    offset="95%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0
                                                                                                    }
                                                                                                />
                                                                                            </linearGradient>
                                                                                            <linearGradient
                                                                                                id="colorPv"
                                                                                                x1="0"
                                                                                                y1="0"
                                                                                                x2="0"
                                                                                                y2="1"
                                                                                            >
                                                                                                <stop
                                                                                                    offset="5%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0.8
                                                                                                    }
                                                                                                />
                                                                                                <stop
                                                                                                    offset="95%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0
                                                                                                    }
                                                                                                />
                                                                                            </linearGradient>
                                                                                            <linearGradient
                                                                                                id="colorPv"
                                                                                                x1="0"
                                                                                                y1="0"
                                                                                                x2="0"
                                                                                                y2="1"
                                                                                            >
                                                                                                <stop
                                                                                                    offset="5%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0.8
                                                                                                    }
                                                                                                />
                                                                                                <stop
                                                                                                    offset="95%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0
                                                                                                    }
                                                                                                />
                                                                                            </linearGradient>
                                                                                            <linearGradient
                                                                                                id="colorPv"
                                                                                                x1="0"
                                                                                                y1="0"
                                                                                                x2="0"
                                                                                                y2="1"
                                                                                            >
                                                                                                <stop
                                                                                                    offset="5%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0.8
                                                                                                    }
                                                                                                />
                                                                                                <stop
                                                                                                    offset="95%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0
                                                                                                    }
                                                                                                />
                                                                                            </linearGradient>
                                                                                            <linearGradient
                                                                                                id="colorPv"
                                                                                                x1="0"
                                                                                                y1="0"
                                                                                                x2="0"
                                                                                                y2="1"
                                                                                            >
                                                                                                <stop
                                                                                                    offset="5%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0.8
                                                                                                    }
                                                                                                />
                                                                                                <stop
                                                                                                    offset="95%"
                                                                                                    stopColor="#20c997"
                                                                                                    stopOpacity={
                                                                                                        0
                                                                                                    }
                                                                                                />
                                                                                            </linearGradient>
                                                                                        </defs>
                                                                                        <Area
                                                                                            type="monotone"
                                                                                            dataKey="low"
                                                                                            stroke="#20c997"
                                                                                            fillOpacity={
                                                                                                1
                                                                                            }
                                                                                            fill="url(#colorUv)"
                                                                                        />
                                                                                    </AreaChart>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    )}
                                                                </tbody>
                                                            </table>
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
            </div>
        </Fragment>
    );
};

export default ComparableTrade;
