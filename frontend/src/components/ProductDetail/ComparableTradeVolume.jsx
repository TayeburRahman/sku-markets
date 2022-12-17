import { useGetAllProductsQuery } from "features/product/productAPI";
import { Link } from "react-router-dom";
import noon from "static/images/noon.png";
import image from "static/images/products/product.png";
import "./index.css";

const query =
	"limit=5&fields=title,image,sku,rating,rank,current_price,sold_24_hours,estimated_SOH,price_change";

const ComparableTradeVolume = ({ product }) => {
	const { data } = useGetAllProductsQuery(query);

	return (
		<div class="container-width">
			<div class="row trade d-flex flex-column flex-lg-row">
				<div class="col-md-12 col-lg-6 ">
					<div class="trade-left">
						<div class="row table-style">
							<div class="col-7 col-md-6 text-bold">
								<span class="table-title">Comparable trade volume</span>
							</div>
							<div class="col-4 col-md-6 text-bold d-flex justify-content-end">
								<Link
									to="/Dashboard"
									class="tradeFont-size text-primary"
									style={{ color: "blue !important" }}
								>
									See All SKUs <i class="fa-solid fa-angle-right"></i>
								</Link>
							</div>
						</div>
						<div class="">
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="tab-content">
											<div class="tab-pane show active" id="basic-datatable-preview">
												<table id="basic-datatable" class="table dt-responsive nowrap w-100">
													<thead>
														<tr>
															<th class="tradeFont-size text-center">SKU</th>
															<th class="tradeFont-size text-center">Marketplace</th>
															<th class="tradeFont-size text-center">Buybox Sale Price</th>
															<th class="tradeFont-size text-center">Chg 24H</th>
														</tr>
													</thead>

													<tbody className="productTABLrowspace">
														<tr>
															<td>
																<div class="row d-flex flex-column flex-md-row">
																	<div class="col-lg-4 col-4">
																		<img src={image} width="50px" height="40px" />
																	</div>
																	<div class="col-lg-8 col-8">
																		<a href="" class="text-bold tradeFont-size">
																			N35997789A
																		</a>
																		<Link
																			to="/Category"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Baby Products
																		</Link>
																		<Link
																			to="/brand"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Tommy Hilfiger
																		</Link>
																	</div>
																</div>
															</td>
															<td class="table-extra ">
																<img className="rowMarginTop" src={noon} width="15px" height="15px" />
															</td>
															<td class="table-extra rowMarginTop">
																<div className="rowMarginTop">30</div>
															</td>
															<td class="table-extra rate-green">
																{" "}
																<div className="rowMarginTop">15%</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="row d-flex flex-column flex-md-row">
																	<div class="col-lg-4 col-4">
																		<img src={image} width="50px" height="40px" />
																	</div>
																	<div class="col-lg-8 col-8">
																		<a href="" class="text-bold tradeFont-size">
																			N35997789A
																		</a>
																		<Link
																			to="/Category"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Baby Products
																		</Link>
																		<Link
																			to="/brand"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Tommy Hilfiger
																		</Link>
																	</div>
																</div>
															</td>
															<td class="table-extra ">
																<img className="rowMarginTop" src={noon} width="15px" height="15px" />
															</td>
															<td class="table-extra">
																{" "}
																<div className="rowMarginTop">30</div>
															</td>
															<td class="table-extra rate-red ">
																{" "}
																<div className="rowMarginTop">-4.04%</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="row d-flex flex-column flex-md-row">
																	<div class="col-lg-4 col-4">
																		<img src={image} width="50px" height="40px" />
																	</div>
																	<div class="col-lg-8 col-8">
																		<a href="" class="text-bold tradeFont-size">
																			N35997789A
																		</a>
																		<Link
																			to="/Category"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Baby Products
																		</Link>
																		<Link
																			to="/brand"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Tommy Hilfiger
																		</Link>
																	</div>
																</div>
															</td>
															<td class="table-extra">
																<img className="rowMarginTop" src={noon} width="15px" height="15px" />
															</td>
															<td class="table-extra">
																{" "}
																<div className="rowMarginTop">22</div>
															</td>
															<td class="table-extra rate-green">
																{" "}
																<div className="rowMarginTop">15%</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="row d-flex flex-column flex-md-row">
																	<div class="col-lg-4 col-4">
																		<img src={image} width="50px" height="40px" alt="" />
																	</div>
																	<div class="col-lg-8 col-8">
																		<a href="" class="text-bold tradeFont-size">
																			N35997789A
																		</a>
																		<Link
																			to="/Category"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Baby Products
																		</Link>
																		<Link
																			to="/brand"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Tommy Hilfiger
																		</Link>
																	</div>
																</div>
															</td>
															<td class="table-extra">
																<img className="rowMarginTop" src={noon} width="15px" height="15px" alt="" />
															</td>
															<td class="table-extra">
																{" "}
																<div className="rowMarginTop">1</div>
															</td>
															<td class="table-extra rate-green">
																{" "}
																<div className="rowMarginTop">15%</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="row d-flex flex-column flex-md-row">
																	<div class="col-lg-4 col-4">
																		<img src={image} width="50px" height="40px" alt="" />
																	</div>
																	<div class="col-lg-8 col-8">
																		<a href="" class="text-bold tradeFont-size">
																			N35997789A
																		</a>
																		<Link
																			to="/Category"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Baby Products
																		</Link>
																		<Link
																			to="/brand"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Tommy Hilfiger
																		</Link>
																	</div>
																</div>
															</td>
															<td class="table-extra">
																<img className="rowMarginTop" src={noon} width="15px" height="15px" alt="" />
															</td>
															<td class="table-extra">
																{" "}
																<div className="rowMarginTop">3</div>
															</td>
															<td class="table-extra rate-green">
																{" "}
																<div className="rowMarginTop">15%</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row table-footer">
						<span style={{ marginTop: "-10px !important" }}>
							Of all the top SKUs on marketplace, these are the closest in trade volume.
						</span>
					</div>
				</div>
				<div class="col-md-12 col-lg-6 pt-4 pt-lg-0">
					<div class="trade-left">
						<div class="row table-style">
							<div class="col-7 col-md-6 text-bold">
								<span class="table-title">Comparable trade volume</span>
							</div>
							<div class="col-4 col-md-6 text-bold d-flex justify-content-end">
								<Link
									to="/Dashboard"
									class="tradeFont-size text-primary"
									style={{ color: "blue !important" }}
								>
									See All SKUs <i class="fa-solid fa-angle-right"></i>
								</Link>
							</div>
						</div>
						<div class="">
							<div class="col-12">
								<div class="card">
									<div class="card-body">
										<div class="tab-content">
											<div class="tab-pane show active" id="basic-datatable-preview">
												<table id="basic-datatable" class="table dt-responsive nowrap w-100">
													<thead>
														<tr>
															<th class="tradeFont-size text-center">SKU</th>
															<th class="tradeFont-size text-center">Marketplace</th>
															<th class="tradeFont-size text-center">Buybox Sale Price</th>
															<th class="tradeFont-size text-center">Chg 24H</th>
														</tr>
													</thead>

													<tbody className="productTABLrowspace">
														<tr>
															<td>
																<div class="row d-flex flex-column flex-md-row">
																	<div class="col-lg-4 col-4">
																		<img src={image} width="50px" height="40px" />
																	</div>
																	<div class="col-lg-8 col-8">
																		<a href="" class="text-bold tradeFont-size">
																			N35997789A
																		</a>
																		<Link
																			to="/Category"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Baby Products
																		</Link>
																		<Link
																			to="/brand"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Tommy Hilfiger
																		</Link>
																	</div>
																</div>
															</td>
															<td class="table-extra ">
																<img className="rowMarginTop" src={noon} width="15px" height="15px" />
															</td>
															<td class="table-extra rowMarginTop">
																<div className="rowMarginTop">30</div>
															</td>
															<td class="table-extra rate-green">
																{" "}
																<div className="rowMarginTop">15%</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="row d-flex flex-column flex-md-row">
																	<div class="col-lg-4 col-4">
																		<img src={image} width="50px" height="40px" />
																	</div>
																	<div class="col-lg-8 col-8">
																		<a href="" class="text-bold tradeFont-size">
																			N35997789A
																		</a>
																		<Link
																			to="/Category"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Baby Products
																		</Link>
																		<Link
																			to="/brand"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Tommy Hilfiger
																		</Link>
																	</div>
																</div>
															</td>
															<td class="table-extra ">
																<img className="rowMarginTop" src={noon} width="15px" height="15px" />
															</td>
															<td class="table-extra">
																{" "}
																<div className="rowMarginTop">30</div>
															</td>
															<td class="table-extra rate-red ">
																{" "}
																<div className="rowMarginTop">-4.04%</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="row d-flex flex-column flex-md-row">
																	<div class="col-lg-4 col-4">
																		<img src={image} width="50px" height="40px" />
																	</div>
																	<div class="col-lg-8 col-8">
																		<a href="" class="text-bold tradeFont-size">
																			N35997789A
																		</a>
																		<Link
																			to="/Category"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Baby Products
																		</Link>
																		<Link
																			to="/brand"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Tommy Hilfiger
																		</Link>
																	</div>
																</div>
															</td>
															<td class="table-extra">
																<img className="rowMarginTop" src={noon} width="15px" height="15px" />
															</td>
															<td class="table-extra">
																{" "}
																<div className="rowMarginTop">22</div>
															</td>
															<td class="table-extra rate-green">
																{" "}
																<div className="rowMarginTop">15%</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="row d-flex flex-column flex-md-row">
																	<div class="col-lg-4 col-4">
																		<img src={image} width="50px" height="40px" />
																	</div>
																	<div class="col-lg-8 col-8">
																		<a href="" class="text-bold tradeFont-size">
																			N35997789A
																		</a>
																		<Link
																			to="/Category"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Baby Products
																		</Link>
																		<Link
																			to="/brand"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Tommy Hilfiger
																		</Link>
																	</div>
																</div>
															</td>
															<td class="table-extra">
																<img className="rowMarginTop" src={noon} width="15px" height="15px" />
															</td>
															<td class="table-extra">
																{" "}
																<div className="rowMarginTop">1</div>
															</td>
															<td class="table-extra rate-green">
																{" "}
																<div className="rowMarginTop">15%</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="row d-flex flex-column flex-md-row">
																	<div class="col-lg-4 col-4">
																		<img src={image} width="50px" height="40px" />
																	</div>
																	<div class="col-lg-8 col-8">
																		<a href="" class="text-bold tradeFont-size">
																			N35997789A
																		</a>
																		<Link
																			to="/Category"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Baby Products
																		</Link>
																		<Link
																			to="/brand"
																			onClick={() => window.scrollTo(0, 0)}
																			class="table-font text-primary"
																		>
																			Tommy Hilfiger
																		</Link>
																	</div>
																</div>
															</td>
															<td class="table-extra">
																<img className="rowMarginTop" src={noon} width="15px" height="15px" />
															</td>
															<td class="table-extra">
																{" "}
																<div className="rowMarginTop">3</div>
															</td>
															<td class="table-extra rate-green">
																{" "}
																<div className="rowMarginTop">15%</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row table-footer">
						<span style={{ marginTop: "-10px !important" }}>
							Of all the top SKUs on marketplace, these are the closest in trade volume.
						</span>
					</div>
				</div>
				{/* <div class="col-md-12 col-lg-6 pt-4 pt-lg-0">
          <div class=" trade-right">
            <div class="row table-style">
              <div class="col-7 col-md-6 text-bold">
                <span class="table-title">People also view</span>
              </div>
              <div class="col-4 col-md-6 text-bold d-flex justify-content-end">
                <a href="" class="tradeFont-size" style={{ text-primarycolor: 'blue !>
                  See All SKUs <i class="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div class="">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="tab-content">
                      <div
                        class="tab-pane show active"
                        id="basic-datatable-preview"
                      >
                        <table
                          id="basic-datatable"
                          class="table dt-responsive nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th class="table-heading">SKU</th>
                              <th
                                class="table-heading"
                         
                              >
                                Marketplace
                              </th>
                              <th class="table-heading" >
                                Buybox Sale Price
                              </th>
                              <th class="table-heading">Chg 24h</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>
                                <div class="row d-flex flex-column flex-md-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold tradeFont-size">
                                      N35997789A
                                    </a>
                                    <span Link to='/Category's="table-font">
                                     text-primary  Baby Products
                                    </span>
                                    <span classLink to='/brand'table-font">
                                     text-primary  Tommy Hilfiger
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td class="table-extra">30</td>
                              <td class="table-extra rate-green">15%</td>
                            </tr>
                            <tr>
                              <td>
                                <div class="row d-flex flex-column flex-md-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold tradeFont-size">
                                      N35997789A
                                    </a>
                                    <span Link to='/Category's="table-font">
                                     text-primary  Baby Products
                                    </span>
                                    <span classLink to='/brand'table-font">
                                     text-primary  Tommy Hilfiger
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td class="table-extra">30</td>
                              <td class="table-extra rate-red">-4.04%</td>
                            </tr>
                            <tr>
                              <td>
                                <div class="row d-flex flex-column flex-md-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold tradeFont-size">
                                      N35997789A
                                    </a>
                                    <span Link to='/Category's="table-font">
                                     text-primary  Baby Products
                                    </span>
                                    <span classLink to='/brand'table-font">
                                     text-primary  Tommy Hilfiger
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td class="table-extra">22</td>
                              <td class="table-extra rate-green">15%</td>
                            </tr>
                            <tr>
                              <td>
                                <div class="row d-flex flex-column flex-md-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold tradeFont-size">
                                      N35997789A
                                    </a>
                                    <span Link to='/Category's="table-font">
                                     text-primary  Baby Products
                                    </span>
                                    <span classLink to='/brand'table-font">
                                     text-primary  Tommy Hilfiger
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td class="table-extra">1</td>
                              <td class="table-extra rate-green">15%</td>
                            </tr>
                            <tr>
                              <td>
                                <div class="row d-flex flex-column flex-md-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold tradeFont-size">
                                      N35997789A
                                    </a>
                                    <span Link to='/Category's="table-font">
                                     text-primary  Baby Products
                                    </span>
                                    <span classLink to='/brand'table-font">
                                     text-primary  Tommy Hilfiger
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td class="table-extra">3</td>
                              <td class="table-extra rate-red">-4.04%</td>
                            </tr>
                            <tr>
                              <td>
                                <div class="row d-flex flex-column flex-md-row">
                                  <div class="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div class="col-lg-8 col-8">
                                    <a href="" class="text-bold tradeFont-size">
                                      N35997789A
                                    </a>
                                    <span Link to='/Category's="table-font">
                                     text-primary  Baby Products
                                    </span>
                                    <span classLink to='/brand'table-font">
                                     text-primary  Tommy Hilfiger
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td class="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td class="table-extra">77</td>
                              <td class="table-extra rate-green">15%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row table-footer">
            <span style={{marginTop: '-10px !important'}}>
              People who viewed This SKU tend to also view the following SKUs on
              marketplace.
            </span>
          </div>
        </div> */}
			</div>
		</div>
	);
};

export default ComparableTradeVolume;
