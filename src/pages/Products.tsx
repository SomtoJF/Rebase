import { useEffect, useState } from "react";
import { getAllproducts } from "../Services/Products";
import "../styles/Products.sass";
import { gsap } from "gsap";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { postPayloadInterface } from "../Services/Products";
import ProductItem from "../components/ProductItem";
import { Skeleton } from "@mui/material";
import SearchModal from "../components/SearchModal";

export default function Products() {
	const [products, setproducts] = useState<postPayloadInterface[]>(
		[] as postPayloadInterface[]
	);
	const [displayedProducts, setDisplayedProducts] = useState<
		postPayloadInterface[]
	>(products as postPayloadInterface[]);
	const [loading, setLoading] = useState<boolean>(true);
	const [openModal, setOpenModal] = useState(false);

	const darkNav = () => {
		gsap.to("#main-nav", {
			color: "#252422",
			duration: 2,
		});
	};
	useEffect(() => {
		darkNav();
		getAllproducts().then((response) => {
			setproducts(response);
			setDisplayedProducts(response);
			setLoading(false);
		});
		return () => {
			gsap.to("#main-nav", {
				color: "#f4f4f4",
			});
		};
	}, []);

	return (
		<div id="products-page">
			<section>
				<h1>Products</h1>
				<button
					type="button"
					onClick={() => setOpenModal(true)}
					className="openModal"
				>
					<SearchOutlinedIcon sx={{ fontSize: 20 }} />
				</button>
			</section>

			<SearchModal
				products={products}
				openModal={openModal}
				setOpenModal={setOpenModal}
			/>

			{loading && (
				<main id="products-section">
					<Skeleton component={"div"} className="productItem"></Skeleton>
					<Skeleton component={"div"} className="productItem"></Skeleton>
					<Skeleton component={"div"} className="productItem"></Skeleton>
					<Skeleton component={"div"} className="productItem"></Skeleton>
					<Skeleton component={"div"} className="productItem"></Skeleton>
					<Skeleton component={"div"} className="productItem"></Skeleton>
				</main>
			)}
			{!loading && (
				<main id="products-section">
					{displayedProducts.map((product, index) => (
						<ProductItem product={product} key={index + 0.8228} />
					))}
				</main>
			)}
		</div>
	);
}
