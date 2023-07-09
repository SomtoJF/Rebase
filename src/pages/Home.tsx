import React, { useState } from "react";
import "../styles/Home.sass";
import { Services } from "../Types/Home";
import OurJobsComponent from "../components/Services";

export default function Home() {
	const [displayedJob, setDisplayedJob] = useState(Services);
	const displayServices = () => {
		setDisplayedJob(Services);
	};

	return (
		<section id="home-page">
			<header>
				<p className="mega-text">
					EASY TO <br /> UNDERSTAND. <br />
					<div
						style={{
							backgroundColor: "#252422",
							height: "max(38px, 4vw)",
							width: "max(38px, 4vw)",
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
				<section id="job-summary">
					<p>
						The work we create lives at the intersection of clarity and surprise
						and positions brands in culture through shared values and ideals.
					</p>
					<div>
						<button onClick={displayServices}>SERVICES</button>
						<button>INDUSTRIES</button>
						<button>ALL WORK</button>
					</div>
				</section>
				<OurJobsComponent data={displayedJob} />
			</main>
		</section>
	);
}
