import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { FaCouch, FaTools, FaDraftingCompass } from "react-icons/fa";

const servicesData = [
  {
    title: "Custom Furniture",
    description:
      "Premium handcrafted furniture tailored to your style and space.",
    icon: FaCouch,
  },
  {
    title: "Interior Wood Work",
    description:
      "Elegant wooden interiors for homes, offices, and commercial spaces.",
    icon: FaDraftingCompass,
  },
  {
    title: "Repair & Restoration",
    description:
      "Expert repair and restoration services to bring furniture back to life.",
    icon: FaTools,
  },
];

export default function Services() {
  return (
    <Box py={20}>
      <Container maxW="1200px">
        <Stack textAlign="center" mb={14}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} color="brand.500">
            Our Services
          </Heading>
          <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.300" }}>
            We provide high-quality wood solutions designed with precision and passion.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {servicesData.map((service, index) => (
            <Box
              key={index}
              p={8}
              rounded="xl"
              shadow="md"
              bg="white"
              _dark={{ bg: "gray.800" }}
              _hover={{
                transform: "translateY(-5px)",
                shadow: "xl",
              }}
              transition="0.3s"
            >
              <Stack spacing={4} align="center" textAlign="center">
                <Icon
                  as={service.icon}
                  w={10}
                  h={10}
                  color="brand.500"
                />
                <Heading size="md">{service.title}</Heading>
                <Text color="gray.600" _dark={{ color: "gray.300" }}>
                  {service.description}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}