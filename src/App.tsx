import "./App.css"
import { AuthProvider } from "./contexts/AuthContext"
import Router from "routes/Router"
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<ChakraProvider>
					<Router />
				</ChakraProvider>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
