import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../../auth/LogoutButton";

import logo from "../../../assets/logo-blue.svg";

const UserBar = () => {
	const user = useSelector((state) => state.session.user);

	return (
		<nav className="nav">
			<div>About</div>
			<NavLink to="/" exact={true}>
				<img src={logo} alt="Yillow" />
			</NavLink>
			<div className="nav-rt">
				{!user && (
					<NavLink to="/login" exact={true} activeClassName="active">
						Login
					</NavLink>
				)}
				{user && <LogoutButton />}
			</div>
		</nav>
	);
};
export default UserBar;
