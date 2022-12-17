import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Typography from "@mui/material/Typography";
// import Button from 'react-bootstrap/Button';
import { styled } from '@mui/material/styles';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const WatchlistTable = (props) => {




    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Pop -Up Second       
    const [showTwo, setShowTwo] = useState(false);
    const handleCloseTwo = () => setShowTwo(false);
    const handleShowTwo = () => setShowTwo(true);

    // Pop -Up Third       
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    // Pop -Up Fourth       
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    // Pop -Up Fifth       
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);


    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: 'white',
            border: '1px solid #dadde9',
            color: 'black',
        },
      }));
    return (

        <div class="top-ranked">
            <div class="container-width">
                <div class="row">
                    <div class="col-md-12 col-12" style={{ height: '42vh' }}>
                        <div class="col-12">
                            <div class="card">
                                <div class="row table-style">
                                    <div class="col-md-12 col-12 text-bold d-flex flex-column flex-lg-row table-header-right">


                                        <div class="input-group p-1 sm-bottom background" style={{ maxWidth: '350px', borderRadius: '3px', width: '250px' }}>
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="basic-addon1" style={{ height: '35px', background: '#0052FF' }}>
                                                    <i class="fa-solid fa-magnifying-glass text-white"></i>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control alerts-search" placeholder="Search SKU" aria-label="Username" aria-describedby="basic-addon1" style={{ maxWidth: '300px', height: '35px' }} />
                                        </div>

                                        <div class="new-watch" style={{ display: 'flex', alignIems: 'center' }}>
                                            <select className="shadow-none" name="Select Your Watchlist" style={{ paddingTop: '0px', paddingBottom: '0px', height: '34px', marginTop: '6px' }} id="" tabindex="0" class="btn btn-primary" data-bs-placement="top" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Select your Watchlist">
                                                <option value="">Amazon</option>
                                                <option value="">Noon</option>
                                                <option value="">Noon</option>
                                            </select>
                                        </div>
                                        <button className="modelBtn" style={{ display: 'flex', backgroundColor: 'none', fontSize: '12px', alignItems: 'center' }} onClick={handleShow}>

                                            Add New Watchlist

                                        </button>

                                        {/* <!-- Trigger/Open The Modal --> */}
                                        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" class="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center" show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title className="modeltitle">New watchlist</Modal.Title>
                                            </Modal.Header>
                                            <div class="modal-body">
                                                <div class="new-watch-modal">
                                                    <input type="text" placeholder="Enter Watchlist Title" />
                                                </div>
                                            </div>
                                            <Modal.Footer>
                                                <Button variant="contained" className="btn1" onClick={handleClose}>Create</Button>
                                                <Button className="btn2" variant="contained" onClick={handleClose}>Close</Button>

                                            </Modal.Footer>
                                        </Modal>


                                        {/* /////////////////////////////////////////////////////////////////// */}
                                        <button class="modelBtn" style={{ display: 'flex', backgroundColor: 'none', fontSize: '12px', alignItems: 'center' }} onClick={handleShowTwo}>

                                            Choose SKU/ ASIN/ MPN

                                        </button>
                                        {/* <!-- Trigger/Open The Modal --> */}
                                        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" class="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center" show={showTwo} onHide={handleCloseTwo}>
                                            <Modal.Header closeButton>
                                                <Modal.Title className="modeltitle">Choose SKU/ ASIN/ MPN</Modal.Title>
                                            </Modal.Header>
                                            <div class="modal-body">
                                                <div class="row d-flex justify-content-between">
                                                    <div class="col-md-6 modal-0">
                                                        <label for="">Platform</label><br />
                                                        <select class="common-modal " name="Platform" id="">
                                                            <option value="Platform">Noon</option>
                                                            <option value="">Amazon</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 modal-0">
                                                        <label for="">Platform Country</label><br />
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
                                                        <label for="">Category</label><br />
                                                        <select class="common-modal" name="Platform" id="">
                                                            <option value="Platform">Baby</option>
                                                            <option value="">All categories available </option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 modal-1">
                                                        <label for="">SKU Type</label><br />
                                                        <select class="common-modal" name="Platform" id="">
                                                            <option value="Platform">Noon</option>
                                                            <option value="">All type available </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6 modal-1">
                                                        <label for="">SKU Sub- Type</label><br />
                                                        <select class="common-modal" name="Platform" id="">
                                                            <option value="Platform">All Subtype available </option>
                                                            <option value="">Amazon</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 modal-1">
                                                        <label for="">Fulfilment SKU Type</label><br />
                                                        <select class="common-modal" name="Platform" id="">
                                                            <option value="Platform">All Fulfilment type available </option>
                                                            <option value="">Amazon</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6 modal-1">
                                                        <label for="">Brand</label><br />
                                                        <select class="common-modal" name="Platform" id="">
                                                            <option value="Platform">Follow</option>
                                                            <option value="">All brand Available </option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 modal-1">
                                                        <label for="">SKU/ ASIN/ MPN</label><br />
                                                        <select class="common-modal" name="Platform" id="">
                                                            <option value="Platform">Noon</option>
                                                            <option value="">Amazon</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-12 modal-1">
                                                        <span>Total SKUs: 688</span>
                                                    </div>
                                                </div>


                                            </div>
                                            <Modal.Footer>
                                                <Button variant="contained" className="btn1" onClick={handleCloseTwo}>Save</Button>
                                                <Button className="btn2" variant="contained" onClick={handleCloseTwo}> Reset all Filters</Button>
                                            </Modal.Footer>
                                        </Modal>
                                        {/* //////////////////////////////////////////////////////////////////////////// */}




                                        {/* <!-- Edit watchlist html start here --> */}

                                        {/* ////////////////////////////////////////////////// */}

                                        <button class="modelBtn" style={{ display: 'flex', backgroundColor: 'none', fontSize: '12px', alignItems: 'center' }} onClick={handleShow3}>

                                            Edit

                                        </button>

                                        {/* <!-- Trigger/Open The Modal --> */}
                                        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" class="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center" show={show3} onHide={handleClose3}>
                                            <Modal.Header closeButton>
                                                <Modal.Title className="modeltitle">Edit watchlist</Modal.Title>
                                            </Modal.Header>
                                            <div class="modal-body">

                                                <div class="new-watch-modal">
                                                    <input type="text" placeholder="Your WatchList" />
                                                </div>
                                            </div>
                                            <Modal.Footer>
                                                <Button variant="contained" className="btn1" onClick={handleClose3}>Update</Button>
                                                <Button className="btn2" variant="contained" onClick={handleClose3}>Close</Button>
                                            </Modal.Footer>
                                        </Modal>
                                        {/* ///////////////////////////////////////////////////////// */}

                                        {/* <!-- Remove watchlist html start here --> */}
                                        {/* ////////////////////////////////////////////////////// */}

                                        <button class="modelBtn" style={{ display: 'flex', backgroundColor: 'none', fontSize: '12px', alignItems: 'center' }} onClick={handleShow4}>

                                            Remove

                                        </button>

                                        {/* <!-- Trigger/Open The Modal --> */}
                                        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" class="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center" show={show4} onHide={handleClose4}>
                                            <Modal.Header closeButton>
                                                <Modal.Title className="modeltitle">Remove watchlist</Modal.Title>
                                            </Modal.Header>
                                            <div class="modal-body">
                                                <div class="new-watch-modal">
                                                    <span className="RemoveD">Are you sure you want to remove '' watchlist?</span>
                                                </div>
                                            </div>
                                            <Modal.Footer>
                                                <Button variant="contained" className="btn1" onClick={handleClose4}>Remove</Button>
                                                <Button className="btn2" variant="contained" onClick={handleClose4}>Close</Button>
                                            </Modal.Footer>
                                        </Modal>

                                        {/* ////////////////////////////////////////////////////// */}


                                        {/* <!-- layout modal start here --> */}

                                        {/* ////////////////////////////////////////////////////// */}
                                        <button class="modelBtn" style={{ display: 'flex', backgroundColor: 'none', fontSize: '12px', alignItems: 'center' }} onClick={handleShow5}>

                                            Layout

                                        </button>

                                        {/* <!-- Trigger/Open The Modal --> */}
                                        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" class="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center" show={show5} onHide={handleClose5}>
                                            <Modal.Header closeButton>
                                                <Modal.Title className="modeltitle">Layout Setting</Modal.Title>
                                            </Modal.Header>
                                            <div class="modal-body layout-body">
                                                <span>Please choose metrics to view from the list below</span>

                                                <ul>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        SKU
                                                    </li>

                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        Fulfilment Type
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        Rank
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        Rate
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        SKU Marketplace
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        Stores
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        Chg 24H
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        Buybox Sale Price
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        Max Offer Price
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        Min Offer Price
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        SKU Status
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" checked />
                                                        E Opp to stock
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        E Opp To Fulfilment
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        Trade Volume
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        Tags
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        ASP
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        Vol (24h)/MCap
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        Estimated SOH
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        DOH
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        ENR
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        Max Investment
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        Min Investment
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        EQTI
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        EM
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        Estimated SU Last 24H
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        E Marketplace cap
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        E Opp to Amazon Fulfilment
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        E Opp to Noon Fulfilment
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        Demand
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-grip-vertical"></i>
                                                        <input type="checkbox" />
                                                        Supply
                                                    </li>
                                                </ul>
                                            </div>
                                            <Modal.Footer>
                                                <Button variant="contained" className="btn1" onClick={handleClose5}>Save</Button>
                                                <Button className="btn2" variant="contained" onClick={handleClose5}>Reset All</Button>
                                            </Modal.Footer>
                                        </Modal>

                                        {/* ////////////////////////////////////////////////////// */}
                                    </div>
                                </div>

                                <div class="card-body mt-3">
                                    <div class="table-responsive">
                                        <table class="table alert-Table">
                                            <thead className="fs-6 fw-bold text-black">
                                                <tr className="alert-table-row newrow" >
                                                    <th scope="col" className="text-align-center text-center text-black alerthead">SKU</th>

                                                    <th className="alerthead text-black"
                                                        scope="col">Marketplace </th>
                                                    <th className="alerthead text-black" scope="col">Stores</th>
                                                    <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="top" arrow style={{ backgroundColor: 'white' }} >
                                                        <th className="alerthead text-black" scope="col">Rate </th>
                                                    </HtmlTooltip>
                                                    <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="top" arrow style={{ backgroundColor: 'white' }} >
                                                        <th className="alerthead text-black" scope="col">Rank</th>
                                                    </HtmlTooltip>
                                                    <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="top" arrow style={{ backgroundColor: 'white' }} >
                                                        <th className="alerthead text-black" scope="col">Fulfilment Type</th>
                                                    </HtmlTooltip>
                                                    <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="top" arrow style={{ backgroundColor: 'white' }} >
                                                        <th className="alerthead text-black" scope="col">SKU Status </th>
                                                    </HtmlTooltip>
                                                    <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="top" arrow style={{ backgroundColor: 'white' }} >
                                                        <th className="alerthead text-black" scope="col">Buybox Sale Price </th>
                                                    </HtmlTooltip>
                                                    <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="top" arrow style={{ backgroundColor: 'white' }} >
                                                        <th className="alerthead text-black" scope="col">Chg 24H </th>
                                                    </HtmlTooltip>
                                                    <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="top" arrow style={{ backgroundColor: 'white' }} >
                                                        <th className="alerthead text-black" scope="col">Max Offer Price</th>
                                                    </HtmlTooltip>
                                                    <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="top" arrow style={{ backgroundColor: 'white' }} >
                                                        <th className="alerthead text-black" scope="col">Min Offer Price </th>
                                                    </HtmlTooltip>

                                                    <th className="alerthead text-black" scope="col">E Opp to Fulfilment</th>
                                                    <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="right" arrow style={{ backgroundColor: 'white' }} >
                                                        <th className="alerthead text-black" scope="col">E Opp to stock</th>
                                                    </HtmlTooltip>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {/* <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td> */}
                                                </tr>
                                                <tr>
                                                    {/* <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td> */}
                                                </tr>
                                                <tr>
                                                    {/* <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td> */}
                                                </tr>
                                            </tbody>
                                            <div className="bg-light ND" >
                                                <td className="py-1 px-2">No Data Available</td>
                                            </div>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default WatchlistTable;