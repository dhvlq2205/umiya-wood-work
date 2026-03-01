import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { FaAward, FaHandshake, FaClock, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    title: "Premium Quality",
    description:
      "We use only the finest wood materials to ensure long-lasting durability and elegance.",
    icon: FaAward,
  },
  {
    title: "Trusted Craftsmanship",
    description:
      "Years of experience delivering excellence in every project we undertake.",
    icon: FaHandshake,
  },
  {
    title: "On-Time Delivery",
    description:
      "We respect your time and ensure timely completion of every project.",
    icon: FaClock,
  },
  {
    title: "Guaranteed Satisfaction",
    description:
      "Customer satisfaction is our top priority with complete quality assurance.",
    icon: FaShieldAlt,
  },
];

export default function WhyChooseUs() {
  return (
    <Box py={20}>
      <Container maxW="1200px">
        <Stack textAlign="center" mb={14}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} color="brand.500">
            Why Choose Us
          </Heading>
          <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.300" }}>
            We combine craftsmanship, precision, and passion to deliver excellence.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={10}>
          {features.map((feature, index) => (
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
              <Stack spacing={4}>
                <Icon
                  as={feature.icon}
                  w={8}
                  h={8}
                  color="brand.500"
                />
                <Heading size="md">{feature.title}</Heading>
                <Text color="gray.600" _dark={{ color: "gray.300" }}>
                  {feature.description}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}