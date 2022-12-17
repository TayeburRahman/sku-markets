import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Marquee from "components/common/Marquee";
import ChartDtlPage from "components/ProductDetail/ChartDtlPage";
import ComparableTradeVolume from "components/ProductDetail/ComparableTradeVolume";
import Footer from "components/ProductDetail/Footer";
import Header from "components/ProductDetail/Header";
import MarketplaceCompetitors from "components/ProductDetail/MarketplaceCompetitors";
import { useGetProductDetailQuery } from "features/product/productAPI";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "style/mobile.css";
import "style/style.css";
import styled from "styled-components";
import SFlagRing from "../../src/assets/images/noon-saudi.svg";
import NoonPng from "../../src/assets/images/ring.png";
import SkuProduct from "../../src/assets/images/sku-product.png";
import "../components/ProductDetail/index.css";


const ProductDetail = () => {
	const { productId } = useParams();
	const { data, isSuccess } = useGetProductDetailQuery(productId);
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

	const HtmlTooltip = styled(({ className, ...props }) => (
		<Tooltip {...props} classes={{ popper: className }} />
	))(({ theme }) => ({
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: "white",
			border: "1px solid #dadde9",
			color: "black",
		},
	}));

	return (
		<div className="bg-white">
			<Header />
			<div className="mt-3" />
			<Marquee />

			<div class="container-width product">
				<div class="row product-card d-flex flex-column flex-xl-row">
					<div class="col-md-12 col-xl-7">
						<div class="product-card-left section-padding">
							<div class="row">
								<div class="col-md-4">
									<div class="product-left">
										<div class="row">
											<div class="col-md-4 col-4">
												<img src={SkuProduct} width="80px" height="70px" />
											</div>
											<div class="col-md-8 col-8 d-flex product-logo-row">
												<div class="row product-id ">
													<Link className="fs-6" href="https://www.noon.com/N35997789A/p/" target="_blank">
														N35997789A
													</Link>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-9 col-9">
												<span class="text-bold">Rank</span>{" "}
												<i
													class="fa-solid fa-circle-info info-icon"
													tabindex="0"
													data-bs-toggle="popover"
													data-bs-trigger="hover"
													data-bs-content="And here's some amazing content. It's very engaging. Right?"
												></i>
												<HtmlTooltip
													title="And here's some amazing content. It's very engaging. Right?"
													placement="top"
													arrow
													style={{
														backgroundColor: "white",
													}}
												>
													<i class="fa-solid fa-circle-info info-icon"></i>
												</HtmlTooltip>
											</div>

											<div class="col-md-3 col-3 justify-content-between d-flex">
												<span>1</span>
											</div>
										</div>

										<div class="row">
											<div class="col-md-9 col-9">
												<span class="text-bold">Rate</span>{" "}
												<i
													class="fa-solid fa-circle-info info-icon"
													tabindex="0"
													data-bs-toggle="popover"
													data-bs-trigger="hover"
													data-bs-content="And here's some amazing content. It's very engaging. Right?"
												></i>
											</div>
											<div class="col-md-3 col-3 d-flex product-logo-row">
												<span>4.7</span>
											</div>
										</div>

										<div class="row d-flex align-items-center">
											<div class="col-md-9 col-9">
												<span class="text-bold">SKU Marketplace</span>{" "}
												<i
													class="fa-solid fa-circle-info info-icon"
													tabindex="0"
													data-bs-toggle="popover"
													data-bs-trigger="hover"
													data-bs-content="And here's some amazing content. It's very engaging. Right?"
												></i>
											</div>
											<div class="col-md-3 col-3 d-flex product-logo-row">
												<Link to="/marketplace">
													<img src={SFlagRing} width="50px" class="marketplace-logo-product " alt="" />
												</Link>
											</div>
										</div>

										<div class="row">
											<div class="col-md-9 col-9">
												<span class="text-bold">No. Of Sellers</span>{" "}
												<i
													class="fa-solid fa-circle-info info-icon"
													tabindex="0"
													data-bs-toggle="popover"
													data-bs-trigger="hover"
													data-bs-content="And here's some amazing content. It's very engaging. Right?"
												></i>
											</div>
											<div class="col-md-3 col-3 d-flex product-logo-row">
												<span>34</span>
											</div>
										</div>

										<div class="row">
											<div class="col-md-4 col-4">
												<span class="text-bold">Tags</span>
											</div>
											<div class="col-md-8 col-8">
												<span>Trending SKU</span>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-3">
									<div class="product-middle">
										<div class="row alert-icon">
											<div
												class="col-md-6 col-6 watch-modal text-center text-lg-right"
												onclick="myFunction()"
												style={{ textAlign: "right" }}
											>
												<i class="fa-regular fa-star watch-modal-down" id="myDIV"></i>
												<i class="fa-regular fa-star" onclick="standard-watch(myDIV)"></i>
												<div class="watch-modal-down" id="myDIV">
													<h6 class="text-bold">Select Watchlist</h6>

													<br />
													<div
														class="add-watch text-bold"
														data-bs-toggle="modal"
														data-bs-target="#standard-watch"
													>
														<i class="fa-solid fa-circle-plus"></i>
														<span>Add New Watchlist</span>
													</div>
												</div>
											</div>

											<div
												id="standard-watch"
												class="modal fade"
												tabindex="-1"
												role="dialog"
												aria-labelledby="standard-modalLabel"
												aria-hidden="true"
											>
												<div class="modal-dialog modal-dialog-centered">
													<div class="modal-content">
														<div class="modal-header">
															<h4 class="modal-title" id="standard-modalLabel">
																New watchlist
															</h4>
															<button
																type="button"
																class="btn-close"
																data-bs-dismiss="modal"
																aria-hidden="true"
															></button>
														</div>
														<div class="modal-body">
															<div class="new-watch-modal">
																<input type="text" placeholder="Enter Watchlist Title" />
															</div>
														</div>
														<div class="modal-footer">
															<button type="button" class="btn btn-primary">
																Create
															</button>
															<button type="button" class="btn btn-light" data-bs-dismiss="modal">
																Close
															</button>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6 col-6 alert-bell">
												<i
													class="fa-regular fa-bell export"
													data-bs-toggle="modal"
													data-bs-target="#standard-modal"
													style={{
														cursor: "pointer",
													}}
												></i>
											</div>

											<div
												id="standard-modal"
												class="modal fade"
												tabindex="-1"
												role="dialog"
												aria-labelledby="standard-modalLabel"
												aria-hidden="true"
											>
												<div class="modal-dialog">
													<div class="modal-content">
														<div class="modal-header">
															<h4 class="modal-title" id="standard-modalLabel">
																Add New Alert
															</h4>
															<button
																type="button"
																class="btn-close"
																data-bs-dismiss="modal"
																aria-hidden="true"
															></button>
														</div>
														<div class="modal-body">
															<div class="row d-flex justify-content-between">
																<div class="col-md-6 modal-0">
																	<label for="">Platform</label>
																	<br />
																	<select class="common-modal " name="Platform" id="">
																		<option value="Platform">Noon</option>
																		<option value="">Amazon</option>
																	</select>
																</div>
																<div class="col-md-6 modal-0">
																	<label for="">Platform Country</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="0">Select Country</option>
																		<option value="AF">Afghanistan</option>
																		<option value="AL">Albania</option>
																		<option value="DZ">Algeria</option>
																		<option value="AS">American Samoa</option>
																		<option value="AD">Andorra</option>
																		<option value="AO">Angola</option>
																		<option value="AI">Anguilla</option>
																		<option value="AQ">Antarctica</option>
																		<option value="AR">Argentina</option>
																		<option value="AM">Armenia</option>
																		<option value="AW">Aruba</option>
																		<option value="AU">Australia</option>
																		<option value="AT">Austria</option>
																		<option value="AZ">Azerbaijan</option>
																		<option value="BS">Bahamas</option>
																		<option value="BH">Bahrain</option>
																		<option value="BD">Bangladesh</option>
																		<option value="BB">Barbados</option>
																		<option value="BY">Belarus</option>
																		<option value="BE">Belgium</option>
																		<option value="BZ">Belize</option>
																		<option value="BJ">Benin</option>
																		<option value="BM">Bermuda</option>
																		<option value="BT">Bhutan</option>
																		<option value="BO">Bolivia</option>
																		<option value="BW">Botswana</option>
																		<option value="BV">Bouvet Island</option>
																		<option value="BR">Brazil</option>
																		<option value="BN">Brunei Darussalam</option>
																		<option value="BG">Bulgaria</option>
																		<option value="BF">Burkina Faso</option>
																		<option value="BI">Burundi</option>
																		<option value="KH">Cambodia</option>
																		<option value="CM">Cameroon</option>
																		<option value="CA">Canada</option>
																		<option value="CV">Cape Verde</option>
																		<option value="KY">Cayman Islands</option>
																		<option value="CF">Central African Republic</option>
																		<option value="TD">Chad</option>
																		<option value="CL">Chile</option>
																		<option value="CN">China</option>
																		<option value="CX">Christmas Island</option>
																		<option value="CC">Cocos (Keeling) Islands</option>
																		<option value="CO">Colombia</option>
																		<option value="KM">Comoros</option>
																		<option value="CG">Congo</option>
																		<option value="CK">Cook Islands</option>
																		<option value="CR">Costa Rica</option>
																		<option value="CI">Cote d'Ivoire</option>
																		<option value="HR">Croatia (Hrvatska)</option>
																		<option value="CU">Cuba</option>
																		<option value="CY">Cyprus</option>
																		<option value="CZ">Czech Republic</option>
																		<option value="DK">Denmark</option>
																		<option value="DJ">Djibouti</option>
																		<option value="DM">Dominica</option>
																		<option value="DO">Dominican Republic</option>
																		<option value="EC">Ecuador</option>
																		<option value="EG">Egypt</option>
																		<option value="SV">El Salvador</option>
																		<option value="GQ">Equatorial Guinea</option>
																		<option value="ER">Eritrea</option>
																		<option value="EE">Estonia</option>
																		<option value="ET">Ethiopia</option>
																		<option value="FK">Falkland Islands (Malvinas)</option>
																		<option value="FO">Faroe Islands</option>
																		<option value="FJ">Fiji</option>
																		<option value="FI">Finland</option>
																		<option value="FR">France</option>
																		<option value="GF">French Guiana</option>
																		<option value="PF">French Polynesia</option>
																		<option value="GA">Gabon</option>
																		<option value="GM">Gambia</option>
																		<option value="GE">Georgia</option>
																		<option value="DE">Germany</option>
																		<option value="GH">Ghana</option>
																		<option value="GI">Gibraltar</option>
																		<option value="GR">Greece</option>
																		<option value="GL">Greenland</option>
																		<option value="GD">Grenada</option>
																		<option value="GP">Guadeloupe</option>
																		<option value="GU">Guam</option>
																		<option value="GT">Guatemala</option>
																		<option value="GN">Guinea</option>
																		<option value="GW">Guinea-Bissau</option>
																		<option value="GY">Guyana</option>
																		<option value="HT">Haiti</option>
																		<option value="HN">Honduras</option>
																		<option value="HK">Hong Kong</option>
																		<option value="HU">Hungary</option>
																		<option value="IS">Iceland</option>
																		<option value="IN">India</option>
																		<option value="ID">Indonesia</option>
																		<option value="IQ">Iraq</option>
																		<option value="IE">Ireland</option>
																		<option value="IL">Israel</option>
																		<option value="IT">Italy</option>
																		<option value="JM">Jamaica</option>
																		<option value="JP">Japan</option>
																		<option value="JO">Jordan</option>
																		<option value="KZ">Kazakhstan</option>
																		<option value="KE">Kenya</option>
																		<option value="KI">Kiribati</option>
																		<option value="KR">Korea, Republic of</option>
																		<option value="KW">Kuwait</option>
																		<option value="KG">Kyrgyzstan</option>
																		<option value="LV">Latvia</option>
																		<option value="LB">Lebanon</option>
																		<option value="LS">Lesotho</option>
																		<option value="LR">Liberia</option>
																		<option value="LY">Libyan Arab Jamahiriya</option>
																		<option value="LI">Liechtenstein</option>
																		<option value="LT">Lithuania</option>
																		<option value="LU">Luxembourg</option>
																		<option value="MO">Macau</option>
																		<option value="MG">Madagascar</option>
																		<option value="MW">Malawi</option>
																		<option value="MY">Malaysia</option>
																		<option value="MV">Maldives</option>
																		<option value="ML">Mali</option>
																		<option value="MT">Malta</option>
																		<option value="MH">Marshall Islands</option>
																		<option value="MQ">Martinique</option>
																		<option value="MR">Mauritania</option>
																		<option value="MU">Mauritius</option>
																		<option value="YT">Mayotte</option>
																		<option value="MX">Mexico</option>
																		<option value="MD">Moldova, Republic of</option>
																		<option value="MC">Monaco</option>
																		<option value="MN">Mongolia</option>
																		<option value="MS">Montserrat</option>
																		<option value="MA">Morocco</option>
																		<option value="MZ">Mozambique</option>
																		<option value="MM">Myanmar</option>
																		<option value="NA">Namibia</option>
																		<option value="NR">Nauru</option>
																		<option value="NP">Nepal</option>
																		<option value="NL">Netherlands</option>
																		<option value="AN">Netherlands Antilles</option>
																		<option value="NC">New Caledonia</option>
																		<option value="NZ">New Zealand</option>
																		<option value="NI">Nicaragua</option>
																		<option value="NE">Niger</option>
																		<option value="NG">Nigeria</option>
																		<option value="NU">Niue</option>
																		<option value="NF">Norfolk Island</option>
																		<option value="MP">Northern Mariana Islands</option>
																		<option value="NO">Norway</option>
																		<option value="OM">Oman</option>
																		<option value="PW">Palau</option>
																		<option value="PA">Panama</option>
																		<option value="PG">Papua New Guinea</option>
																		<option value="PY">Paraguay</option>
																		<option value="PE">Peru</option>
																		<option value="PH">Philippines</option>
																		<option value="PN">Pitcairn</option>
																		<option value="PL">Poland</option>
																		<option value="PT">Portugal</option>
																		<option value="PR">Puerto Rico</option>
																		<option value="QA">Qatar</option>
																		<option value="RE">Reunion</option>
																		<option value="RO">Romania</option>
																		<option value="RU">Russian Federation</option>
																		<option value="RW">Rwanda</option>
																		<option value="KN">Saint Kitts and Nevis</option>
																		<option value="LC">Saint LUCIA</option>
																		<option value="WS">Samoa</option>
																		<option value="SM">San Marino</option>
																		<option value="ST">Sao Tome and Principe</option>
																		<option value="SA">Saudi Arabia</option>
																		<option value="SN">Senegal</option>
																		<option value="SC">Seychelles</option>
																		<option value="SL">Sierra Leone</option>
																		<option value="SG">Singapore</option>
																		<option value="SK">Slovakia (Slovak Republic)</option>
																		<option value="SI">Slovenia</option>
																		<option value="SB">Solomon Islands</option>
																		<option value="SO">Somalia</option>
																		<option value="ZA">South Africa</option>
																		<option value="ES">Spain</option>
																		<option value="LK">Sri Lanka</option>
																		<option value="SH">St. Helena</option>
																		<option value="PM">St. Pierre and Miquelon</option>
																		<option value="SD">Sudan</option>
																		<option value="SR">Suriname</option>
																		<option value="SZ">Swaziland</option>
																		<option value="SE">Sweden</option>
																		<option value="CH">Switzerland</option>
																		<option value="SY">Syrian Arab Republic</option>
																		<option value="TW">Taiwan, Province of China</option>
																		<option value="TJ">Tajikistan</option>
																		<option value="TZ">Tanzania, United Republic of</option>
																		<option value="TH">Thailand</option>
																		<option value="TG">Togo</option>
																		<option value="TK">Tokelau</option>
																		<option value="TO">Tonga</option>
																		<option value="TT">Trinidad and Tobago</option>
																		<option value="TN">Tunisia</option>
																		<option value="TR">Turkey</option>
																		<option value="TM">Turkmenistan</option>
																		<option value="TC">Turks and Caicos Islands</option>
																		<option value="TV">Tuvalu</option>
																		<option value="UG">Uganda</option>
																		<option value="UA">Ukraine</option>
																		<option value="AE">United Arab Emirates</option>
																		<option value="GB">United Kingdom</option>
																		<option value="US">United States</option>
																		<option value="UY">Uruguay</option>
																		<option value="UZ">Uzbekistan</option>
																		<option value="VU">Vanuatu</option>
																		<option value="VE">Venezuela</option>
																		<option value="VN">Viet Nam</option>
																		<option value="VG">Virgin Islands (British)</option>
																		<option value="VI">Virgin Islands (U.S.)</option>
																		<option value="WF">Wallis and Futuna Islands</option>
																		<option value="EH">Western Sahara</option>
																		<option value="YE">Yemen</option>
																		<option value="ZM">Zambia</option>
																		<option value="ZW">Zimbabwe</option>
																	</select>
																</div>
															</div>

															<div class="row">
																<div class="col-md-6 modal-1">
																	<label for="">Category</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="Platform">Baby</option>
																		<option value="">All categories available </option>
																	</select>
																</div>
																<div class="col-md-6 modal-1">
																	<label for="">SKU Type</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="Platform">Noon</option>
																		<option value="">All type available </option>
																	</select>
																</div>
															</div>

															<div class="row">
																<div class="col-md-6 modal-1">
																	<label for="">SKU Sub- Type</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="Platform">All Subtype available </option>
																		<option value="">Amazon</option>
																	</select>
																</div>
																<div class="col-md-6 modal-1">
																	<label for="">Fulfilment SKU Type</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="Platform">All Fulfilment type available </option>
																		<option value="">Amazon</option>
																	</select>
																</div>
															</div>

															<div class="row">
																<div class="col-md-6 modal-1">
																	<label for="">Brand</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="Platform">Follow</option>
																		<option value="">All brand Available </option>
																	</select>
																</div>
																<div class="col-md-6 modal-1">
																	<label for="">SKU/ ASIN</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="Platform">Noon</option>
																		<option value="">Amazon</option>
																	</select>
																</div>
															</div>

															<div class="row">
																<div class="col-md-6 modal-1">
																	<label for="">Alert type</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="">Price Range</option>
																		<option value="">Price Moves Above</option>
																		<option value="">Price Moves Down</option>
																		<option value="">Stock Range</option>
																		<option value="">Stock Moves Above</option>
																		<option value="">Stock Moves Down</option>
																		<option value="">Stores Range</option>
																		<option value="">Stores Moves Above</option>
																		<option value="">Stores Moves Down</option>
																		<option value="">Price Change Absolute (Abs)</option>
																		<option value="">Stock Change Absolute (Abs)</option>
																		<option value="">SKU to Stock</option>
																		<option value="">SKU to Fulfilment</option>
																	</select>
																</div>
																<div class="col-md-6 modal-1">
																	<label for="">Description</label>
																	<br />
																	<span>Notifies when price exiting the range.</span>
																</div>
															</div>

															<div class="row">
																<div class="col-md-6 modal-1">
																	<label for="">Price moves below</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="">Price Range</option>
																		<option value="">Price Moves Above</option>
																	</select>
																</div>
																<div class="col-md-6 modal-1">
																	<label for="">Price moves above</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="Platform">Noon</option>
																		<option value="">Amazon</option>
																	</select>
																</div>
															</div>

															<div class="row">
																<div class="col-md-6 modal-1">
																	<label for="">Frequency</label>
																	<br />
																	<select class="common-modal" name="Platform" id="">
																		<option value="">Price Range</option>
																		<option value="">Price Moves Above</option>
																	</select>
																</div>
															</div>

															<div class="row">
																<div class="col-md-6 modal-1">
																	<label for="">Comment</label>
																	<br />
																	<input type="tex-box" class="common-modal" />
																</div>
															</div>

															<div class="row">
																<div class="col-md-12 modal-1">
																	<span
																		style={{
																			paddingRight: "10px",
																		}}
																	>
																		Delivery Method
																	</span>
																	<input
																		style={{
																			paddingRight: "10px",
																		}}
																		type="checkbox"
																	/>
																	<span
																		style={{
																			paddingRight: "10px",
																		}}
																	>
																		Whatsapp
																	</span>
																	<input type="checkbox" />
																	<span>Email</span>
																</div>
															</div>

															<div class="row">
																<div class="col-md-12 modal-1">
																	<input
																		type="text-box"
																		placeholder="summary"
																		style={{
																			padding: "7px",
																			width: "100%",
																			borderColor: "#EFF2F5",
																		}}
																	/>
																</div>
															</div>
														</div>
														<div class="modal-footer">
															{/* <!-- <span class="d-flex" style="text-align: left !important;">Total SKUs: 688</span> --> */}
															<button type="button" class="btn btn-primary">
																Add Alert
															</button>
															<button type="button" class="btn btn-light" data-bs-dismiss="modal">
																Close
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="row" style={{ paddingTop: "40px" }}>
											<div class="col-md-12">
												<span>3,943 Watchlists</span>
											</div>
										</div>

										<div class="row">
											<div class="col-md-12">
												<span>10 price Alerts</span>
											</div>
										</div>

										<div class="row" style={{ paddingTop: "40px" }}>
											<div class="col-md-12 text-bold">
												<span>Updated: 21 minutes ago</span>
											</div>
										</div>

										<div class="row">
											<div class="col-md-12"></div>
										</div>
									</div>
								</div>

								<div class="col-md-5">
									<div class="product-right">
										<div class="row text-bold">
											<span style={{ fontSize: "12px" }}>
												Buybox Sale Price{" "}
												<i
													class="fa-solid fa-circle-info info-icon"
													tabindex="0"
													data-bs-toggle="popover"
													data-bs-trigger="hover"
													data-bs-content="And here's some amazing content. It's very engaging. Right?"
												></i>
											</span>
										</div>

										<div
											class="row"
											style={{
												paddingTop: "10px",
												paddingBottom: "15px",
											}}
										>
											<span>
												AED <font class="rate-big">18,87 </font> <font class="rate-green">3015%</font>
											</span>
										</div>
									</div>

									<div class="styled__PriceBarContainer-sc-1atf4dj-2 iDyHKc text-bold">
										<div class="styled__Row-sc-1atf4dj-3 kLGbRb">
											Low
											<div
												style={{
													height: "6px",
													width: "70%",
												}}
												class="styled__ProgressBarComponent-sc-tiak8-0 fBqrhZ"
											>
												<div class="progress">
													<div
														class="progress-bar"
														role="progressbar"
														style={{ width: "25%" }}
														aria-valuenow="25"
														aria-valuemin="0"
														aria-valuemax="80"
													>
														{" "}
													</div>
												</div>
											</div>
											High
											<div style={{ marginLeft: "5px" }}>
												<button
													onClick={() => handleLabelTime(labelTime)}
													class="label__Label-sc-1p5pknx-0 styled__StyledHistoricalButton-sc-zcqu0d-0 iBByqe kqciMg labelTime-btn"
												>
													{labelTime}
												</button>
											</div>
										</div>
									</div>
									<div class="row" style={{ paddingTop: "10px" }}>
										<div class="col-md-8">
											<span>AED 17,87</span>
										</div>
										<div class="col-md-4">
											<span>AED 20,87</span>
										</div>
									</div>

									<div class="row d-flex product-soh" style={{ paddingBottom: "0px" }}>
										<div class="col-md-9 ">
											<span class="text-bold ">
												Estimated SOH{" "}
												<i
													class="fa-solid fa-circle-info info-icon"
													tabindex="0"
													data-bs-toggle="popover"
													data-bs-trigger="hover"
													data-bs-content="And here's some amazing content. It's very engaging. Right?"
												></i>
											</span>
										</div>
										<div class="col-md-3 d-flex product-logo-row">
											<span>4300</span>
										</div>
									</div>

									<div class="row d-flex">
										<div class="col-md-9">
											<span class="text-bold ">
												Estimated SU Last 24h{" "}
												<i
													class="fa-solid fa-circle-info info-icon"
													tabindex="0"
													data-bs-toggle="popover"
													data-bs-trigger="hover"
													data-bs-content="And here's some amazing content. It's very engaging. Right?"
												></i>
											</span>
										</div>
										<div class="col-md-3 d-flex product-logo-row">
											<span>120</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row table-footer">
							<span>
								Designed for users to instantly see the changes that occur on the SKU and predicts what will
								come next.
							</span>
						</div>
					</div>

					<div class="col-md-12 col-xl-5 pt-3 pt-lg-0">
						<div class="product-card-right my-2 py-4 section-padding">
							<div class="row">
								<div class="col-md-4 col-4">
									<span class="text-bold ">Sku Title: </span>
									<i
										class="fa-solid fa-circle-info info-icon"
										tabindex="0"
										data-bs-toggle="popover"
										data-bs-trigger="hover"
										data-bs-content="And here's some amazing content. It's very engaging. Right?"
									></i>
								</div>
								<div class="col-md-8 col-8">
									<span>Portable Diaper Organizer</span>
								</div>
							</div>

							<div class="row">
								<div class="col-md-4 col-4">
									<span class="text-bold ">Sku Category: </span>
									<i
										class="fa-solid fa-circle-info info-icon"
										tabindex="0"
										data-bs-toggle="popover"
										data-bs-trigger="hover"
										data-bs-content="And here's some amazing content. It's very engaging. Right?"
									></i>
								</div>
								<div class="col-md-8 col-8">
									<Link to="/Category">
										<span className=" text-primary">Baby Products</span>
									</Link>
								</div>
							</div>

							<div class="row">
								<div class="col-md-4 col-4">
									<span class="text-bold ">Sku Type: </span>
									<i
										class="fa-solid fa-circle-info info-icon"
										tabindex="0"
										data-bs-toggle="popover"
										data-bs-trigger="hover"
										data-bs-content="And here's some amazing content. It's very engaging. Right?"
									></i>
								</div>
								<div class="col-md-8 col-8">
									<span>Diapering</span>
								</div>
							</div>

							<div class="row">
								<div class="col-md-4 col-4">
									<span class="text-bold ">Sku Sub-Type: </span>
									<i
										class="fa-solid fa-circle-info info-icon"
										tabindex="0"
										data-bs-toggle="popover"
										data-bs-trigger="hover"
										data-bs-content="And here's some amazing content. It's very engaging. Right?"
									></i>
								</div>
								<div class="col-md-8 col-8">
									<span>Diaper Stackers & Organisers</span>
								</div>
							</div>

							<div class="row">
								<div class="col-md-4 col-4">
									<span class="text-bold ">Sku Brand: </span>
									<i
										class="fa-solid fa-circle-info info-icon"
										tabindex="0"
										data-bs-toggle="popover"
										data-bs-trigger="hover"
										data-bs-content="And here's some amazing content. It's very engaging. Right?"
									></i>
								</div>
								<div class="col-md-8 col-8">
									<Link to="/brand">
										<span className="text-primary">Beauenty</span>
									</Link>
								</div>
							</div>

							<div class="row">
								<div class="col-md-4 col-4">
									<span class="text-bold  ">Sku Description: </span>
									<i
										class="fa-solid fa-circle-info info-icon"
										tabindex="0"
										data-bs-toggle="popover"
										data-bs-trigger="hover"
										data-bs-content="And here's some amazing content. It's very engaging. Right?"
									></i>
								</div>
								<div class="col-md-8 col-8">
									<span>
										The diaper has a strong t divider that is securely attached to the sides and the bottom,
										and more.
									</span>
								</div>
							</div>
						</div>
						<div class="row table-footer">
							<span>Designed for users to instantly see the SKU Description.</span>
						</div>
					</div>
				</div>
			</div>
			<div className="container-width d-flex flex-column flex-xl-row justify-content-between ">
				<div className="col-md-12 col-xl-8">
					<ChartDtlPage />
				</div>
				<div class="col-md-12 col-xl-4  pt-3 pt-lg-0">
					<div class="multi-right section-padding py-4 ms-0 ms-lg-4">
						<div class="row">
							<div class="col-md-12 text-center">
								<span class="text-bold" style={{ paddingBottom: "5px" }}>
									SKU Analysis & Statistics
								</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>E Marketplace cap </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="">AED 60,090.00</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>Trade Volume </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="">AED 60,090.00</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>Chg 24H </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="rate-red">-4.04%</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>ASP </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="">AED 60,090.00</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>Vol (24h)/MCap </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="">0.7924</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>SKU Status </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="rate-green">Live</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>DOH </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="">44</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>ENR </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="">AED 60,090.00</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>Max Investment </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="">AED 60,090.00</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>Min Investment </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="">AED 60,090.00</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>EQTI </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="">300</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>EM </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="rate-green">15%</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>E Opp to stock </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="rate-green">yes</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>E Opp To Fulfilment </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<span class="rate-green">Yes</span>
							</div>
						</div>
						<div class="row line-border">
							<div class="col-md-7 col-7 text-bold">
								<span>E Opp To Amazon Fulfilment </span>
								<i
									class="fa-solid fa-circle-info info-icon"
									tabindex="0"
									data-bs-toggle="popover"
									data-bs-trigger="hover"
									data-bs-content="And here's some amazing content. It's very engaging. Right?"
								></i>
							</div>
							<div class="col-md-5 col-5 text-center">
								<img src={NoonPng} alt="" width="15px" height="15px" />
							</div>
						</div>
						{/* <!-- <div class="row line-border">
				<div class="col-md-7 col-7 text-bold">
					<span>E Opp to Noon Fulfilment  </span><i class="fa-solid fa-circle-info info-icon" tabindex="0" class="btn btn-dark" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
				</div>
				<div class="col-md-5 col-5 text-center">
					<span class="rate-red">No</span>
				</div>
			</div> --> */}
						<div class="row">
							<div class="col-md-12 text-center text-bold">
								<span class="multi-right-bottom">Trading Activity</span>
							</div>
						</div>
						<div class="row text-center">
							<div class="col-md-3 text-bold">
								<span>40% Demand</span>
							</div>
							<div class="col-md-6 buy-progress-bar d-flex justify-content-center py-3 py-lg-0">
								<div class="progress">
									<div
										class="progress-bar"
										role="progressbar"
										style={{ width: "40%" }}
										aria-valuenow="75"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
							<div class="col-md-3 text-bold">
								<span class="text-center">60% Supply</span>
							</div>
						</div>
					</div>
					<div class="row table-footer ms-0 ms-lg-3">
						<span>Designed for users to instantly see the statistics.</span>
					</div>
				</div>
			</div>
			
			<div>
				<MarketplaceCompetitors />
			</div>
			<ComparableTradeVolume />
			<Footer />
		</div>
	);
};

export default ProductDetail;
