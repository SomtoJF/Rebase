import ClientCard from "./ClientCard";
import { ServicesType, clientType } from "../Types/Home";
import "../styles/Services.sass";

type props = {
	data: ServicesType;
	clientTypes: clientType;
};

export default function OurJobsComponent({ data, clientTypes }: props) {
	const sectionHeads = Object.keys(data);
	return (
		<section id="our-jobs">
			{sectionHeads.map((item, index) => (
				<div key={index + 0.522} className="job-section">
					<div>
						<div className="item-number-container">
							<div>{(index + 1).toString().padStart(2, "0")}</div>
							<div>{"/" + sectionHeads.length.toString().padStart(2, "0")}</div>
						</div>
						<div className="client-type">
							<h2>{clientTypes[index].name.toUpperCase()}</h2>
							<p>{clientTypes[index].description}</p>
							<button type="button">LEARN MORE</button>
						</div>
					</div>
					{data[item].map((clientInfo) => (
						<ClientCard info={clientInfo} />
					))}
				</div>
			))}
		</section>
	);
}
