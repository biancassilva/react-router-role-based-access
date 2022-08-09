import { createContext, useContext, useState } from "react"
import { UserPermission } from "../types/Roles"

interface IAuth {
	role?: UserPermission
	username?: string
}

const AuthContext = createContext<IAuth>({})

export const useAuth = () => {
	const context = useContext(AuthContext)
	return context as IAuth
}

export const AuthProvider = ({ children }) => {
	// Implement your Auth stuff
	const [role, setRole] = useState<UserPermission>(UserPermission.ADMIN)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [username, setUsername] = useState<string>("Jon Doe")

	if (isLoading) return <div>Loading auth...</div>

	return (
		<AuthContext.Provider value={{ username, role }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
