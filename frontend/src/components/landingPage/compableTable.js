import { useGetAllProductsQuery } from 'features/product/productAPI';
import { Link } from 'react-router-dom';
import Ring from '../../assets/images/ring.png';
import './comparebleTable.css';

const quey = `limit=5&fields=title,image,sku,rating,rank,current_price,sold_24_hours,estimated_SOH,price_change,sellers`;
const ComparebleTable = () => {
    const { data } = useGetAllProductsQuery(quey);

    return (
        <>
            <div class="top-ranked container">
                <div class="">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <div class="col-12">
                                <div class="card">
                                    <div class="px-2 py-3">
                                        <div class="tab-content">
                                            <div
                                                class="tab-pane show active"
                                                id="basic-datatable-preview"
                                            >
                                                <div class="table-responsive">
                                                    <table class="table alert-Table">
                                                        <thead className="fw-bold text-black">
                                                            <tr className="">
                                                                <th
                                                                    class="table-heading fs-6"
                                                                    style={{
                                                                        width: '15%',
                                                                    }}
                                                                >
                                                                    SKU
                                                                </th>
                                                                <th class="table-heading fs-6">
                                                                    Marketplace
                                                                </th>
                                                                <th class="table-heading fs-6">
                                                                    Stores
                                                                </th>
                                                                <th
                                                                    class="table-heading fs-6"
                                                                    tabindex="0"
                                                                    data-bs-placement="top"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                                                >
                                                                    Rate
                                                                </th>
                                                                <th
                                                                    class="table-heading fs-6"
                                                                    tabindex="0"
                                                                    data-bs-placement="top"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                                                >
                                                                    Rank
                                                                </th>

                                                                <th class="table-heading fs-6">
                                                                    Buybox Sale
                                                                    Price
                                                                </th>
                                                                <th
                                                                    class="table-heading fs-6"
                                                                    tabindex="0"
                                                                    data-bs-placement="top"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                                                >
                                                                    Chg 24H
                                                                </th>

                                                                <th class="table-heading fs-6">
                                                                    {/* Chart */}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data?.map(
                                                                (item) => (
                                                                    <tr className="bg-transparent">
                                                                        <td>
                                                                            <div class="row d-flex flex-column flex-xl-row">
                                                                                <div class="col-lg-4 col-4">
                                                                                    <img
                                                                                        src={
                                                                                            item.image.split(
                                                                                                ','
                                                                                            )[0]
                                                                                        }
                                                                                        width="50px"
                                                                                        height="40px"
                                                                                        alt=""
                                                                                    />
                                                                                </div>
                                                                                <div class="col-lg-8 col-8">
                                                                                    <Link
                                                                                        to={`/product/${item._id}`}
                                                                                        class="text-normal fs-6 text-primary"
                                                                                    >
                                                                                        {
                                                                                            item.sku
                                                                                        }
                                                                                    </Link>
                                                                                    <span class="table-font">
                                                                                        ASOS
                                                                                        Ridley
                                                                                        High
                                                                                    </span>
                                                                                    <span class="table-font">
                                                                                        Tommee
                                                                                        Tippee
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td class="rank-table-extra t-padding">
                                                                            <a href="/">
                                                                                <img
                                                                                    class=""
                                                                                    src={
                                                                                        Ring
                                                                                    }
                                                                                    width="16px"
                                                                                    height="15px"
                                                                                    alt=""
                                                                                />
                                                                            </a>
                                                                        </td>
                                                                        <td class="rank-table-extra t-padding">
                                                                            {
                                                                                item?.sellers
                                                                            }
                                                                        </td>
                                                                        <td class="rank-table-extra t-padding">
                                                                            {
                                                                                item.rating
                                                                            }
                                                                        </td>
                                                                        <td class="rank-table-extra t-padding">
                                                                            {
                                                                                item.rank
                                                                            }
                                                                        </td>
                                                                        <td class="rank-table-extra t-padding">
                                                                            {
                                                                                item.current_price
                                                                            }
                                                                        </td>
                                                                        <td class="rank-table-extra t-padding rate-green">
                                                                            Live
                                                                        </td>

                                                                        {/* <td class="t-padding product-chart text-center">
                                                                            <img
                                                                                src={
                                                                                    RedChart
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </td> */}
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
        </>
    );
};

export default ComparebleTable;
