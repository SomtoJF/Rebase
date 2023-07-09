import vizioImage from "../assets/vizio.jpeg";
import hipHopimage from "../assets/hiphop.jpeg";

type jobItem = {
	name: string;
	description: string;
	image: string;
};

type ServicesType = Record<string, jobItem[]>;

const Services: ServicesType = {
	websites: [
		{
			name: "Vizio",
			description: "championing entertainment the way it should be.",
			image: vizioImage,
		},
		{
			name: "b/d jams",
			description: "setting the tone every week",
			image: hipHopimage,
		},
	],
	ecommerce: [
		{
			name: "rad power bikes",
			description:
				"an ecommerce experience driven by a sustainability-powered vision.",
			image: "",
		},
		{
			name: "patagonia",
			description:
				"an ecommerce experience driven by patagonia's brand mission",
			image: "",
		},
	],
	branding: [],
	products: [],
};

export { Services };
export type { ServicesType };
