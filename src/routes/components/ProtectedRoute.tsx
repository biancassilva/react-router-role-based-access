import { useAuth } from "../../contexts/AuthContext"
import { useEffect, useState } from "react"
import { matchPath, Navigate, useLocation } from "react-router-dom"
import { routesAccessRules } from "../utils/accessRules"

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	let location = useLocation()
	const { role } = useAuth()
	const [accessAllowed, setAccessAllowed] = useState<boolean>(true)

	const routeRule = routesAccessRules.find((item) =>
		matchPath(item.route, location.pathname)
	)

	useEffect(() => {
		if (routeRule && role) {
			const canAccess = routeRule?.canAccess.includes(role)
			setAccessAllowed(canAccess)
		}
	}, [routeRule])

	if (!accessAllowed) {
		return (
			<Navigate
				to={routeRule?.redirectTo?.path || "/403"}
				state={{ from: location }}
			/>
		)
	}

	return children
}

export default ProtectedRoute
