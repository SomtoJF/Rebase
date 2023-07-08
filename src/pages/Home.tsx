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
			<main id="our-jobs">
				<nav>
					<p>
						The work we create lives at the intersection of clarity and surprise
						and positions brands in culture through shared values and ideals.
					</p>
					<div>
						<button>SERVICES</button>
						<button>INDUSTRIES</button>
						<button>ALL WORK</button>
					</div>
				</nav>
				<hr style={{ marginTop: "30px" }} />
			</main>
		</section>
	);
}
