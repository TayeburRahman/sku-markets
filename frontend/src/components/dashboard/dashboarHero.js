import React from "react";
import './dashboard.css'
import SkuProduct from "../../assets/images/sku-product.png";
import SFlagRing from "../../assets/images/noon-saudi.svg";

const DashboardHero = () => {


return (
    <div className="dashboardHeroMain container-width">
    <div className="d-flex justify-content-between"> 

        <div className="heroLeft">
        <div class="d-flex justify-content-between ">
                <div class="col-3 dash-Card me-3">
                  <div class="dash-card-body">
                    <div class="dropdown float-end">
                      <a
                        href="#"
                        class="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-dots-horizontal" style={{fontSize: '22px'}}></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a href="javascript:void(0);" class="dropdown-item">
                          <i class="mdi mdi-cached me-1"></i>Refresh
                        </a>

                        <a href="javascript:void(0);" class="dropdown-item">
                          <i class="mdi mdi-circle-edit-outline me-1"></i>
                          Edit
                        </a>

                        <a
                          href="javascript:void(0);"
                          class="dropdown-item text-danger"
                        >
                          <i class="mdi mdi-delete-outline me-1"></i>Remove
                        </a>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="flex-shrink-0">
                        <div class="avatar-sm rounded">
                          <span class="avatar-title  h3 my-0 text-primary rounded">
                            <img
                              src={SkuProduct}
                              alt=""
                              width="50px;"
                              height="50px;"
                            />
                          </span>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-2 ">
                        <img
                          src={SFlagRing}
                          alt=""
                          width="40px;"
                          height="40px;"
                       style={{width: '58px'}}
                        />
                   
                        <br />
                        <a href="/" class="mt-0 mb-1 font-14">
                          N35997789A
                        </a>
                        <br />
                        <span class="mb-0 rate-green rateFont">
                          <i class="mdi mdi-arrow-up-bold text-success "></i>{" "}
                          4.04%
                        </span>
                      </div>
                    </div>

                    <div class="row align-items-end justify-content-between top-rate-left">
                      <div class="col-sm-7">
                        <h4 class="mt-0 text-muted fw-semibold mb-1 title-size">
                          Buybox Sale Price
                        </h4>
                        <p class="text-bold mb-0" style={{fontSize: '10px'}}>SAR 185</p>
                      </div>

                      <div class="col-sm-5">
                        <div class="text-end">
                            
                          <div
                            id="currency-btc-chart"
                            data-colors="#727cf5"
                            
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 dash-Card me-3">
                  <div class="dash-card-body">
                    <div class="dropdown float-end">
                      <a
                        href="#"
                        class="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="mdi mdi-dots-horizontal" style={{fontSize: '22px'}}></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a href="javascript:void(0);" class="dropdown-item">
                          <i class="mdi mdi-cached me-1"></i>Refresh
                        </a>

                        <a href="javascript:void(0);" class="dropdown-item">
                          <i class="mdi mdi-circle-edit-outline me-1"></i>
                          Edit
                        </a>

                        <a
                          href="javascript:void(0);"
                          class="dropdown-item text-danger"
                        >
                          <i class="mdi mdi-delete-outline me-1"></i>Remove
                        </a>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="flex-shrink-0">
                        <div class="avatar-sm rounded">
                          <span class="avatar-title  h3 my-0 text-primary rounded">
                            <img
                              src={SkuProduct}
                              alt=""
                              width="50px;"
                              height="50px;"
                            />
                          </span>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-2 ">
                        <img
                          src={SFlagRing}
                          alt=""
                          width="40px;"
                          height="40px;"
                       style={{width: '58px'}}
                        />
                   
                        <br />
                        <a href="/" class="mt-0 mb-1 font-14">
                          N35997789A
                        </a>
                        <br />
                        <span class="mb-0 rate-green rateFont">
                          <i class="mdi mdi-arrow-up-bold text-success "></i>{" "}
                          4.04%
                        </span>
                      </div>
                    </div>

                    <div class="row align-items-end justify-content-between top-rate-left">
                      <div class="col-sm-7">
                        <h4 class="mt-0 text-muted fw-semibold mb-1 title-size">
                          Buybox Sale Price
                        </h4>
                        <p class="text-bold mb-0" style={{fontSize: '10px'}}>SAR 185</p>
                      </div>

                      <div class="col-sm-5">
                        <div class="text-end">
                            
                          <div
                            id="currency-btc-chart"
                            data-colors="#727cf5"
                            
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 me-3">
                  <div class="add-card">
                    <div class="add-card-in text-center">
                      <i
                        class="fa-solid fa-plus-minus h6 my-0"
                        data-bs-toggle="modal"
                        data-bs-target="#standard-modal"
                        style={{ cursor: "pointer" }}
                      ></i>{" "}
                      <h4 class="font-16 mt-1 mb-0 d-block">
                        Add New Alert
                      </h4>
                    </div>

                    {/* <!-- alert modal start here --> */}

                     <div class="export" data-bs-toggle="modal" data-bs-target="#standard-modal" style={{display: 'flex', alignItems: 'center'}}>
                                            {/* <button type="button" data-bs-toggle="modal" data-bs-target="#standard-modal"></button> */}
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
                            <h4
                              class="modal-title"
                              id="standard-modalLabel"
                            >
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
                                <select
                                  class="common-modal "
                                  name="Platform"
                                  id=""
                                >
                                  <option value="Platform">Noon</option>
                                  <option value="">Amazon</option>
                                </select>
                              </div>
                              <div class="col-md-6 modal-0">
                                <label for="">Platform Country</label>
                                <br />
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
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
                                  <option value="BN">
                                    Brunei Darussalam
                                  </option>
                                  <option value="BG">Bulgaria</option>
                                  <option value="BF">Burkina Faso</option>
                                  <option value="BI">Burundi</option>
                                  <option value="KH">Cambodia</option>
                                  <option value="CM">Cameroon</option>
                                  <option value="CA">Canada</option>
                                  <option value="CV">Cape Verde</option>
                                  <option value="KY">Cayman Islands</option>
                                  <option value="CF">
                                    Central African Republic
                                  </option>
                                  <option value="TD">Chad</option>
                                  <option value="CL">Chile</option>
                                  <option value="CN">China</option>
                                  <option value="CX">
                                    Christmas Island
                                  </option>
                                  <option value="CC">
                                    Cocos (Keeling) Islands
                                  </option>
                                  <option value="CO">Colombia</option>
                                  <option value="KM">Comoros</option>
                                  <option value="CG">Congo</option>
                                  <option value="CK">Cook Islands</option>
                                  <option value="CR">Costa Rica</option>
                                  <option value="CI">Cote d'Ivoire</option>
                                  <option value="HR">
                                    Croatia (Hrvatska)
                                  </option>
                                  <option value="CU">Cuba</option>
                                  <option value="CY">Cyprus</option>
                                  <option value="CZ">Czech Republic</option>
                                  <option value="DK">Denmark</option>
                                  <option value="DJ">Djibouti</option>
                                  <option value="DM">Dominica</option>
                                  <option value="DO">
                                    Dominican Republic
                                  </option>
                                  <option value="EC">Ecuador</option>
                                  <option value="EG">Egypt</option>
                                  <option value="SV">El Salvador</option>
                                  <option value="GQ">
                                    Equatorial Guinea
                                  </option>
                                  <option value="ER">Eritrea</option>
                                  <option value="EE">Estonia</option>
                                  <option value="ET">Ethiopia</option>
                                  <option value="FK">
                                    Falkland Islands (Malvinas)
                                  </option>
                                  <option value="FO">Faroe Islands</option>
                                  <option value="FJ">Fiji</option>
                                  <option value="FI">Finland</option>
                                  <option value="FR">France</option>
                                  <option value="GF">French Guiana</option>
                                  <option value="PF">
                                    French Polynesia
                                  </option>
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
                                  <option value="KR">
                                    Korea, Republic of
                                  </option>
                                  <option value="KW">Kuwait</option>
                                  <option value="KG">Kyrgyzstan</option>
                                  <option value="LV">Latvia</option>
                                  <option value="LB">Lebanon</option>
                                  <option value="LS">Lesotho</option>
                                  <option value="LR">Liberia</option>
                                  <option value="LY">
                                    Libyan Arab Jamahiriya
                                  </option>
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
                                  <option value="MH">
                                    Marshall Islands
                                  </option>
                                  <option value="MQ">Martinique</option>
                                  <option value="MR">Mauritania</option>
                                  <option value="MU">Mauritius</option>
                                  <option value="YT">Mayotte</option>
                                  <option value="MX">Mexico</option>
                                  <option value="MD">
                                    Moldova, Republic of
                                  </option>
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
                                  <option value="AN">
                                    Netherlands Antilles
                                  </option>
                                  <option value="NC">New Caledonia</option>
                                  <option value="NZ">New Zealand</option>
                                  <option value="NI">Nicaragua</option>
                                  <option value="NE">Niger</option>
                                  <option value="NG">Nigeria</option>
                                  <option value="NU">Niue</option>
                                  <option value="NF">Norfolk Island</option>
                                  <option value="MP">
                                    Northern Mariana Islands
                                  </option>
                                  <option value="NO">Norway</option>
                                  <option value="OM">Oman</option>
                                  <option value="PW">Palau</option>
                                  <option value="PA">Panama</option>
                                  <option value="PG">
                                    Papua New Guinea
                                  </option>
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
                                  <option value="RU">
                                    Russian Federation
                                  </option>
                                  <option value="RW">Rwanda</option>
                                  <option value="KN">
                                    Saint Kitts and Nevis
                                  </option>
                                  <option value="LC">Saint LUCIA</option>
                                  <option value="WS">Samoa</option>
                                  <option value="SM">San Marino</option>
                                  <option value="ST">
                                    Sao Tome and Principe
                                  </option>
                                  <option value="SA">Saudi Arabia</option>
                                  <option value="SN">Senegal</option>
                                  <option value="SC">Seychelles</option>
                                  <option value="SL">Sierra Leone</option>
                                  <option value="SG">Singapore</option>
                                  <option value="SK">
                                    Slovakia (Slovak Republic)
                                  </option>
                                  <option value="SI">Slovenia</option>
                                  <option value="SB">
                                    Solomon Islands
                                  </option>
                                  <option value="SO">Somalia</option>
                                  <option value="ZA">South Africa</option>
                                  <option value="ES">Spain</option>
                                  <option value="LK">Sri Lanka</option>
                                  <option value="SH">St. Helena</option>
                                  <option value="PM">
                                    St. Pierre and Miquelon
                                  </option>
                                  <option value="SD">Sudan</option>
                                  <option value="SR">Suriname</option>
                                  <option value="SZ">Swaziland</option>
                                  <option value="SE">Sweden</option>
                                  <option value="CH">Switzerland</option>
                                  <option value="SY">
                                    Syrian Arab Republic
                                  </option>
                                  <option value="TW">
                                    Taiwan, Province of China
                                  </option>
                                  <option value="TJ">Tajikistan</option>
                                  <option value="TZ">
                                    Tanzania, United Republic of
                                  </option>
                                  <option value="TH">Thailand</option>
                                  <option value="TG">Togo</option>
                                  <option value="TK">Tokelau</option>
                                  <option value="TO">Tonga</option>
                                  <option value="TT">
                                    Trinidad and Tobago
                                  </option>
                                  <option value="TN">Tunisia</option>
                                  <option value="TR">Turkey</option>
                                  <option value="TM">Turkmenistan</option>
                                  <option value="TC">
                                    Turks and Caicos Islands
                                  </option>
                                  <option value="TV">Tuvalu</option>
                                  <option value="UG">Uganda</option>
                                  <option value="UA">Ukraine</option>
                                  <option value="AE">
                                    United Arab Emirates
                                  </option>
                                  <option value="GB">United Kingdom</option>
                                  <option value="US">United States</option>
                                  <option value="UY">Uruguay</option>
                                  <option value="UZ">Uzbekistan</option>
                                  <option value="VU">Vanuatu</option>
                                  <option value="VE">Venezuela</option>
                                  <option value="VN">Viet Nam</option>
                                  <option value="VG">
                                    Virgin Islands (British)
                                  </option>
                                  <option value="VI">
                                    Virgin Islands (U.S.)
                                  </option>
                                  <option value="WF">
                                    Wallis and Futuna Islands
                                  </option>
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
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
                                  <option value="Platform">Baby</option>
                                  <option value="">
                                    All categories available{" "}
                                  </option>
                                </select>
                              </div>
                              <div class="col-md-6 modal-1">
                                <label for="">SKU Type</label>
                                <br />
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
                                  <option value="Platform">Noon</option>
                                  <option value="">
                                    All type available{" "}
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6 modal-1">
                                <label for="">SKU Sub- Type</label>
                                <br />
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
                                  <option value="Platform">
                                    All Subtype available{" "}
                                  </option>
                                  <option value="">Amazon</option>
                                </select>
                              </div>
                              <div class="col-md-6 modal-1">
                                <label for="">Fulfilment SKU Type</label>
                                <br />
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
                                  <option value="Platform">
                                    All Fulfilment type available{" "}
                                  </option>
                                  <option value="">Amazon</option>
                                </select>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6 modal-1">
                                <label for="">Brand</label>
                                <br />
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
                                  <option value="Platform">Follow</option>
                                  <option value="">
                                    All brand Available{" "}
                                  </option>
                                </select>
                              </div>
                              <div class="col-md-6 modal-1">
                                <label for="">SKU/ ASIN</label>
                                <br />
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
                                  <option value="Platform">Noon</option>
                                  <option value="">Amazon</option>
                                </select>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6 modal-1">
                                <label for="">Alert type</label>
                                <br />
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
                                  <option value="">Price Range</option>
                                  <option value="">
                                    Price Moves Above
                                  </option>
                                  <option value="">Price Moves Down</option>
                                  <option value="">Stock Range</option>
                                  <option value="">
                                    Stock Moves Above
                                  </option>
                                  <option value="">Stock Moves Down</option>
                                  <option value="">Stores Range</option>
                                  <option value="">
                                    Stores Moves Above
                                  </option>
                                  <option value="">
                                    Stores Moves Down
                                  </option>
                                  <option value="">
                                    Price Change Absolute (Abs)
                                  </option>
                                  <option value="">
                                    Stock Change Absolute (Abs)
                                  </option>
                                  <option value="">SKU to Stock</option>
                                  <option value="">
                                    SKU to Fulfilment
                                  </option>
                                </select>
                              </div>
                              <div class="col-md-6 modal-1">
                                <label for="">Description</label>
                                <br />
                                <span>
                                  Notifies when price exiting the range.
                                </span>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6 modal-1">
                                <label for="">Price moves below</label>
                                <br />
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
                                  <option value="">Price Range</option>
                                  <option value="">
                                    Price Moves Above
                                  </option>
                                </select>
                              </div>
                              <div class="col-md-6 modal-1">
                                <label for="">Price moves above</label>
                                <br />
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
                                  <option value="Platform">Noon</option>
                                  <option value="">Amazon</option>
                                </select>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6 modal-1">
                                <label for="">Frequency</label>
                                <br />
                                <select
                                  class="common-modal"
                                  name="Platform"
                                  id=""
                                >
                                  <option value="">Price Range</option>
                                  <option value="">
                                    Price Moves Above
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6 modal-1">
                                <label for="">Comment</label>
                                <br />
                                <input
                                  type="tex-box"
                                  class="common-modal"
                                />
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-12 modal-1">
                                <span style={{ paddingRight: "10px" }}>
                                  Delivery Method
                                </span>
                                <input
                                  style={{ paddingRight: "10px" }}
                                  type="checkbox"
                                />
                                <span style={{ paddingRight: "10px" }}>
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
                            <button
                              type="button"
                              class="btn btn-light"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3 me-3">
                  <div class="add-card">
                    <div class="add-card-in text-center">
                      <i
                        class="fa-solid fa-plus-minus h6 my-0"
                        data-bs-toggle="modal"
                        data-bs-target="#standard-modal"
                        style={{ cursor: "pointer" }}
                      ></i>{" "}
                      <h4 class="font-16 mt-1 mb-0 d-block">
                        Add New Alert
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div className="heroRight">
        <div class="">
            <div class="alert-hero-right section-padding">
              <div class="row">
                <div class="col-md-6">
                  <span class="text-bold">My Watchlist</span>
                </div>
                <div class="col-md-6" style={{ textAlign: "right" }}>
                  <a href="//">
                    <span class="text-bold">See Watchlist</span>
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 col-12">
                  <table
                    id="basic-datatable"
                    class="table dt-responsive alert-table-right"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <div class="row">
                            <div class="col-lg-4 col-4">
                              <div class="dropdown float-end">
                                <a
                                  href="#"
                                  class="dropdown-toggle arrow-none card-drop"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item"
                                  >
                                    <i class="mdi mdi-cached me-1"></i>
                                    Refresh
                                  </a>

                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item"
                                  >
                                    <i class="mdi mdi-circle-edit-outline me-1"></i>
                                    Edit
                                  </a>

                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item text-danger"
                                  >
                                    <i class="mdi mdi-delete-outline me-1"></i>
                                    Remove
                                  </a>
                                </div>
                              </div>
                              <img
                                src={SkuProduct}
                                width="50px"
                                height="40px"
                              />
                            </div>
                            <div class="col-lg-8 col-8 text-center watch-right">
                              <img
                                src="assets-main/images/amazon-uae.svg"
                                width="55px"
                                height="15px"
                              />{" "}
                              <br />
                              <a href="" class="text-bold">
                                N35997789A
                              </a>
                              <span class="table-font">Tommee Tippee</span>
                            </div>
                          </div>
                        </td>
                        <td
                          class="table-extra watch-right-rate"
                          style={{ paddingTop: "15px !important" }}
                        >
                          <span class="text-bold">SAR 70</span>
                          <p class="text-green">10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="row">
                            <div class="col-lg-4 col-4">
                              <div class="dropdown float-end">
                                <a
                                  href="#"
                                  class="dropdown-toggle arrow-none card-drop"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item"
                                  >
                                    <i class="mdi mdi-cached me-1"></i>
                                    Refresh
                                  </a>

                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item"
                                  >
                                    <i class="mdi mdi-circle-edit-outline me-1"></i>
                                    Edit
                                  </a>

                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item text-danger"
                                  >
                                    <i class="mdi mdi-delete-outline me-1"></i>
                                    Remove
                                  </a>
                                </div>
                              </div>

                              <img
                                src={SkuProduct}
                                width="50px"
                                height="40px"
                              />
                            </div>
                            <div class="col-lg-8 col-8 text-center watch-right">
                              <img
                                src="assets-main/images/noon-saudi.svg"
                                width="55px"
                                height="15px"
                              />{" "}
                              <br />
                              <a href="" class="text-bold">
                                N35997789A
                              </a>
                              <span class="table-font">Tommee Tippee</span>
                            </div>
                          </div>
                        </td>
                        <td
                          class="table-extra watch-right-rate"
                          style={{ paddingTop: "15px !important" }}
                        >
                          <span class="text-bold">SAR 70</span>
                          <p class="text-green">10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="row">
                            <div class="col-lg-4 col-4">
                              <div class="dropdown float-end">
                                <a
                                  href="#"
                                  class="dropdown-toggle arrow-none card-drop"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item"
                                  >
                                    <i class="mdi mdi-cached me-1"></i>
                                    Refresh
                                  </a>

                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item"
                                  >
                                    <i class="mdi mdi-circle-edit-outline me-1"></i>
                                    Edit
                                  </a>

                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item text-danger"
                                  >
                                    <i class="mdi mdi-delete-outline me-1"></i>
                                    Remove
                                  </a>
                                </div>
                              </div>

                              <img
                                src={SkuProduct}
                                width="50px"
                                height="40px"
                              />
                            </div>
                            <div class="col-lg-8 col-8 text-center watch-right">
                              <img
                                src="assets-main/images/amazon-uae.svg"
                                width="55px"
                                height="15px"
                              />{" "}
                              <br />
                              <a href="" class="text-bold">
                                N35997789A
                              </a>
                              <span class="table-font">Tommee Tippee</span>
                            </div>
                          </div>
                        </td>
                        <td
                          class="table-extra watch-right-rate"
                          style={{ paddingTop: "15px !important" }}
                        >
                          <span class="text-bold">SAR 70</span>
                          <p class="text-green">10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="row">
                            <div class="col-lg-4 col-4">
                              <div class="dropdown float-end">
                                <a
                                  href="#"
                                  class="dropdown-toggle arrow-none card-drop"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item"
                                  >
                                    <i class="mdi mdi-cached me-1"></i>
                                    Refresh
                                  </a>

                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item"
                                  >
                                    <i class="mdi mdi-circle-edit-outline me-1"></i>
                                    Edit
                                  </a>

                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item text-danger"
                                  >
                                    <i class="mdi mdi-delete-outline me-1"></i>
                                    Remove
                                  </a>
                                </div>
                              </div>
                              <img
                                src={SkuProduct}
                                width="50px"
                                height="40px"
                              />
                            </div>
                            <div class="col-lg-8 col-8 text-center watch-right">
                              <img
                                src="assets-main/images/noon-saudi.svg"
                                width="55px"
                                height="15px"
                              />{" "}
                              <br />
                              <a href="" class="text-bold">
                                N35997789A
                              </a>
                              <span class="table-font">Tommee Tippee</span>
                            </div>
                          </div>
                        </td>
                        <td
                          class="table-extra watch-right-rate"
                          style={{ paddingTop: "15px !important" }}
                        >
                          <span class="text-bold">SAR 70</span>
                          <p class="text-green">10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="row">
                            <div class="col-lg-4 col-4">
                              <div class="dropdown float-end">
                                <a
                                  href="#"
                                  class="dropdown-toggle arrow-none card-drop"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item"
                                  >
                                    <i class="mdi mdi-cached me-1"></i>
                                    Refresh
                                  </a>

                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item"
                                  >
                                    <i class="mdi mdi-circle-edit-outline me-1"></i>
                                    Edit
                                  </a>

                                  <a
                                    href="javascript:void(0);"
                                    class="dropdown-item text-danger"
                                  >
                                    <i class="mdi mdi-delete-outline me-1"></i>
                                    Remove
                                  </a>
                                </div>
                              </div>
                              <img
                                src={SkuProduct}
                                width="50px"
                                height="40px"
                              />
                            </div>
                            <div class="col-lg-8 col-8 text-center watch-right">
                              <img
                                src="assets-main/images/noon-saudi.svg"
                                width="55px"
                                height="15px"
                              />{" "}
                              <br />
                              <a href="" class="text-bold">
                                N35997789A
                              </a>
                              <span class="table-font">Tommee Tippee</span>
                            </div>
                          </div>
                        </td>
                        <td
                          class="table-extra watch-right-rate"
                          style={{ paddingTop: "15px !important" }}
                        >
                          <span class="text-bold">SAR 70</span>
                          <p class="text-green">10%</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="add-sku">
                  <div class="">
                    <div
                      class="add-card-in text-center watch-modal"
                      onclick="myFunction()"
                      style={{ textAlign: "right" }}
                    >
                      <i class="fa-solid fa-plus-minus  my-0"></i>{" "}
                      <h4 class="font-16 mt-1 mb-0 d-block">
                        Add New SKUs to you Watchlist
                      </h4>
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
                  </div>
                </div>
              </div>

       <div class=" export" data-bs-toggle="modal" data-bs-target="#standard-modal" style={{display: 'flex', alignItems: 'center'}}>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#standard-modal">Add New Watchlist</button>
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
                        <input
                          type="text"
                          placeholder="Enter Watchlist Title"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary">
                        Create
                      </button>
                      <button
                        type="button"
                        class="btn btn-light"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
)
}

export default DashboardHero;