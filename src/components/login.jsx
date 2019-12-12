import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "./Login.css";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
		this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	handleErrors(response) {
		if (!response.ok) {
			throw Error(response.statusText);
			// Make a Error Popup
		}
		return response;
	}

	handleSignInSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);

		fetch("/user/sign-in", {
			method: "POST",
			body: data
		})
		.then(this.handleErrors)
		.then(response => console.log("Signed In"))
		.catch(error => console.log(error));
	}

	handleSignUpSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);

		if (data.get("registerPassword") !== data.get("conPassword")) {
			// Raise Password Mismatch
			// Possibly use a Dynamic way to Update and render it
		}

		if (data.get("registerPassword").length < 8 || data.get("registerName").length < 8) {
			// Raise Length error
		}

		fetch("/user/sign-in", {
			method: "POST",
			body: data
		})
		.then(this.handleErrors)
		.then(response => console.log("Signed Up"))
		.catch(error => console.log(error));
	}

	render() {
		return (
			<Container component="main" maxWidth="xs">
				<div
					className={
						this.state.isToggleOn ? "container" : "container right-panel-active"
					}
					id="container"
				>
					<div className="form-container sign-up-container">
						<form onSubmit={this.handleSignUpSubmit}>
							<h1>Create Account</h1>
							<div className="social-container">
								<a href="#" className="social">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="#" className="social">
									<i className="fab fa-google-plus-g"></i>
								</a>
								<a href="#" className="social">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
							<span>or use your email for registration</span>
							<input type="text" id="registerName" placeholder="Username" />
							<input type="password" id="registerPassword" placeholder="Password" />
							<input
								type="password"
								id="confirmPassword"
								placeholder="Confirm Password"
							/>
							<button>Sign Up</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form onSubmit={this.handleSignInSubmit}>
							<h1>Sign in</h1>
							<div className="social-container">
								<a href="#" className="social">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="#" className="social">
									<i className="fab fa-google-plus-g"></i>
								</a>
								<a href="#" className="social">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
							<span>or use your account</span>
							<input type="text" id="username" placeholder="Username" />
							<input type="password" id="password" placeholder="Password" />
							<a href="/forgotPassword.html">Forgot your password?</a>
							<button action="submit">Sign In</button>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1>Welcome Back!</h1>
								<p>
									To keep connected with us please login with your personal info
								</p>
								<button
									className="ghost"
									onClick={this.handleClick}
									id="signIn"
								>
									Sign In
								</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1>Hello, Friend!</h1>
								<p>Enter your personal details and start journey with us</p>
								<button
									className="ghost"
									onClick={this.handleClick}
									id="signUp"
								>
									Sign Up
								</button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		);
	}
}

export default Login;
