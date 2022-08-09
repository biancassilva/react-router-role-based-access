import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./components/ProtectedRoute"

const HomePage = lazy(() => import("../pages/HomePage"))
const UserPage = lazy(() => import("../pages/UserPage"))
const AdminPage = lazy(() => import("../pages/AdminPage"))
const Error403Page = lazy(() => import("../pages/Error403Page"))

const Router = (): JSX.Element => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route index element={<HomePage />} />
				<Route
					path={"/user"}
					element={
						<PrivateRoute>
							<UserPage />
						</PrivateRoute>
					}
				/>
				<Route
					path={"/admin"}
					element={
						<PrivateRoute>
							<AdminPage />
						</PrivateRoute>
					}
				/>
				<Route path={"/403"} element={<Error403Page />} />
			</Routes>
		</Suspense>
	)
}
export default Router
