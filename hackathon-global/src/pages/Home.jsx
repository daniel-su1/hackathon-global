import { Box, Image, Text, VStack } from '@chakra-ui/react'
import hero from '../assets/hero.png'


function Home() {
    return (
        <VStack>
            <Box>
                <Image src={hero} alt="computer" maxWidth="60em" 
                position="absolute" top="20em" opacity="0.5" left="0" right="0" bottom="0" margin="auto" zIndex="hide"
                />
            </Box>
            <Box>
                <Text fontSize="90pt" fontWeight="525">Hackathon Global</Text>
                <Text fontSize="lg">Events brought to you by Hack The North</Text>
            </Box>
        </VStack>
    )
}

export default Home
