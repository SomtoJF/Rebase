import { postPayloadInterface } from "../Services/Products";
import "../styles/ProductsItem.sass";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
interface props {
	product: postPayloadInterface;
}
export default function ProductItem({ product }: props) {
	return (
		<div className="product-item">
			<figure>
				<img src={product.images} alt={product.name} />
			</figure>
			<div className="item-info">
				<div style={{ width: "100%" }}>
					<div style={{ color: "red" }}>$ {product.price}</div>
					<div className="item-name" style={{ fontWeight: 700 }}>
						{product.name}
					</div>
				</div>
				<button>
					<AddOutlinedIcon sx={{ fontSize: 20, fontWeight: 700 }} />
				</button>
			</div>
			<div style={{ marginTop: "10px" }}>
				<small className="cat-tag">{product.category}</small>
			</div>
		</div>
	);
}
