import {
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
    Text,
    Stack,
    Input,
    Textarea,
    Button,
    FormControl,
    FormLabel,
    useToast,
    Link,
    Icon,
} from "@chakra-ui/react";
import {
    FaWhatsapp,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaInstagram,
    FaFacebookF,
    FaEnvelope
} from "react-icons/fa";

export default function Contact() {
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "We will contact you shortly.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box py={20} bg="gray.50" _dark={{ bg: "gray.900" }}>
            <Container maxW="1200px">
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={12}
                >
                    {/* Contact Info */}
                    <GridItem>
                        <Stack spacing={6}>
                            <Heading fontSize={{ base: "2xl", md: "4xl" }} color="brand.500">
                                Contact Us
                            </Heading>

                            <Text color="gray.600" _dark={{ color: "gray.300" }}>
                                Have a project in mind? Let’s build something beautiful together.
                            </Text>

                            {/* Social Icons Row */}
                            <Stack direction="row" spacing={5} pt={4}>

                                {/* Call */}
                                <Link href="tel:9726972073">
                                    <Icon
                                        as={FaPhoneAlt}
                                        boxSize={6}
                                        color="brand.500"
                                        _hover={{ transform: "scale(1.2)" }}
                                        transition="0.3s"
                                    />
                                </Link>

                                {/* WhatsApp */}
                                <Link href="https://wa.me/919726972073" isExternal>
                                    <Icon
                                        as={FaWhatsapp}
                                        boxSize={7}
                                        color="green.500"
                                        _hover={{ transform: "scale(1.2)" }}
                                        transition="0.3s"
                                    />
                                </Link>

                                {/* Instagram */}
                                <Link href="https://instagram.com/your_username" isExternal>
                                    <Icon
                                        as={FaInstagram}
                                        boxSize={7}
                                        color="pink.400"
                                        _hover={{ transform: "scale(1.2)" }}
                                        transition="0.3s"
                                    />
                                </Link>

                                {/* Facebook */}
                                <Link href="https://facebook.com/your_page" isExternal>
                                    <Icon
                                        as={FaFacebookF}
                                        boxSize={6}
                                        color="blue.500"
                                        _hover={{ transform: "scale(1.2)" }}
                                        transition="0.3s"
                                    />
                                </Link>

                                {/* Email */}
                                <Link href="mailto:Parthkpatel1806@gmail.com">
                                    <Icon
                                        as={FaEnvelope}
                                        boxSize={6}
                                        color="gray.500"
                                        _hover={{ transform: "scale(1.2)" }}
                                        transition="0.3s"
                                    />
                                </Link>

                            </Stack>
                        </Stack>
                    </GridItem>

                    {/* Contact Form */}
                    <GridItem>
                        <Box
                            p={8}
                            rounded="xl"
                            shadow="md"
                            bg="white"
                            _dark={{ bg: "gray.800" }}
                        >
                            <form onSubmit={handleSubmit}>
                                <Stack spacing={4}>
                                    <FormControl isRequired>
                                        <FormLabel>Name</FormLabel>
                                        <Input placeholder="Your Name" />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>
                                        <Input type="email" placeholder="Your Email" />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Message</FormLabel>
                                        <Textarea placeholder="Your Message" />
                                    </FormControl>

                                    <Button
                                        type="submit"
                                        colorScheme="brand"
                                        size="lg"
                                    >
                                        Send Message
                                    </Button>
                                </Stack>
                            </form>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
}