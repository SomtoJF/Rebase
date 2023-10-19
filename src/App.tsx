import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./App.sass";
import Navbar from "./components/Navbar";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Product from "./pages/Product";
import AuthMessageCard from "./components/AuthMessageCard";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<AuthMessageCard />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/news" element={<></>} />
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<></>} />
					<Route path="/login" element={<Login />} />
					<Route path="/contact" element={<></>} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/cart" element={<></>} />
					<Route path="/products/:id" element={<Product />} />
				</Routes>
				<button type="button" id="accessibility-button">
					<AccessibilityNewRoundedIcon />
				</button>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
