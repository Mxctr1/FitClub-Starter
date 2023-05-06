import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_ax66fxi",
				"template_cm7ope4",
				form.current,
				"SiqS-UzpY3Kh0Yg63"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="Join" id="join-us">
			<div className="left-j">
				<hr />
				<div>
					<span className="stroke-text">READY TO</span>
					<span>LEVEL UP</span>
				</div>
				<div>
					<span>YOUR BODY</span>
					<span className="stroke-text">WITH US?</span>
				</div>
			</div>
			<div className="right-j">
				<form
					ref={form}
					onSubmit={sendEmail}
					action=""
					className="email-container"
				>
					<input
						type="email"
						name="user_email"
						placeholder="Enter your Email"
					/>
					<button className="btn btn-j" type="submit">
						Join Now
					</button>
				</form>
			</div>
		</div>
	);
};

export default Join;
