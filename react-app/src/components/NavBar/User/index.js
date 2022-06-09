import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../../auth/LogoutButton";
import { login } from "../../../store/session";

import logo from "../../../assets/logo-blue.svg";
import { Modal } from "../../../context/Modal";
import Login from "../Login";

const UserBar = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user);

	const [showLogin, setShowLogin] = useState(false);

	const email = process.env.REACT_APP_DEMO_EMAIL;
	const password = process.env.REACT_APP_DEMO_PASSWORD;

	const onLogin = async (e) => {
		e.preventDefault();
		await dispatch(login(email, password));
	};

	const onClose = () => {
		setShowLogin(false);
	};

	return (
		<nav className="nav">
			<NavLink to="/about" className="btn-font-lt">
				About
			</NavLink>
			<NavLink to="/" exact={true}>
				<img src={logo} alt="Yillow" />
			</NavLink>
			<div className="nav-rt">
				{!user && (
					<>
						<button className="btn-font-lt" onClick={() => setShowLogin(true)}>
							Login
						</button>
						<button type="button" className="btn-font-lt" onClick={onLogin}>
							Demo Login
						</button>
						{showLogin && (
							<Modal onClose={onClose}>
								<Login />
							</Modal>
						)}
					</>
				)}
				{user && (
					<>
						<NavLink className="btn-font-lt" to="/appointments" exact={true}>
							Appointments
						</NavLink>
						<LogoutButton />
					</>
				)}
			</div>
		</nav>
	);
};
export default UserBar;
