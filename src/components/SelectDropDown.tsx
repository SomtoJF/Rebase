import { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

interface props {
	label: string;
	options: string[];
}

export default function SelectDropDown({ label, options }: props) {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
	return (
		<div className="alter">
			<div>{label}</div>
			<button>
				<ExpandMoreOutlinedIcon sx={{ fontSize: 20, color: "#646362" }} />
			</button>
		</div>
	);
}
