import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
	const mobile = window.innerWidth <= 768 ? true : false;
	const [menuOpened, setMenuOpened] = useState(false);
	return (
		<div className="header">
			<img className="logo" src={Logo} alt="" />
			{menuOpened === false && mobile === true ? (
				<div
					style={{
						backgroundColor: "var(--appColor)",
						padding: "0.5rem",
						borderRadius: "5px",
					}}
					onClick={() => setMenuOpened(true)}
				>
					{" "}
					<img src={Bars} alt="" style={{ width: "1.5", height: "1.5rem" }} />
				</div>
			) : (
				<ul className="header-menu">
					<li>
						<Link onClick={() => setMenuOpened(false)}>Home</Link>
					</li>
					<li>
						<Link onClick={() => setMenuOpened(false)}>Programs</Link>
					</li>
					<li>
						<Link onClick={() => setMenuOpened(false)}>Why us</Link>
					</li>
					<li>
						<Link onClick={() => setMenuOpened(false)}>Plans</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="Testimonials"
							spy={true}
							smooth={true}
						>
							Testimonials
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Header;
