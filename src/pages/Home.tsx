import "../styles/Home.sass";

export default function Home() {
	return (
		<section id="home-page">
			<header>
				<p className="mega-text">
					EASY TO <br /> UNDERSTAND. <br />
					<div
						style={{
							backgroundColor: "#252422",
							height: "4rem",
							width: "4rem",
							borderRadius: "100%",
							display: "inline-block",
						}}
					></div>{" "}
					{"      "}
					IMPOSSIBLE <br />
					TO IGNORE.
				</p>
			</header>
		</section>
	);
}
