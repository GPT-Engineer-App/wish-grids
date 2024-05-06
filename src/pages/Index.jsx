// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5} textAlign="center">
      <Heading mb={4}>Welcome to the Wish Web App</Heading>
      <Text fontSize="xl" mb={6}>Your place to make wishes come true.</Text>
      <Button colorScheme="teal" onClick={() => window.location.href='/wish'}>
        Go to Wish Page <FaHeart />
      </Button>
    </Box>
  );
};

export default Index;