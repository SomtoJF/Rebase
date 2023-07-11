import { useState } from "react";
import "../styles/Home.sass";
import { Services, clientGroups } from "../Types/Home";
import OurJobsComponent from "../components/Services";
import homeVid from "../assets/homevid.mp4";

export default function Home() {
	const [displayedJob, setDisplayedJob] = useState(Services);
	const displayServices = () => {
		setDisplayedJob(Services);
	};

	return (
		<section id="home-page">
			<header>
				<video autoPlay loop muted playsInline>
					<source src={homeVid} type="video/mp4" />
				</video>
				<p className="mega-text" style={{ paddingLeft: "5vw" }}>
					EASY TO <br /> UNDERSTAND. <br />
					<div
						style={{
							backgroundColor: "#f4f4f4",
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
						We work to blur the lines between culture and fashion. Our work
						stands in the forefront of the fashion industry as we strive to
						demolish the boundary between what is called normal and not.
					</p>
					<div>
						<button onClick={displayServices}>COLLECTIONS</button>
						<button>INDUSTRIES</button>
						<button>ALL WORK</button>
					</div>
				</section>
				<OurJobsComponent data={displayedJob} clientTypes={clientGroups} />
			</main>
		</section>
	);
}
