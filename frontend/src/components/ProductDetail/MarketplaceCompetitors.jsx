import { useGetAllProductsQuery } from 'features/product/productAPI';
import './index.css';

const quey = `limit=5&fields=title,image,sku,rating,rank,current_price,sold_24_hours,estimated_SOH,price_change,sellers`;
const MarketplaceCompetitors = (param) => {
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
                                                                    Store Name
                                                                </th>
                                                                <th class="table-heading fs-6">
                                                                    Offer Price
                                                                </th>
                                                                <th class="table-heading fs-6">
                                                                    SOH
                                                                </th>
                                                                <th
                                                                    class="table-heading fs-6"
                                                                    tabindex="0"
                                                                    data-bs-placement="top"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                                                >
                                                                    Value (24H)
                                                                </th>
                                                                <th
                                                                    class="table-heading fs-6"
                                                                    tabindex="0"
                                                                    data-bs-placement="top"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                                                >
                                                                    Fulfillment
                                                                    Type
                                                                </th>

                                                                <th class="table-heading fs-6">
                                                                    Offer Rank
                                                                </th>
                                                                <th
                                                                    class="table-heading fs-6"
                                                                    tabindex="0"
                                                                    data-bs-placement="top"
                                                                    data-bs-toggle="popover"
                                                                    data-bs-trigger="hover"
                                                                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                                                >
                                                                    Store Rate
                                                                </th>

                                                                <th class="table-heading fs-6">
                                                                    Store Share
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data?.map(
                                                                (item) => (
                                                                    <tr className="bg-transparent">
                                                                        <td>
                                                                            store
                                                                            name
                                                                        </td>
                                                                        <td class="rank-table-extra t-padding">
                                                                            {
                                                                                item.current_price
                                                                            }
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
                                                                            {
                                                                                item.rating
                                                                            }
                                                                        </td>

                                                                        <td class="t-padding product-chart text-center">
                                                                            30%
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
        </>
    );
};

export default MarketplaceCompetitors;
