interface props {
	info: info;
}

interface info {
	name: string;
	description: string;
	image: string;
}

export default function ClientCard({ info }: props) {
	return (
		<div className="client-card">
			<figure>
				<img src={info.image} alt={info.name} />
			</figure>
			<div
				className="info-name"
				style={{ fontWeight: 700, fontSize: "1.1rem" }}
			>
				{info.name.toUpperCase()}
			</div>
			<div style={{ fontSize: "0.9rem" }}>{info.description.toUpperCase()}</div>
		</div>
	);
}
