import Modal from "@mui/material/Modal";
import { FormEvent, useEffect, useState } from "react";
import { postPayloadInterface } from "../Services/Products";
import Fuse from "fuse.js";
import searchIllustration from "../assets/search.svg";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

interface props {
	products: postPayloadInterface[];
	openModal: boolean;
	setOpenModal: (value: boolean) => void;
}

const options = {
	shouldSort: true,
	// Search in `name` and in `category` array
	keys: ["name", "category"],
};

export default function SearchModal({
	products,
	openModal,
	setOpenModal,
}: props) {
	const [input, setInput] = useState("");
	const [searchResults, setSearchResults] = useState<any[]>([]);

	const fuse = new Fuse(products, options);

	useEffect(() => {
		const result = fuse.search(input);
		setSearchResults(result);
		console.log(result);
	}, [input]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<Modal
			open={openModal}
			onClose={() => setOpenModal(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
		>
			<div id="search-panel">
				<form>
					<input
						type="text"
						name="item"
						id="item-search"
						placeholder="Search by Name or Category"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button type="submit" onClick={handleSubmit}>
						Go
					</button>
				</form>
				<div id="results-container">
					{input === "" ? (
						<img
							src={searchIllustration}
							id="search-illustration"
							alt="search-illustration"
						/>
					) : (
						searchResults.map((item, index) => (
							<SearchItem data={item.item} key={index + 0.98982} />
						))
					)}
				</div>
			</div>
		</Modal>
	);
}

interface searchItemProps {
	data: postPayloadInterface;
}

function SearchItem({ data }: searchItemProps) {
	return (
		<>
			<article>
				<figure className="search-result figure">
					<img src={data.images} alt={data.name} />
				</figure>
				<div className="search-result name">{data.name}</div>
				<div className="search-result price">${data.price}</div>
				<div className="search-result category">{data.category}</div>
				<button type="button">
					<ShoppingBagOutlinedIcon sx={{ fontSize: 20 }} />
				</button>
			</article>
			<hr />
		</>
	);
}
