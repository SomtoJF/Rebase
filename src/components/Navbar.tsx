import "../styles/Navbar.sass";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { gsap } from "gsap";
import { useAuth } from "../Auth/AuthContext";

interface links {
	home: string;
	about: string;
	news: string;
	products: string;
	login: string;
	contact: string;
}

const links: links = {
	home: "/",
	products: "/products",
	news: "/news",
	about: "/about",
	contact: "/contact",
	login: "/login",
};

export default function Navbar() {
	const { currentUser } = useAuth();
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
							{link === "login" && currentUser ? (
								<LogoutButton handleDrawerClose={handleDrawerClose} />
							) : (
								<NavLink
									to={Object.values(links)[index]}
									onClick={handleDrawerClose}
									className={({ isActive, isPending }) =>
										isPending ? "pending" : isActive ? "active" : ""
									}
								>
									{link.toUpperCase()}
								</NavLink>
							)}
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
							{link === "login" && currentUser ? (
								<LogoutButton handleDrawerClose={handleDrawerClose} />
							) : (
								<NavLink
									to={Object.values(links)[index]}
									onClick={handleDrawerClose}
									className={({ isActive, isPending }) =>
										isPending ? "pending" : isActive ? "active" : ""
									}
								>
									{link.toUpperCase()}
								</NavLink>
							)}
						</li>
					))}
				</ul>
				<footer></footer>
			</aside>
		</>
	);
}

export function Logo() {
	return <div className="logo">RE/BASE</div>;
}

interface logoutButtonProps {
	handleDrawerClose: () => void;
}

function LogoutButton({ handleDrawerClose }: logoutButtonProps) {
	const { logout } = useAuth();
	return (
		<button
			onClick={() => {
				logout();
				handleDrawerClose();
				useNavigate()("/");
			}}
		>
			LOGOUT
		</button>
	);
}
