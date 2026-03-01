import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="gray.900" color="gray.300" pt={16} pb={8}>
      <Container maxW="1200px">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gap={10}
        >
          {/* Brand Section */}
          <GridItem>
            <Heading size="md" color="brand.500" mb={4}>
              Umiya Wood Work
            </Heading>
            <Text fontSize="sm">
              Premium custom wood furniture and interior solutions crafted
              with precision and passion.
            </Text>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <Heading size="sm" mb={4} color="white">
              Quick Links
            </Heading>
            <Stack spacing={2}>
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Services</Link>
              <Link href="#">Gallery</Link>
              <Link href="#">Contact</Link>
            </Stack>
          </GridItem>

          {/* Contact Info */}
          <GridItem>
            <Heading size="sm" mb={4} color="white">
              Contact
            </Heading>

            <Stack spacing={3}>
              <Text>
                <Icon as={FaPhoneAlt} mr={2} />
                97269 72073
              </Text>

              <Text>
                <Icon as={FaEnvelope} mr={2} />
                Parthkpatel1806@gmail.com
              </Text>

              <Flex gap={4} pt={3}>
                <Link href="https://wa.me/919726972073" isExternal>
                  <Icon as={FaWhatsapp} boxSize={5} />
                </Link>

                <Link href="https://instagram.com/your_username" isExternal>
                  <Icon as={FaInstagram} boxSize={5} />
                </Link>

                <Link href="https://facebook.com/your_page" isExternal>
                  <Icon as={FaFacebookF} boxSize={5} />
                </Link>
              </Flex>
            </Stack>
          </GridItem>
        </Grid>

        {/* Bottom Line */}
        <Box borderTop="1px solid" borderColor="gray.700" mt={10} pt={6}>
          <Text fontSize="sm" textAlign="center">
            © {new Date().getFullYear()} Umiya Wood Work. All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}