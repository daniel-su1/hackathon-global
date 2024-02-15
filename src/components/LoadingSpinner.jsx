import { Spinner, Box } from "@chakra-ui/react"

export default function LoadingSpinner() {
    return (<Box textAlign="center" padding="20px">
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl"/>
        </Box>)
}