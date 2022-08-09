import { useNavigate } from "react-router-dom"
import { Flex, Center, Button, Text, HStack } from "@chakra-ui/react"

const Error403Page = () => {
	const navigate = useNavigate()
	return (
		<Flex p={10} h='100vh'>
			<Center display='flex' flexDirection='column' w='100vw'>
				<Text fontSize='4rem' fontWeight='bolder'>
					Oooops!
				</Text>
				<Text fontSize='1.2rem' mb={5}>Access Denied! You don't have permission to access this page.</Text>

				<Button onClick={() => navigate("/")} colorScheme='blue'>
					Back to Home
				</Button>
			</Center>
		</Flex>
	)
}

export default Error403Page
