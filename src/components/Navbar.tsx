import "../styles/Navbar.sass";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Navbar() {
	return (
		<nav>
			<div id="logo">BASIC/DEPT</div>
			<ul>
				<li>WORK</li>
				<li>ABOUT</li>
				<li>NEWS</li>
				<li>THINKING</li>
				<li>CAREER</li>
				<li>CONTACT</li>
			</ul>
			<div>
				<MoreHorizIcon />
			</div>
		</nav>
	);
}
