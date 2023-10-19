import { getAuth } from "firebase/auth";
import "../styles/AuthMessageCard.sass";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function AuthMessageCard() {
	const auth = getAuth();
	const [message, setMessage] = useState<string | null>("You are logged out");
	const cardRef = useRef(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setMessage(`Welcome ${user.email}`);
			} else {
				setMessage("You are logged out");
			}
		});

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (cardRef.current) {
			fadeIn.play();
		}
	}, [message]);

	const fadeIn = gsap.to(cardRef.current, {
		display: "flex",
		duration: 1,
		opacity: 1,
		onComplete: () => {
			fadeOut.play();
		},
	});

	const fadeOut = gsap.to(cardRef.current, {
		display: "none",
		duration: 1,
		opacity: 0,
		delay: 2,
	});

	return (
		<div id="auth-message-card" ref={cardRef}>
			{message}
		</div>
	);
}
