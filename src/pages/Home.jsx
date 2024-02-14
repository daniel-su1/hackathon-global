import { Box, Image, Text, VStack, HStack } from '@chakra-ui/react'
import hero from '../assets/hero.png'


function Home() {
    return (
        <VStack>
            
            <Box>
                <Text fontSize="90pt" fontWeight="525">Hackathon Global</Text>
                <Text fontSize="lg">Experience events brought to you by Hack the North</Text>
            </Box>
            <HStack>
            <Box>
                <Image src={hero} alt="computer" maxWidth="30em" 
                 top="20em" opacity="1" left="0" right="0" bottom="0" margin="auto" zIndex="-1" position=""
                />
            </Box>
            </HStack>
            
        </VStack>
    )
}

export default Home
