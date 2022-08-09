import { useNavigate } from "react-router-dom"
import { Flex, Button, Text, Center } from "@chakra-ui/react"

const UserPage = () => {
	const navigate = useNavigate()
	return (
		<Flex p={10} h='100vh'>
			<Center display='flex' flexDirection='column' w='100vw'>
				<Text fontSize='1.5rem' fontWeight='bolder' mb={5}>
					User Page
				</Text>
				<Button onClick={() => navigate("/")} colorScheme='green'>
					Back to Home
				</Button>
			</Center>
		</Flex>
	)
}
export default UserPage
