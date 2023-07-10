import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./App.sass";
import Navbar from "./components/Navbar";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/news" element={<></>} />
					<Route path="/thinking" element={<></>} />
					<Route path="/career" element={<></>} />
					<Route path="/contact" element={<></>} />
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
