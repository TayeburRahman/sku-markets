import React from "react";
import "./category.css";
import tommyPic from "../../assets/images/baby.png";
import CartMap from "../../assets/images/product-map1.png";
import SahudiaLogo from "../../assets/images/noon-saudi.svg";

const catHero = () => {
  return (
    <>
      <div class="container-width">
        <div class="portfolio-body card shadowLight">
          <div class="portfolio-first card-body">
            <div class="row section-padding-tb d-flex flex-column flex-lg-row">
              <div class="col-md-4 col-lg-4 col-sm-2 col-11 mx-auto">
                <div class="">
                  <div class="d-flex align-items-center flex-column flex-md-row">
                  <img src={tommyPic} width="80px" height="80px" />
                  <span style={{ fontSize: "15px" }} class="pt-1 pt-lg-0"> Baby Products</span>{" "}
                  </div>
                  <br />
                  <div className="pt-1 pt-lg-3 text-center text-lg-start">
                    <span class=""
                    >
                      Strong Team led by Changpeng Zhao, has experience in both
                      wall-street and crypto finance.{" "}
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="col-md-2 col-lg-2 col-sm-2 col-11 mx-auto pt-5 pt-lg-0 d-flex align-items-end justify-content-center  justify-content-lg-end">
                <div class="first-2 text-center text-lg-end">
                  <p class="d-none d-lg-block">Volume</p>
                  <span style={{ fontSize: "14px" }}>
                    SAR 18,87M <font class="rate-green">2.04%</font>
                  </span>
                  <br />
                  <span style={{ fontSize: "14px" }}>
                    SAR 1,87M <font class="rate-red">-4.04%</font>
                  </span>
                  <br />
                  <div className="pt-3">
                    <span
                      style={{
                        marginTop: "25px !important",
                        display: "inlineBlock",
                      }}
                    >
                      Updated about 1 hour ago
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-3 col-sm-2 col-11 pt-5 pt-lg-0 mx-auto d-flex align-items-end">
                <div class="first-3">
                  <div class="three-top d-flex justify-content-between">
                  <p class="d-block d-lg-none">Volume</p>
                    <a href="//">24 H</a>
                  </div>
                  <div class="three-bottom">
                    <img src={CartMap} alt="" width="250px" height="70px;" />
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-3 col-sm-2 col-11 pt-5 pt-lg-0 mx-auto">
                <div class="first-4 text-center">
                  <div class="row text-center">
                    <div class="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>Marketplace</span>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                      <a href="">
                        <img
                          className="w-100"
                          src={SahudiaLogo}
                          width="10px"
                          height="10px"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="row text-center">
                    <div class="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>Brands</span>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                      <span>22000</span>
                    </div>
                  </div>
                  <div class="row text-center">
                    <div class="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>SKUs</span>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                      <span>120</span>
                    </div>
                  </div>
                  <div class="row text-center">
                    <div class="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>Type</span>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                      <span>120</span>
                    </div>
                  </div>
                  <div class="row text-center">
                    <div class="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>Sub-Types</span>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                      <span>1127</span>
                    </div>
                  </div>
                  <div class="row text-center">
                    <div class="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>Type</span>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                      <span>120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-width">
        <div
          class="portfolio-body card"
          style={{ padding: "20px 12px !important", marginTop: "-25px" }}
        >
          <div class="portfolio-second card-body py-3 px-2 py-3">
          <div class=" text-center text-md-start ">
            <span class="text-bold " style={{ fontSize: "14px" }}>
             
              About
            </span>
            </div>
            <div class="row pt-3 pt-md-0">
              <div class="col-md-12 d-flex justify-content-lg-between justify-content-around flex-column flex-md-row">
                <div class="second-item d-flex  justify-content-between px-5 px-md-0">
                  <div class="second-item-left">
                    <i class="fa-solid fa-users"></i>
                  </div>
                  <div class="second-item-right">
                    <span>Stores</span><br />
                    <span>3900</span>
                  </div>
                </div>
                <div class="second-item d-flex justify-content-between px-5 px-md-0">
                  <div class="second-item-left">
                    <i class="fa-solid fa-arrow-up-right-dots"></i>
                  </div>
                  <div class="second-item-right">
                    <span>Live SKUs</span> <br />
                    <span>3900</span>
                  </div>
                </div>
                <div class="second-item d-flex justify-content-between px-5 px-md-0">
                  <div class="second-item-left">
                    <i class="fa-solid fa-arrow-trend-down"></i>
                  </div>
                  <div class="second-item-right">
                    <span>Not Live SKUs</span> <br />
                    <span>1500</span>
                  </div>
                </div>
                <div class="second-item d-flex justify-content-between px-5 px-md-0">
                  <div class="second-item-left">
                    <i class="fa-solid fa-cart-plus"></i>
                  </div>
                  <div class="second-item-right">
                    <span>Fulfilled by MP</span> <br />
                    <span>15000</span>
                  </div>
                </div>
                <div class="second-item d-flex justify-content-between px-5 px-md-0">
                  <div class="second-item-left">
                    <i class="fa-solid fa-house-chimney-crack"></i>
                  </div>
                  <div class="second-item-right">
                    <span>Fulfilled by stores</span> <br />
                    <span>35000</span>
                  </div>
                </div>
                <div class="second-item d-flex justify-content-between px-5 px-md-0">
                  <div class="second-item-left">
                    <i class="fa-solid fa-cubes"></i>
                  </div>
                  <div class="second-item-right">
                    <span>SOH</span> <br />
                    <span>6500000</span>
                  </div>
                </div>
                <div class="second-item d-flex justify-content-between px-5 px-md-0">
                  <div class="second-item-left">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                  </div>
                  <div class="second-item-right">
                    <span>Marketplace Share</span> <br />
                    <span class="rate-green">12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row table-footer">
          <span style={{ marginTop: "-12px !important", color: "#6c757d" }}>
            Designed for users to instantly see the changes that occur on the
            Category and predicts what will come next.
          </span>
        </div>
      </div>
    </>
  );
};

export default catHero;
