import React from "react";
import BaigPic from "../../assets/images/sku-product.png";
import SFlag from "../../assets/images/noon-saudi.svg";
import GreenChart from "../../assets/images/greenMap.png";

const TopRanked = () => {
  return (
    <>
      <div class="top-ranked ">
        <div class="container-width">
          <div class="row">
            <div class="col-md-12 col-12">
              <div class="col-12">
                <div class="card">
                  
                  <div class="row table-style pt-3 pt-md-0 d-flex flex-direction-column justify-content-center justify-lg-start flex-lg-row align-items-center ">
                    <div class="col-md-6 text-bold table-header-left col-12 mx-auto text-center text-lg-start">
                      <span class="table-title ps-0 ps-md-2 ">
                        Top Ranked &amp; Trending SKUs
                      </span>
                    </div>

                    <div class="col-md-6 col-10 text-bold d-flex justify-content-center justify-content-lg-end table-header-right mt-2 mt-lg-0">
                      <div class="export btn ">
                        <a href="//">
                          <i class="fa-solid fa-file-export"></i> Export
                        </a>
                      </div>
                      <div class="filter btn" style={{ width: "64px" }}>
                        <a href="//">Filter</a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="tab-content">
                      <div
                        class="tab-pane show active"
                        id="basic-datatable-preview"
                      >
               

                        <div class="table-responsive">
                          <table class="table alert-Table">
                            <thead className="fs-6 fw-bold text-black">
                              <tr>
                                <th
                                  class="table-heading"
                                  style={{ width: "15%" }}
                                >
                                  SKU
                                </th>
                                <th class="table-heading">Marketplace</th>
                                <th class="table-heading">Stores</th>
                                <th
                                  class="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Rate
                                </th>
                                <th
                                  class="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Rank
                                </th>
                                <th
                                  class="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Fulfilment Type
                                </th>
                                <th
                                  class="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  SKU Status
                                </th>
                                <th class="table-heading">Buybox Sale Price</th>
                                <th
                                  class="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Chg 24H
                                </th>
                                <th
                                  class="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Max Offer Price
                                </th>
                                <th
                                  class="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Min Offer Price
                                </th>
                                <th
                                  class="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  E Opp To Fulfilment
                                </th>
                                <th
                                  class="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  E Opp to stock
                                </th>
                                <th class="table-heading">Price Graphs</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr className="trBackgroundColor">
                              <td>
                                <div class="row d-flex flex-column flex-xl-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={BaigPic}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold">
                                      N35997789A
                                    </a>
                                    <span class="table-font">
                                      ASOS Ridley High
                                    </span>
                                    <span class="table-font">
                                      Tommee Tippee
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="rank-table-extra t-padding">
                                <a href="">
                                  <img
                                    class="w-100"
                                    src={SFlag}
                                    width="15px"
                                    height="15px"
                                  />
                                </a>
                              </td>
                              <td class="rank-table-extra t-padding">20</td>
                              <td class="rank-table-extra t-padding">11000</td>
                              <td class="rank-table-extra t-padding">3</td>
                              <td class="rank-table-extra t-padding">
                                Express
                              </td>
                              <td class="rank-table-extra t-padding rate-green">
                                Live
                              </td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding rate-green">
                                15%
                              </td>
                              <td class="rank-table-extra t-padding">3</td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding rate-green">
                                YES
                              </td>
                              <td class="rank-table-extra t-padding rate-green">
                                YES
                              </td>
                              <td class="t-padding product-chart">
                                <img src={GreenChart} alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="row d-flex flex-column flex-xl-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={BaigPic}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold">
                                      N35997789A
                                    </a>
                                    <span class="table-font">
                                      ASOS Ridley High
                                    </span>
                                    <span class="table-font">
                                      Tommee Tippee
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="rank-table-extra t-padding">
                                <a href="">
                                  <img
                                    class="w-100"
                                    src={SFlag}
                                    width="15px"
                                    height="15px"
                                  />
                                </a>
                              </td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding">7000</td>
                              <td class="rank-table-extra t-padding">3</td>
                              <td class="rank-table-extra t-padding">Market</td>
                              <td class="rank-table-extra t-padding rate-red">
                                Not Live
                              </td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding rate-red">
                                -5%
                              </td>
                              <td class="rank-table-extra t-padding">3</td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding rate-red">
                                NO
                              </td>
                              <td class="rank-table-extra t-padding rate-green">
                                YES
                              </td>
                              <td class="t-padding product-chart">
                                <img src={GreenChart} alt="" />
                              </td>
                            </tr>
                            <tr className="trBackgroundColor">
                              <td>
                                <div class="row d-flex flex-column flex-xl-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={BaigPic}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold">
                                      N35997789A
                                    </a>
                                    <span class="table-font">
                                      ASOS Ridley High
                                    </span>
                                    <span class="table-font">
                                      Tommee Tippee
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="rank-table-extra t-padding">
                                <img
                                  class="w-100"
                                  src={SFlag}
                                  width="20px"
                                  height="15px"
                                />
                              </td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding">12000</td>
                              <td class="rank-table-extra t-padding">3</td>
                              <td class="rank-table-extra t-padding">
                                Express
                              </td>
                              <td class="rank-table-extra t-padding rate-green">
                                Live
                              </td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding rate-green">
                                20%
                              </td>
                              <td class="rank-table-extra t-padding">3</td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding rate-red">
                                NO
                              </td>
                              <td class="rank-table-extra t-padding rate-red">
                                NO
                              </td>
                              <td class="t-padding product-chart">
                                <img src={GreenChart} alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="row d-flex flex-column flex-xl-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={BaigPic}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold">
                                      N35997789A
                                    </a>
                                    <span class="table-font">
                                      ASOS Ridley High
                                    </span>
                                    <span class="table-font">
                                      Tommee Tippee
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="rank-table-extra t-padding">
                                <a href="">
                                  <img
                                    class="w-100"
                                    src={SFlag}
                                    width="15px"
                                    height="15px"
                                  />
                                </a>
                              </td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding">10000</td>
                              <td class="rank-table-extra t-padding">3</td>
                              <td class="rank-table-extra t-padding">
                                Express
                              </td>
                              <td class="rank-table-extra t-padding rate-red">
                                Not Live
                              </td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding rate-green">
                                10%
                              </td>
                              <td class="rank-table-extra t-padding">3</td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding rate-green">
                                YES
                              </td>
                              <td class="rank-table-extra t-padding rate-red">
                                NO
                              </td>
                              <td class="t-padding product-chart">
                                <img src={GreenChart} alt="" />
                              </td>
                            </tr>
                            <tr className="trBackgroundColor">
                              <td>
                                <div class="row d-flex flex-column flex-xl-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={BaigPic}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold">
                                      N35997789A
                                    </a>
                                    <span class="table-font">
                                      ASOS Ridley High
                                    </span>
                                    <span class="table-font">
                                      Tommee Tippee
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="rank-table-extra t-padding">
                                <a href="">
                                  <img
                                    className="w-100"
                                    src={SFlag}
                                    width="15px"
                                    height="15px"
                                  />
                                </a>
                              </td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding">50000</td>
                              <td class="rank-table-extra t-padding">3</td>
                              <td class="rank-table-extra t-padding">Market</td>
                              <td class="rank-table-extra t-padding rate-red">
                                Not Live
                              </td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding rate-red">
                                -15%
                              </td>
                              <td class="rank-table-extra t-padding">3</td>
                              <td class="rank-table-extra t-padding">34</td>
                              <td class="rank-table-extra t-padding rate-red">
                                NO
                              </td>
                              <td class="rank-table-extra t-padding rate-green">
                                YES
                              </td>
                              <td class="t-padding product-chart">
                                <img src={GreenChart} alt="" />
                              </td>
                            </tr>
                            </tbody>
                         
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row table-footer px-2">
                    <div class="col-md-6 table-footer-left text-bold">
                      <span>Showing 1 to 5 of 5 Marketplace</span>
                    </div>
                    <div class="col-md-6 table-footer-right d-flex align-items-center justify-content-end">
                      <div class="">
                        <a href="//">
                          <i class="fa-solid fa-angle-left"></i>
                        </a>
                        <a href="//" class="btn shadow-none hover-shadow">
                          1
                        </a>
                        <a href="//" class="btn shadow-none hover-shadow">
                          2
                        </a>
                        <a href="//" class="btn shadow-none hover-shadow">
                          3
                        </a>
                        <a href="//" class="btn shadow-none hover-shadow">
                          4
                        </a>
                        <a href="//">
                          <i class="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row table-footer">
                  <span style={{ marginTop: "-12px !important" }}>
                    Designed for users to instantly see the top Brands on the
                    marketplaces for opportunities.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRanked;
