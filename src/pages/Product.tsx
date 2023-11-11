import { useEffect, useState } from "react";
import { getProduct, postPayloadInterface } from "../Services/Products";
import { useParams } from "react-router-dom";

export default function Product() {
	const [product, setProduct] = useState<postPayloadInterface>();
	let { id } = useParams();
	useEffect(() => {
		getProduct(id).then((item) => setProduct(item));
		console.log(product);
	}, []);
	return <div>Product</div>;
}
