import { Box, Flex, Text, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, VStack, IconButton } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const Wish = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [wishes, setWishes] = useState([]);
  const [newWish, setNewWish] = useState('');

  const handleLike = (index) => {
    const updatedWishes = [...wishes];
    updatedWishes[index].likes += 1;
    updatedWishes.sort((a, b) => b.likes - a.likes);
    setWishes(updatedWishes);
  };

  const addWish = () => {
    if (newWish.length > 0 && newWish.length <= 250) {
      setWishes([{ text: newWish, likes: 0 }, ...wishes]);
      setNewWish('');
      onClose();
    }
  };

  return (
    <Box bg="black" color="white" minH="100vh" p={5}>
      <Flex justify="space-between" align="center" mb={5}>
        <Text fontSize="38px" fontWeight="bold" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">I WISH</Text>
        <Box>
          <Button variant="outline" mr={2}>Sign Up</Button>
          <Button variant="outline">Sign In</Button>
        </Box>
      </Flex>
      <VStack spacing={4}>
        {wishes.map((wish, index) => (
          <Flex key={index} p={5} bg="black" border="1px" borderColor="gray.700" borderRadius="lg" boxShadow="lg" _hover={{ transform: 'scale(1.05)' }} transition="transform .2s" position="relative">
            <Text noOfLines={10}>{wish.text}</Text>
            <IconButton icon={<FaHeart />} color={wish.likes > 0 ? 'green.500' : 'red.500'} position="absolute" bottom={2} right={2} onClick={() => handleLike(index)} />
          </Flex>
        ))}
      </VStack>
      <Button colorScheme="red" borderRadius="full" size="lg" onClick={onOpen}>ADD MY WISH</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Wish</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Your wish (max 250 words)" value={newWish} onChange={(e) => setNewWish(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addWish}>Add Wish</Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Wish;