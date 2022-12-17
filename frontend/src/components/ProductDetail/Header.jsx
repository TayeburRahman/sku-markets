import { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useAuth from "hooks/useAuth";
import * as React from "react";
import { Link } from "react-router-dom";
import avatar from "static/images/avatar.jpg";
import logo from "static/images/logo.svg";
import { Stack } from "../../../node_modules/@mui/material/index";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import "./index.css";
import TopBarLogo from "../../assets/images/noon-saudi.svg";
import SunLight from "../../assets/images/moooon.svg";
import Fullscreen from "../../assets/images/fullScreen.png";
import { MDBContainer, MDBCollapse, MDBNavbar, MDBNavbarToggler, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const pages = ["SKU Markets", "Alerts", "Watch List", "Profile"];

function ResponsiveAppBar() {
	const [showNavExternal3, setShowNavExternal3] = useState(false);
	const user = useAuth();

	const navigate = useNavigate();
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<div>
			<div class="row d-none d-lg-block">
				<div class="col-md-12 d-flex header-top-line px-3">
					<div class="marquee-items d-flex align-items-center">
						<div class="marquee-4" style={{ paddingRight: "8px" }}>
							<p>Markets Live SKUs:</p>
						</div>
						<div class="marquee-2">
							<p>380,000</p>
						</div>
					</div>

					<div class="marquee-items d-flex align-items-center">
						<div class="marquee-4" style={{ paddingRight: "8px" }}>
							<p>Fulfilled by Stores:</p>
						</div>
						<div class="marquee-2">
							<p>280,000</p>
						</div>
					</div>

					<div class="marquee-items d-flex align-items-center">
						<div class="marquee-4" style={{ paddingRight: "8px" }}>
							<p>Fulfilled by MP:</p>
						</div>
						<div class="marquee-2">
							<p>100,000</p>
						</div>
					</div>

					<div class="marquee-items d-flex ">
						<div class="marquee-4" style={{ paddingRight: "8px" }}>
							<p>Top Dominance Market:</p>
						</div>
						<div class="marquee-2">
							<img src={TopBarLogo} alt="" width="50px" height="20px" />
						</div>
					</div>
				</div>
			</div>
			<div class="d-block d-lg-none">
				<MDBNavbar>
					<MDBContainer fluid>
						<Link to="/" className="navbar-brand me-lg-5">
							<img
								src={logo}
								alt="logo"
								className="logo-dark amdlogo "
								height="22"
								style={{ width: "120px" }}
							/>
						</Link>
						<MDBNavbarToggler
							className="ms-auto"
							type="button"
							data-target="#navbarToggleExternalContent"
							aria-controls="navbarToggleExternalContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
							onClick={() => setShowNavExternal3(!showNavExternal3)}
						>
							<MDBIcon icon="bars" fas />
						</MDBNavbarToggler>
					</MDBContainer>
				</MDBNavbar>

				<MDBCollapse show={showNavExternal3}>
					<div className="bg-light shadow-3 p-4">
						<MDBBtn block className="border-bottom m-0" color="link">
							SKU Markets
						</MDBBtn>
						<MDBBtn block className="border-bottom m-0" color="link">
							Alerts
						</MDBBtn>
						<MDBBtn block className="border-bottom m-0" color="link">
							Watchlist
						</MDBBtn>
						<MDBBtn block className="border-bottom m-0" color="link">
							Portfolio
						</MDBBtn>

						<MDBBtn block className="border-bottom m-0" color="link">
							Seller board
						</MDBBtn>
					</div>
				</MDBCollapse>
			</div>
			<AppBar
				sx={{ boxShadow: "none", borderBottom: "1px solid #f1f1f1" }}
				color="transparent"
				position="static"
				class="d-none d-lg-block"
			>
				<nav className=" navbar shadow-none navbar-expand-lg pt-lg-4 pb-0 navbar-dark px-2">
					<div className="col-md-12 d-flex justify-content-between w-100">
						<Link to="/" className="navbar-brand me-md-2 me-xl-5">
							<img src={logo} alt="logo" className="logo-dark amdlogo" height="22" />
						</Link>

						<button
							className="navbar-toggler"
							style={{ borderColor: "#1562ff" }}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i className="mdi mdi-menu" style={{ color: "#1562ff" }}></i>
						</button>

						<div
							className="collapse navbar-collapse"
							id="navbarNavDropdown ps-2 ps-xl-3"
							// style={{ paddingLeft: "3%" }}
						>
							<ul
								class="navbar-nav me-auto align-items-center col-7 justify-content-center pe-0 amd-menu "
								style={{ paddingRight: "8px" }}
							>
								<li class="nav-item mx-lg-1">
									<Link class="nav-link " to="/Dashboard">
										SKU Markets
									</Link>
								</li>
								<li class="nav-item mx-lg-1">
									<Link class="nav-link " to="/alerts">
										Alerts
									</Link>
								</li>
								<li class="nav-item mx-lg-1">
									<Link class="nav-link " to="/watchList">
										Watchlist
									</Link>
								</li>
								<li class="nav-item mx-lg-1">
									<Link class="nav-link " to="/profile">
										Portfolio
									</Link>
								</li>
								<li class="nav-item mx-lg-1">
									<Link class="nav-link " to="/">
										Sellerboard
									</Link>
								</li>
							</ul>

							<div class="col-md-5">
								<ul class="list-unstyled topbar-menu float-end mb-0 d-flex align-items-center">
									<li class="dropdown notification-list topbar-dropdown">
										<a
											class="nav-link arrow-none"
											data-bs-toggle="dropdown"
											href="# "
											role="button"
											aria-haspopup="false"
											aria-expanded="false"
										>
											<span class="align-middle d-none d-lg-inline-block">العربية</span>
										</a>
									</li>

									<li class="notification-list d-none d-sm-inline-block">
										<a>
											<img className="sunLight" src={SunLight} alt="moonpic" />
										</a>
									</li>

									<li class="notification-list d-none d-md-inline-block">
										<a>
											<img className="fullscreen-icon" src={Fullscreen} alt="moonpic" />
										</a>
									</li>

									<li class=" notification-list topbar-dropdown ">
										<span class="align-middle d-none d-lg-inline-block">
											<Link to="/Subscriptions">Subscription</Link>
										</span>
									</li>

									<li class="dropdown notification-list users-style ps-3">
										<a
											class="nav-link dropdown-toggle nav-user1 arrow-none me-0"
											data-bs-toggle="dropdown"
											href="# "
											role="button"
											aria-haspopup="false"
											aria-expanded="false"
										>
											<Box sx={{ flexGrow: 0 }}>
												<Tooltip style={{ cursor: "pointer" }}>
													<Stack onClick={handleOpenUserMenu} direction="row" spacing={1} alignItems="center">
														{/* <Avatar alt={user?.name} src={avatar} /> */}
														<Typography sx={{ ms: 3 }}>
															{" "}
															<span>
																<span class="account-user-name">{user?.name}</span>
															</span>
														</Typography>
													</Stack>
												</Tooltip>
												{/* <Menu
													sx={{ mt: "45px" }}
													id="menu-appbar"
													anchorEl={anchorElUser}
													anchorOrigin={{
														vertical: "top",
														horizontal: "right",
													}}
													keepMounted
													transformOrigin={{
														vertical: "top",
														horizontal: "right",
													}}
													open={Boolean(anchorElUser)}
													onClose={handleCloseUserMenu}
												>
													<MenuItem>
														<Typography textAlign="center">Profile</Typography>
													</MenuItem>
													<MenuItem>
														<Typography textAlign="center">Account</Typography>
													</MenuItem>
													<MenuItem>
														<Typography textAlign="center">Dashboard</Typography>
													</MenuItem>
													<MenuItem>
														<Typography textAlign="center">Logout</Typography>
													</MenuItem>
												</Menu> */}
											</Box>
										</a>

										<div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
											<div class=" dropdown-header noti-title">
												<h6 class="text-overflow m-0">Welcome !</h6>
											</div>

											<a href="javascript:void(0);" class="dropdown-item notify-item">
												<i class="mdi mdi-account-circle me-1 text-primary pt-0"></i>
												<span>My Account</span>
											</a>

											<a href="javascript:void(0);" class="dropdown-item notify-item">
												<i class="mdi mdi-lifebuoy me-1 text-primary"></i>
												<span>Change Password</span>
											</a>

											<a href="javascript:void(0);" class="dropdown-item notify-item">
												<i class="mdi mdi-lock-outline me-1 text-primary"></i>
												<span>Lock Screen</span>
											</a>

											<a href="javascript:void(0);" class="dropdown-item notify-item">
												<i class="mdi mdi-logout me-1 text-primary"></i>
												<span>Logout</span>
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</AppBar>
		</div>
	);
}
export default ResponsiveAppBar;
