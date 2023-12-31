import { FormEvent, useState } from "react";
import "../styles/Login.sass";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { postNewCart } from "../Services/UserData";

export default function Signup() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { signup } = useAuth();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			throw new Error("Passwords do not match");
		}
		try {
			const response = await signup(email, password);
			const { uid } = response;
			postNewCart({ userid: uid, cart: "[{}]", totalPrice: 0 });
			setEmail("");
			setPassword("");
			setConfirmPassword("");
			navigate("/login");
		} catch (err: any) {
			throw new Error(err);
		}
	};

	return (
		<div id="sign-up" className="acct-mgmt">
			<h1>Sign Up</h1>
			<form action="" onSubmit={handleSubmit} id="signup-form">
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>

				<input
					type="password"
					name="password-confirmation"
					id="password-confirmation"
					placeholder="Confir m Password"
					value={confirmPassword}
					onChange={(e) => {
						setConfirmPassword(e.target.value);
					}}
				/>

				<p>
					Already have an account? <Link to="/login">Login</Link>
				</p>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}
