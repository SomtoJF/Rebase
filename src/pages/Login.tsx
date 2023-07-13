import { useState } from "react";
import "../styles/Login.sass";
import { Link } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div id="login-page">
			<h1>Login</h1>
			<form action="" id="login-form">
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
				<small>
					<input
						type="checkbox"
						name="show password"
						id="show-password-checkbox"
						onClick={() => {
							const x: any = document.getElementById("password");
							if (x.type === "password") {
								x.type = "text";
							} else {
								x.type = "password";
							}
						}}
					/>
					Show Password
				</small>
				<p>
					Don't have an account? <Link to="/signup">Sign Up</Link>
				</p>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
