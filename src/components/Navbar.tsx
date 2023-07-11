import "../styles/Navbar.sass";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { gsap } from "gsap";

interface links {
	home: string;
	about: string;
	news: string;
	thinking: string;
	career: string;
	contact: string;
}

const links: links = {
	home: "/",
	about: "/about",
	news: "/news",
	thinking: "/thinking",
	career: "/career",
	contact: "/contact",
};

export default function Navbar() {
	const [isOpen, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		if (isOpen) {
		}
		gsap.to("#nav-overlay", {
			display: "flex",
			opacity: 1,
			duration: 0.5,
		});
		setOpen(true);
	};

	const handleDrawerClose = () => {
		gsap.to("#nav-overlay", {
			opacity: 0,
			display: "none",
			duration: 0.5,
		});
		setOpen(false);
	};
	return (
		<>
			<nav id="main-nav">
				<Logo />
				<ul>
					{Object.keys(links).map((link, index) => (
						<li key={index + 0.323}>
							<NavLink
								to={Object.values(links)[index]}
								className={({ isActive, isPending }) =>
									isPending ? "pending" : isActive ? "active" : ""
								}
							>
								{link.toUpperCase()}
							</NavLink>
						</li>
					))}
				</ul>
				<div id="more">
					<MoreHorizIcon />
				</div>
				<button type="button" id="menu-button" onClick={handleDrawerOpen}>
					MENU
				</button>
			</nav>
			<aside id="nav-overlay">
				<div>
					<Logo />
					<button
						type="button"
						id="menu-overlay-close"
						onClick={handleDrawerClose}
					>
						<HighlightOffSharpIcon sx={{ fontSize: 40 }} />
					</button>
				</div>
				<ul>
					{Object.keys(links).map((link, index) => (
						<li key={index + 0.323}>
							<NavLink
								to={Object.values(links)[index]}
								className={({ isActive, isPending }) =>
									isPending ? "pending" : isActive ? "active" : ""
								}
							>
								{link.toUpperCase()}
							</NavLink>
						</li>
					))}
				</ul>
				<footer></footer>
			</aside>
		</>
	);
}

function Logo() {
	return <div className="logo">BASIC/DEPT</div>;
}
