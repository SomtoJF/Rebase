import axios from "axios";

const endpoint: string = import.meta.env.VITE_REACT_APP_AWS_ENDPOINT;

type cartItem = {
	name: string;
	description: string;
	price: number;
	image: string;
};

interface CartPayload {
	userid: string;
	cart: "[{}]" | cartItem[];
	totalPrice: number;
}

const postNewCart = async (body: CartPayload) => {
	const payload = { ...body, cart: JSON.stringify(body.cart) };
	try {
		let response = await axios.post(endpoint + "cart", { body: payload });
		return response;
	} catch (err: any) {
		throw new Error(err);
	}
};

export { postNewCart };
