import { useNavigate } from "react-router-dom"
import { Flex, Center, Button, Text, HStack } from "@chakra-ui/react"

const HomePage = () => {
	const navigate = useNavigate()
	return (
		<Flex p={10} h='100vh'>
			<Center display='flex' flexDirection='column' w='100vw'>
				<Text fontSize='1.5rem' fontWeight='bolder' mb={5}>
					Home Page
				</Text>
				<HStack spacing='24px'>
					<Button onClick={() => navigate("/admin")} colorScheme='blue'>
						Go to Admin page
					</Button>
					<Button onClick={() => navigate("/user")} colorScheme='green'>
						Go to User page
					</Button>
				</HStack>
			</Center>
		</Flex>
	)
}

export default HomePage
