import { FormEvent, useEffect, useState } from "react";
import { getAllproducts } from "../Services/Products";
import "../styles/Products.sass";
import { gsap } from "gsap";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { postPayloadInterface } from "../Services/Products";
import SelectDropDown from "../components/SelectDropDown";
import ProductItem from "../components/ProductItem";

export default function Products() {
	const [products, setproducts] = useState<postPayloadInterface[]>(
		[] as postPayloadInterface[]
	);
	const [displayedProducts, setDisplayedProducts] = useState<
		postPayloadInterface[]
	>(products as postPayloadInterface[]);
	const [categories, setCategories] = useState<string[]>([]);

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
		});
		return () => {
			gsap.to("#main-nav", {
				color: "#f4f4f4",
			});
		};
	}, []);

	function handleSearch(e: FormEvent) {
		e.preventDefault();
		const searchInput: any = document.getElementById("search-input");
		if (searchInput.value === "") {
			searchInput.style.width = "200px";
			searchInput.style.borderBottom = "solid 1px black";
		} else {
			searchInput.style.width = "1px";
			searchInput.value = "";
			searchInput.style.borderBottom = "none";
		}
	}

	function getUniqueElements<T>(arr: T[]): T[] {
		const uniqueSet = new Set<T>(arr);
		const uniqueArray = Array.from(uniqueSet);
		return uniqueArray;
	}

	useEffect(() => {
		const uniqueCategories = getUniqueElements(
			displayedProducts.map((products) => products.category)
		);
		setCategories(uniqueCategories);
	}, [displayedProducts]);

	return (
		<div id="products-page">
			<section>
				<h1>Products</h1>
				<form action="" onSubmit={handleSearch}>
					<input type="text" name="search" id="search-input" />
					<button type="submit">
						<SearchOutlinedIcon sx={{ fontSize: 20 }} />
					</button>
				</form>
			</section>
			<div id="menubar">
				<SelectDropDown label="Filter" options={categories} />
				<SelectDropDown label="Sort by" options={["name"]} />
			</div>
			<main id="products-section">
				{displayedProducts.map((product, index) => (
					<ProductItem product={product} key={index + 0.8228} />
				))}
			</main>
		</div>
	);
}
