import { useState } from "react";
import "../styles/Login.sass";
import { Link } from "react-router-dom";

export default function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	return (
		<div id="sign-up" className="acct-mgmt">
			<h1>Sign Up</h1>
			<form action="" id="signup-form">
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
					placeholder="Confirm Password"
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
