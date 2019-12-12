import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
     return (
      <Container component="main" maxWidth="xs">
        <div className={this.state.isToggleOn?"container":"container right-panel-active"} id="container">
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Username" />
			<input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password"/>

			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="text" placeholder="Username" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Log In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Already have an account?</h1>
				<p>Hop In</p>
				<button className="ghost" onClick={this.handleClick} id="signIn">Log In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>New to Music Brain?</h1>
				<p>Create a new account for the best experience</p>
				<button className="ghost" onClick={this.handleClick} id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
      </Container>
    );
  }
}

export default Login;
