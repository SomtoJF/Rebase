import "../styles/Footer.sass";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Footer() {
	const [changeAccessibility, setChangeAccessibility] = useState(false);
	function doElsCollide(
		element1: HTMLElement | any,
		element2: HTMLElement | any
	): boolean {
		const rect1 = element1.getBoundingClientRect();
		const rect2 = element2.getBoundingClientRect();

		// Check if the rectangles overlap
		const overlapX = rect1.left < rect2.right && rect1.right > rect2.left;
		const overlapY = rect1.top < rect2.bottom && rect1.bottom > rect2.top;

		return overlapX && overlapY;
	}

	useEffect(() => {
		const accessibilityButton = document.getElementById("accessibility-button");
		if (changeAccessibility === true) {
			gsap.to(accessibilityButton, {
				color: "#252422",
				backgroundColor: "#f4f4f4",
				duration: 1,
			});
		}
		if (changeAccessibility === false) {
			gsap.to(accessibilityButton, {
				color: "#f4f4f4",
				backgroundColor: "#252422",
				duration: 1,
			});
		}
	}, [changeAccessibility]);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const accessibilityButton = document.getElementById(
				"accessibility-button"
			);
			const footer = document.getElementById("footer");
			const collision = doElsCollide(accessibilityButton, footer);
			if (changeAccessibility == false && collision == true) {
				setChangeAccessibility(true);
			} else {
				setChangeAccessibility(false);
			}
			// console.log(changeAccessibility);
		});
	}, []);

	return (
		<>
			<footer id="footer">
				<h3 className="logo">R/B®</h3>
				<p>
					We collaborate with ambitious brands and people. Let's build.{" "}
					<a href="mailto:biz@basicagency.com">biz@basicagency.com</a>
				</p>
				<form action="" onSubmit={(e) => e.preventDefault()}>
					<h4>
						<label htmlFor="user-email">STAY IN THE KNOW</label>
					</h4>
					<div>
						<input
							type="email"
							name="email"
							id="user-email"
							placeholder="Email Address"
						/>
						<button type="submit">
							<ArrowForwardIcon />
						</button>
					</div>
				</form>
				<div id="footer-contact">
					<h4>SOCIAL</h4>
					<h4>INITIATIVES</h4>
					<h4>OFFICES</h4>
					<ul>
						<li>
							<a href="#">Instagram</a>
						</li>
						<li>
							<a href="#">Twitter</a>
						</li>
						<li>
							<a href="#">LinkedIn</a>
						</li>
						<li>
							<a href="#">Facebook</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="#">Crafted</a>
						</li>
						<li>
							<a href="#">Applied</a>
						</li>
						<li>
							<a href="#">Bandbeats</a>
						</li>
						<li>
							<a href="#">Moves</a>
						</li>
						<li>
							<a href="#">B®/Good</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="#">Lagos - NG</a>
						</li>
						<li>
							<a href="#">New York - NY</a>
						</li>
						<li>
							<a href="#">Bay Area - CA</a>
						</li>
						<li>
							<a href="#">St. Louis - MO</a>
						</li>
						<li>
							<a href="#">Cape Town - ZA</a>
						</li>
						<li>
							<a href="#">London - EN</a>
						</li>
						<li>
							<a href="#">Stockholm - SE</a>
						</li>
						<li>
							<a href="#">Wien - AU</a>
						</li>
					</ul>
				</div>
			</footer>
			<section id="end">
				<div>RE/BASE®, INC 07 - 23©</div>
				<div>EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</div>
				<div>TERMS, PRIVACY POLICY</div>
			</section>
		</>
	);
}
