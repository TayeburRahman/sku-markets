import { Link } from "react-router-dom";
import logo from "static/images/logo.svg";

const Footer = () => {
	return (
		<div class="footer-main">
			<div class="">
				<div class="footer-padding py-2">
					<div class="row d-flex justify-content-around flex-md-column flex-lg-row align-items-center footer-area footer-mobaile">
						<div class="col-md-12 col-lg-2">
							<div class="footer-items footer-mobile-logo footer-logo text-center">
								<img src={logo} alt="logo" className="logo-dark amdlogo" height="22" />
							</div>
						</div>
						<div class="col-md-5">
							<div class="footer-items footer-1 d-flex justify-content-center" style={{ paddingTop: "11px" }}>
								<h6 class="fs-5 fw-normal">All rights reserved @ 2022 - 2023</h6>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="row foot-menu">
								<div class="col-md-4 text-center">
									<Link onClick={() => window.scrollTo(0, 0)}>Home</Link>
								</div>
								<div class="col-md-4 text-center">
									<Link href="/#price">Pricing Plan</Link>
								</div>
								<div class="col-md-4 text-center">
									<a href="#sku">Contact Us</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
