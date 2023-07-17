import { useEffect } from "react";
import { getAllproducts } from "../Services/Products";

export default function Products() {
	useEffect(() => {
		getAllproducts();
	}, []);
	return <div>Products</div>;
}
