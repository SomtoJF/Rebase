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
		return response.data.body;
	} catch (err: any) {
		throw new Error(err);
	}
};

const getProduct = async (id: any): Promise<postPayloadInterface> => {
	try {
		let response = await axios.get(endpoint + `products/${id}`, {
			params: {
				id: id,
			},
		});
		return response.data.body;
	} catch (err: any) {
		console.log(err);
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

export { getAllproducts, postProduct, getProduct };
export type { postPayloadInterface };
