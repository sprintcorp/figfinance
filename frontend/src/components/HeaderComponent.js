import React from 'react';
import {Link, useNavigate,} from "react-router-dom";
import {useSelector} from "react-redux";
import {logout} from "../redux/actions/UserAction";

function HeaderComponent() {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const navigate = useNavigate();


	const logoutHandler = () => {
		logout();
		navigate("/",{replace:true});
	};

	return (

		<div>
			<nav className="navbar navbar-expand-lg bg-primary bg-gradient mb-3">
				<div className="container-fluid">
					<Link className="navbar-brand text-light" to="/">Fig Finance Event</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
									aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					{userInfo ? (
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link to="/dashboard" className="nav-link text-white">{userInfo.email}</Link>
								</li>
								<li className="nav-item" onClick={logoutHandler}>
									<p  className="nav-link text-white">Sign out</p>
								</li>
							</ul>
						</div>
						):(
							<div className="collapse navbar-collapse" id="navbarNavDropdown">
								<ul className="navbar-nav">
									<li className="nav-item">
										<Link to="/login" className="nav-link text-white">Sign in</Link>
									</li>
									<li className="nav-item">
										<Link  to="/register" className="nav-link text-white">Sign up</Link>
									</li>
								</ul>
							</div>
						)}
				</div>
			</nav>
		</div>
	);
}

export default HeaderComponent;
