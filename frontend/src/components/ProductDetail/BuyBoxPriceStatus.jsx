import ChartDtlPage from "./ChartDtlPage";

const BuyBoxPriceStatus = ({ product }) => {
	return (
		<div className="container-width">
			<div className="row multi-line-section ">
				<div className="col-md-8">
					<ChartDtlPage />
					<div className="row table-footer">
						<span>
							The SKU Markets chart is designed for users to instantly see the changes that occur on the
							marketplaces and predicts what will come next.
						</span>
					</div>
				</div>

				<div className="col-md-4">
					<div className="multi-right p-3 ps-3 pe-3">
						<div className="row">
							<div className="col-md-12 text-center">
								<span className="text-bold" style={{ paddingBottom: "5px" }}>
									SKU Analysis & Statistics
								</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>E Marketplace cap </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="">AED {product?.est_market_cap}</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>Trade Volume </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="">AED {product?.trade_value}</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>Chg 24H </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className={product?.price_change > 0 ? "text-success" : "text-red"}>
									{product?.price_change}%
								</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>ASP </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="">AED {product?.average_selling_price}</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>Vol (24h)/MCap </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="">{product?.volume_to_market_cap_ratio}</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>SKU Status </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="rate-green">{product?.sku_status}</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>DOH </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="">44</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>ENR </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="">AED {product?.est_net_revenue}</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>Max Investment </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="">AED {product?.max_investment}</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>Min Investment </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="">AED {product?.min_investment}</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>EQTI </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="">{product?.EQTI}</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>EM </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="rate-green">{product?.estimated_margin}%</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>E Opp to stock </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="rate-green">yes</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>E Opp To Fulfilment </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="rate-green">Yes</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>E Opp To Amazon Fulfilment </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="rate-red">No</span>
							</div>
						</div>
						<div className="row line-border">
							<div className="col-md-7 col-7 text-bold">
								<span>E Opp to Noon Fulfilment </span>
								<i
									className="fa-solid fa-circle-info info-icon ms-1"
									tabIndex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div className="col-md-5 col-5 text-center">
								<span className="rate-red">No</span>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 text-center text-bold">
								<span className="multi-right-bottom">Trading Activity</span>
							</div>
						</div>
						<div className="row text-center">
							<div className="col-md-3 text-bold p-1">
								<span className="">40% Demand</span>
							</div>
							<div className="col-md-6 buy-progress-bar">
								<div className="progress p-1">
									<div
										className="progress-bar"
										role="progressbar"
										start={{ width: "40%" }}
										aria-valuenow="75"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
							<div className="col-md-3 text-bold p-1">
								<span className="text-center ">60% Supply</span>
							</div>
						</div>
					</div>
					<div className="row table-footer">
						<span>Designed for users to instantly see the statistics.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyBoxPriceStatus;
