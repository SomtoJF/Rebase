import axios from "axios";
import { postPayloadInterface, postProduct } from "../Services/Products";

type ratingType = {
	rate: number;
	count: number;
};

interface fakestoreapiInterface {
	id: number;
	title: string;
	description: string;
	price: number;
	category: string;
	rating: ratingType;
	image: string;
}

const loadDB = async () => {
	try {
		const response = await axios.get("https://fakestoreapi.com/products/");
		const products: fakestoreapiInterface[] = response.data;
		for (let i = 0; i < products.length; i++) {
			const { title, rating, id, image, ...rest } = products[i];
			let postPayload: postPayloadInterface = Object.assign(
				{
					name: products[i].title,
					stock: products[i].rating.count,
					images: products[i].image,
				},
				rest
			);
			postProduct(postPayload);
		}
		console.log(products);
	} catch (error) {
		console.error(error);
	}
};

// const loadDB = async () => {
// 	try {
// 		postProduct({
// 			name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// 			description:
// 				"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// 			category: "men's clothing",
// 			images: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// 			price: 100,
// 			stock: 100,
// 		});
// 	} catch (error) {
// 		console.error(error);
// 	}
// };
export default loadDB;
