// import React from "react";
// import { Navigate } from "react-router-dom";
//
// function PrivateRouter({ children, ...props }) {
// 	return props.isAuthenticated
// 		? children
// 		: <Navigate replace to='/' />
// }
//
// export default PrivateRouter;

import { Outlet, Navigate } from 'react-router-dom'

const PrivateRouter = ({...props }) => {
	return(
		props.isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
	)
}

export default PrivateRouter

