import React from "react";
import ClientCard from "./ClientCard";
import { ServicesType, Services } from "../Types/Home";
import "../styles/Services.sass";

type props = {
	data: ServicesType;
};

export default function OurJobsComponent({ data }: props) {
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
						<div>{item.toUpperCase()}</div>
					</div>
					{data[item].map((clientInfo) => (
						<ClientCard info={clientInfo} />
					))}
				</div>
			))}
		</section>
	);
}
