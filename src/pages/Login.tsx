import { FormEvent, useState } from "react";
import "../styles/Login.sass";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();
	const [requestIsLoading, setRequestIsLoading] = useState(false);
	const navigate = useNavigate();
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setRequestIsLoading(true);
		try {
			const response = await login(email, password);
			console.log(response);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
		setRequestIsLoading(false);
	};
	return (
		<div id="login-page" className="acct-mgmt">
			<h1>Login</h1>
			<form action="" onSubmit={handleSubmit} id="login-form">
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
				<button
					type="submit"
					disabled={requestIsLoading}
					style={{
						justifyContent: "center",
						alignItems: "center",
						display: "flex",
					}}
				>
					Login
				</button>
			</form>
		</div>
	);
}
