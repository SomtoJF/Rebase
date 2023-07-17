const endpoint: string = import.meta.env.VITE_REACT_APP_AWS_ENDPOINT;
import axios from "axios";

interface postPayloadInterface {
	name: string;
	description: string;
	price: number;
	stock: number;
	images: string;
	category: string;
}

const getAllproducts = async () => {
	try {
		let response = await axios.get(endpoint + "products");
		console.log(response);
		return response;
	} catch (err: any) {
		throw new Error(err);
	}
};

const postProduct = async (params: postPayloadInterface) => {
	try {
		let response = await axios.post(endpoint + "products", {
			body: params,
		});
		return response;
	} catch (err: any) {
		throw new Error(err);
	}
};

export { getAllproducts, postProduct };
export type { postPayloadInterface };
