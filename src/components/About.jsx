 import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  Button,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import aboutImage from "../assets/images/workshop.jpg";

export default function About() {
  return (
    <Box py={20} bg="gray.50" _dark={{ bg: "gray.800" }}>
      <Container maxW="1200px">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={10}
          alignItems="center"
        >
          {/* Image Section */}
          <GridItem>
            <Image
              src={aboutImage}
              alt="About Us"
              borderRadius="xl"
              boxShadow="lg"
            />
          </GridItem>

          {/* Content Section */}
          <GridItem>
            <Stack spacing={6}>
              <Heading
                fontSize={{ base: "2xl", md: "4xl" }}
                color="brand.500"
              >
                About Our Craftsmanship
              </Heading>

              <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.300" }}>
                At Umiya Wood Work, we specialize in premium custom wood
                furniture and interior solutions. With years of experience,
                we transform raw wood into timeless masterpieces.
              </Text>

              <Text fontSize="md" color="gray.600" _dark={{ color: "gray.300" }}>
                Our commitment to quality, precision, and durability ensures
                that every project reflects excellence and elegance.
              </Text>

              {/* Stats Section */}
              <SimpleGrid columns={3} spacing={6} pt={6}>
                <Box>
                  <Heading size="lg" color="brand.500">10+</Heading>
                  <Text fontSize="sm">Years Experience</Text>
                </Box>

                <Box>
                  <Heading size="lg" color="brand.500">500+</Heading>
                  <Text fontSize="sm">Projects Completed</Text>
                </Box>

                <Box>
                  <Heading size="lg" color="brand.500">100%</Heading>
                  <Text fontSize="sm">Client Satisfaction</Text>
                </Box>
              </SimpleGrid>

              <Button
                mt={4}
                size="lg"
                colorScheme="brand"
                width="fit-content"
              >
                Learn More
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}