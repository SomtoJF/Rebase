import vizioImage from "../assets/vizio.jpeg";
import hipHopimage from "../assets/hiphop.jpeg";
import patagoniaImage from "../assets/patagonia.jpeg";
import kfcImage from "../assets/kfc.jpeg";
import brixtonImage from "../assets/brixton.jpeg";

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
			image: patagoniaImage,
		},
	],
	branding: [
		{
			name: "kfc mother's day",
			description:
				"Kentucky Fried Buckquet — A DIY arrangement that combines the two things Mom really wants, flowers and fried chicken.",
			image: kfcImage,
		},
		{
			name: "brixton ss/22",
			description: "A fresh collab with Brixton just in time for spring",
			image: brixtonImage,
		},
	],
	products: [
		{
			name: "kfc",
			description:
				"A transformed digital ordering platform, merging KFC’s iconic brand with unparalleled convenience",
			image: kfcImage,
		},
		{
			name: "the webby awards",
			description:
				"Establishing a new product strategy and design system for the Internet’s highest honor",
			image: "",
		},
	],
};

export { Services };
export type { ServicesType };
