import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import heroImage from "../assets/images/hero_wood.jpg";

export default function Hero() {
  return (
    <Box
      height="90vh"
      bgImage={`url(${heroImage})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="blackAlpha.700"
      />

      {/* Content */}
      <Container
        maxW="1200px"
        height="100%"
        position="relative"
        zIndex="1"
        display="flex"
        alignItems="center"
      >
        <Stack spacing={6} color="white" maxW="700px">
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
          >
            Crafted With Passion, Built To Last
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }}>
            Premium custom wood furniture and interior solutions 
            designed to elevate your space.
          </Text>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              size="lg"
              colorScheme="brand"
            >
              Explore Products
            </Button>

            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              Contact Us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}