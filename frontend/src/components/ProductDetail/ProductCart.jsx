import { Tooltip } from "bootstrap";
import { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";
import noon from "static/images/noon.png";

const ProductCart = ({ product }) => {
	const [isStatus, setStatus] = useState("");

	const handelClick = (e) => {
		if (isStatus === "") {
			setStatus("24h");
		} else if (isStatus === "24h") {
			setStatus("7d");
		} else if (isStatus === "7d") {
			setStatus("30d");
		} else {
			setStatus("");
		}
	};

	const parentCalc = (value) => {
		if (isStatus === "") {
			const value = "24h";
			return value;
		} else if (isStatus === "24h") {
			const value = "7d";
			return value;
		} else {
			const value = "30d";
			return value;
		}
	};
	return (
		<div className="container-width product">
			<div className="row product-card">
				<div className="col-md-7">
					<div className="product-card-left ">
						<div className="row p-3">
							<div className="col-md-4">
								<div className="product-left">
									<div className="row">
										<div className="col-md-4 col-4">
											<img src={product?.image?.split(",")[0]} width="80px" height="70px" alt="" />
										</div>
										<div className="col-md-8 col-8 d-flex product-logo-row">
											<div className="row product-id">
												<a href="https://www.noon.com/N35997789A/p/" target="_blank" rel="noreferrer">
													{product.sku}
												</a>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-9 col-9">
											<span className="text-bold">Rank</span>
											<i className=" fa-solid fa-circle-info info-icon ms-1"></i>
										</div>
										<div className="col-md-3 col-3 justify-content-between d-flex">
											<span>{product.rank}</span>
										</div>
									</div>

									<div className="row">
										<div className="col-md-9 col-9">
											<span className="text-bold">Rate</span>
											<i className="fa-solid fa-circle-info info-icon ms-1" title="Tooltip on right"></i>
										</div>
										<div className="col-md-3 col-3 d-flex product-logo-row">
											<span>{product.rating}</span>
										</div>
									</div>
									<div className="row">
										<div className="col-md-9 col-9">
											<span className="text-bold">SKU Marketplace</span>
											<i
												className="fa-solid fa-circle-info info-icon ms-1"
												tabIndex="0"
												data-bs-toggle="popover"
												data-bs-trigger="hover"
												data-bs-content="And here's some amazing content. It's very engaging. Right?"
											></i>
										</div>
										<div className="col-md-3 col-3 d-flex product-logo-row">
											<img src={noon} className="marketplace-logo" alt="" />
										</div>
									</div>

									<div className="row">
										<div className="col-md-9 col-9">
											<span className="text-bold">No. Of Sellers</span>
											<i className="fa-solid fa-circle-info info-icon ms-1" title="Tooltip on right"></i>
										</div>
										<div className="col-md-3 col-3 d-flex product-logo-row">
											<span>{product.sellers}</span>
										</div>
									</div>

									<div className="row">
										<div className="col-md-4 col-4">
											<span className="text-bold">Tags</span>
										</div>
										<div className="col-md-8 col-8">
											<span>{product?.tags[0]}</span>
											<br />
											<span>{product?.tags[1]}</span>
											<br />
											<span>{product?.tags[2]}</span>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3">
								<div className="product-middle">
									<div className="row alert-icon">
										<div className="col-md-6 col-6">
											<i className="fa-regular fa-star"></i>
										</div>
										<div className="col-md-6 col-6">
											<i className="fa-regular fa-bell"></i>
										</div>
									</div>

									<div className="row" style={{ paddingTop: "40px" }}>
										<div className="col-md-12">
											<span>0 Watchlists</span>
										</div>
									</div>

									<div className="row">
										<div className="col-md-12">
											<span>0 price Alerts</span>
										</div>
									</div>

									<div className="row">
										<div className="col-md-12"></div>
									</div>

									<div className="row">
										<div className="col-md-12"></div>
									</div>
								</div>
							</div>

							<div className="col-md-5">
								<div className="product-right">
									<div className="row text-bold">
										<span style={{ fontSize: "12px" }}>
											BuyBox Sale Price
											<i
												className="fa-solid fa-circle-info info-icon ms-1"
												tabIndex="0"
												data-bs-toggle="popover"
												data-bs-trigger="hover"
												data-bs-content="And here's some amazing content. It's very engaging. Right?"
											></i>
										</span>
										<span className="h3">{product?.current_price}</span>
									</div>

									<div
										className="row"
										style={{
											paddingTop: "10px",
											paddingBottom: "15px",
										}}
									>
										<span>
											<font className="rate-big">{product.MaxPrice}</font>
											<font className="rate-green">{product.Chg24H}</font>
										</span>
									</div>
								</div>

								<div className="styled__PriceBarContainer-sc-1atf4dj-2 iDyHKc text-bold">
									<div className="styled__Row-sc-1atf4dj-3 kLGbRb">
										Low
										<div
											style={{
												height: "6px",
												width: "70%",
											}}
											className="styled__ProgressBarComponent-sc-tiak8-0 fBqrhZ"
										>
											<div className="progress">
												<div
													className="progress-bar"
													role="progressbar"
													style={{
														width: product.LowHigh,
													}}
													aria-valuenow="25"
													aria-valuemin="0"
													aria-valuemax="80"
												></div>
											</div>
										</div>
										High
										<div
											style={{
												marginLeft: "5px",
											}}
										>
											<button
												onClick={handelClick}
												className="label__Label-sc-1p5pknx-0 styled__StyledHistoricalButton-sc-zcqu0d-0 iBByqe kqciMg rate-btn"
											>
												{parentCalc(24)}
											</button>
										</div>
									</div>
								</div>
								<div className="row" style={{ paddingTop: "10px" }}>
									<div className="col-md-8">
										<span>AED 17,87</span>
									</div>
									<div className="col-md-4">
										<span>AED 20,87</span>
									</div>
								</div>

								<div className="row d-flex product-soh" style={{ paddingBottom: "0px" }}>
									<div className="col-md-9">
										<span className="text-bold">
											Estimated SOH
											<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
												<span className="d-inline-block">
													<i className="fa-solid fa-circle-info info-icon ms-1 d-inline-block"></i>
												</span>
											</OverlayTrigger>
										</span>
									</div>
									<div className="col-md-3 d-flex product-logo-row">
										<span>{product?.estimated_SOH}</span>
									</div>
								</div>

								<div className="row d-flex">
									<div className="col-md-9">
										<span className="text-bold">
											Estimated SU Last 24h
											<i
												className="fa-solid fa-circle-info info-icon ms-1"
												tabIndex="0"
												data-bs-toggle="popover"
												data-bs-trigger="hover"
												data-bs-content="And here's some amazing content. It's very engaging. Right?"
											></i>
										</span>
									</div>
									<div className="col-md-3 d-flex product-logo-row">
										<span>{product?.sold_24_hours}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row table-footer">
						<span>
							Designed for users to instantly see the changes that occur on the SKU and predicts what will
							come next.
						</span>
					</div>
				</div>

				<div className="col-md-5">
					<div className="product-card-right p-3 pt-4">
						<div className="row ">
							<div className="col-md-4 col-4">
								<span className="text-bold">Sku Title: </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-8 col-8">
								<span>{product.title}</span>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4 col-4">
								<span className="text-bold">Sku Category: </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-8 col-8">
								<span>{product.category}</span>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4 col-4">
								<span className="text-bold">Sku Type: </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-8 col-8">
								<span>{product.sku_type}</span>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4 col-4">
								<span className="text-bold">Sku Sub-Type: </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-8 col-8">
								<span>{product.sub_category}</span>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4 col-4">
								<span className="text-bold">Sku Brand: </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-8 col-8">
								<Link to="/brand">{product.brand ?? "brand"}</Link>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4 col-4">
								<span className="text-bold">Sku Description: </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-toggle="tooltip"
									data-placement="right"
									title="Tooltip on right"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-8 col-8">
								<span>{product?.description?.substring(0, 150)}</span>
							</div>
						</div>
					</div>
					<div className="row table-footer">
						<span>Designed for users to instantly see the SKU Description.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCart;
