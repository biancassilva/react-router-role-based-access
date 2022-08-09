import { PathRouteProps } from "react-router-dom"
import { UserPermission } from "../../types/Roles"

interface IAccessRules {
	route: PathRouteProps
	canAccess: UserPermission[]
	redirectTo?: PathRouteProps
}

export const routesAccessRules: IAccessRules[] = [
	{
		route: { path: "/admin" },
		canAccess: [UserPermission.ADMIN]
	},
	{
		route: { path: "/user" },
		canAccess: [UserPermission.USER]
	}
]
