import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.png';

function Logo() {
  return (
    <Box>
        <Image src={logo} alt="Logo" />
    </Box>
  );
}

export default Logo;