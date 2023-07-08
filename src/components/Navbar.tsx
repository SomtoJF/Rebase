import "../styles/Navbar.sass";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { NavLink } from "react-router-dom";

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
	return (
		<nav>
			<div id="logo">BASIC/DEPT</div>
			<ul>
				{Object.keys(links).map((link, index) => (
					<li>
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
			<div>
				<MoreHorizIcon />
			</div>
		</nav>
	);
}
