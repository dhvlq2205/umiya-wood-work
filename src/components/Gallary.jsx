import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import tampleDoor from "../assets/images/products/tampleDoor.png";
import tample from "../assets/images/products/tample.png";
import partition from "../assets/images/products/partition.png";
import fringe from "../assets/images/products/fringe.png";
import ceiling from "../assets/images/products/ceiling.png";
import design3d from "../assets/images/products/design3d.png";

const galleryImages = [
  { src: tampleDoor, title: "Home Temple Doors" },
  { src: tample, title: "Tamples" },
  { src: partition, title: "Partitions" },
  { src: fringe, title: "Fringes" },
  { src: ceiling, title: "Ceilings" },
  { src: design3d, title: "3D Designs" },
];

export default function Gallery() {
  return (
    <Box py={20} bg="gray.50" _dark={{ bg: "gray.900" }}>
      <Container maxW="1200px">
        <Box textAlign="center" mb={14}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} color="brand.500">
            Our Projects
          </Heading>
          <Text
            fontSize="lg"
            color="gray.600"
            _dark={{ color: "gray.300" }}
            mt={3}
          >
            Explore some of our finest craftsmanship and completed projects.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          {galleryImages.map((item, index) => (
            <Box
              key={index}
              position="relative"
              overflow="hidden"
              borderRadius="xl"
              role="group"
            >
              <Image
                src={item.src}
                alt={item.title}
                objectFit="cover"
                w="100%"
                h="300px"
                transition="0.4s"
                _groupHover={{ transform: "scale(1.1)" }}
              />

              {/* Overlay */}
              <Box
                position="absolute"
                inset="0"
                bg="blackAlpha.600"
                opacity="0"
                transition="0.4s"
                _groupHover={{ opacity: 1 }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                  px={4}
                >
                  {item.title}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}