import { useGetPriceQuery } from "features/product/productAPI";
import Chart from "react-apexcharts";
import { Card, Nav, Tab } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "style/mobile.css";
import "style/style.css";

const ChartDtlPage = () => {
	const { productId } = useParams();
	const { data } = useGetPriceQuery(productId);

	const generateData = () => {
		let balanceData = [];
		for (let i = 0; i < 100; i++) {
			balanceData.push(5000 + Math.random() * 100000 + 0.8 * i * i * i);
		}
		return balanceData;
	};

	const getDayBalance = () => {
		let dayDummyData = generateData();
		let dayBalanceData = [];

		for (let i = 0; i < 100; i++) {
			let start = new Date();
			dayBalanceData.push([start.setDate(start.getDate() + i - 100), dayDummyData[i]]);
		}
		return [{ data: dayBalanceData }];
	};

	const getWeekBalance = () => {
		let weekDummyData = generateData();
		let weekBalanceData = [];

		for (let i = 0; i < 100; i++) {
			let start = new Date();
			weekBalanceData.push([start.setDate(start.getDate() + i * 7 - 100 * 7), weekDummyData[i]]);
		}
		return [{ data: weekBalanceData }];
	};

	const getMonthBalance = () => {
		let monthDummyData = generateData();
		let monthBalanceData = [];

		for (let i = 0; i < 100; i++) {
			let start = new Date();
			monthBalanceData.push([start.setDate(start.getDate() + i * 30 - 100 * 30), monthDummyData[i]]);
		}
		return [{ data: monthBalanceData }];
	};

	const getYearBalance = () => {
		let yearDummyData = generateData();
		let yearBalanceData = [];

		for (let i = 0; i < 100; i++) {
			let start = new Date();
			yearBalanceData.push([start.setDate(start.getDate() + i * 365 - 100 * 365), yearDummyData[i]]);
		}
		return [{ data: yearBalanceData }];
	};

	const colors = ["#0acf97"];

	const apexChartOpts = {
		chart: {
			type: "area",
			height: 350,
			toolbar: {
				show: false,
			},
		},
		colors: colors,
		dataLabels: {
			enabled: false,
		},
		stroke: {
			width: 1,
		},
		markers: {
			size: 0,
			style: "hollow",
		},
		xaxis: {
			type: "datetime",
			tickAmount: 6,
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return "$" + value;
				},
			},
		},
		tooltip: {
			x: {
				format: "dd MMM yyyy",
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0,
				stops: [0, 100],
			},
		},
	};

	return (
		<div>
			<div className="">
				<Card className="mb-3">
					<Card.Body className="chart-bg py-3 px-4">
						<Tab.Container defaultActiveKey="day">
							<div className="align-items-center d-sm-flex justify-content-sm-between mb-3 pt-2 pb-2">
								<h4 className="header-title mb-0 fw-normal">BUYBOX PRICE STATUS</h4>
								<Nav as="ul" variant="pills" className="bg-nav-pills p-1 rounded">
									<Nav.Item as="li">
										<Nav.Link as={Link} className="py-2 px-3" to="#" eventKey="day">
											L 24 Hour
										</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li">
										<Nav.Link as={Link} className="py-2 px-3" to="#" eventKey="week">
											L 7 Day
										</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li">
										<Nav.Link as={Link} className="py-2 px-3" to="#" eventKey="month">
											L 2 Weeks
										</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li">
										<Nav.Link as={Link} className="py-2 px-3" to="#" eventKey="year">
											L Month
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
							<Tab.Content>
								<Tab.Pane eventKey="day">
									<Chart
										options={apexChartOpts}
										series={[{ data }]}
										type="area"
										className="apex-charts"
										height={346}
									/>
								</Tab.Pane>
								<Tab.Pane eventKey="week">
									<Chart
										options={apexChartOpts}
										series={getWeekBalance()}
										type="area"
										className="apex-charts"
										height={346}
									/>
								</Tab.Pane>
								<Tab.Pane eventKey="month">
									<Chart
										options={apexChartOpts}
										series={getMonthBalance()}
										type="area"
										className="apex-charts"
										height={346}
									/>
								</Tab.Pane>
								<Tab.Pane eventKey="year">
									<Chart
										options={apexChartOpts}
										series={getYearBalance()}
										type="area"
										className="apex-charts"
										height={346}
									/>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Card.Body>
				</Card>
				<div class="row table-footer mt-0">
					<span className="px-0">
						The SKU Markets chart is designed for users to instantly see the changes that occur on the
						marketplaces and predicts what will come next.
					</span>
				</div>
			</div>
		</div>
	);
};

export default ChartDtlPage;
