import "../styles/Footer.sass";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Footer() {
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
