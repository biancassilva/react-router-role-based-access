import { useNavigate } from "react-router-dom"
import { Flex, Button, Text, Center } from "@chakra-ui/react"

const AdminPage = () => {
	const navigate = useNavigate()
	return (
		<Flex p={10} h='100vh'>
			<Center display='flex' flexDirection='column' w='100vw'>
				<Text fontSize='1.5rem' fontWeight='bolder' mb={5}>
					Admin Page
				</Text>
				<Button onClick={() => navigate("/")} colorScheme='blue'>
					Back to Home
				</Button>
			</Center>
		</Flex>
	)
}

export default AdminPage
