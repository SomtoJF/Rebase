import vizioImage from "../assets/vizio.jpeg";
import hipHopimage from "../assets/hiphop.jpeg";
import patagoniaImage from "../assets/patagonia.jpeg";
import kfcImage from "../assets/kfc.jpeg";
import brixtonImage from "../assets/brixton.jpeg";
import radBikesImage from "../assets/radbikes.jpeg";
import webbyAwardImage from "../assets/webbyAwards.jpeg";

type jobItem = {
	name: string;
	description: string;
	image: string;
};

type clientGroup = {
	name: string;
	description: string;
};

type clientType = clientGroup[];
type ServicesType = Record<string, jobItem[]>;

const Services: ServicesType = {
	websites: [
		{
			name: "Vizio",
			description: "championing entertainment the way it should be.",
			image: vizioImage,
		},
		{
			name: "b/d® jams",
			description: "setting the tone every week",
			image: hipHopimage,
		},
	],
	ecommerce: [
		{
			name: "rad power bikes",
			description:
				"an ecommerce experience driven by a sustainability-powered vision.",
			image: radBikesImage,
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
			image: webbyAwardImage,
		},
	],
};

const clientGroups: clientType = [
	{
		name: "websites + platforms",
		description:
			"We conceive and create experiences that immerse consumers in the brand through a combination of utility and creativity.",
	},
	{
		name: "branded ecommerce",
		description:
			"We go beyond best practices and build best-in-class D2C channels that drive commerce, shape culture, and define categories.",
	},
	{
		name: "branding + advertising",
		description:
			"We create identities, platforms, and activations that differentiate brands and position them to matter in culture.",
	},
	{
		name: "Digital products + services",
		description:
			"We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.",
	},
];

export { Services, clientGroups };
export type { ServicesType, clientType };
