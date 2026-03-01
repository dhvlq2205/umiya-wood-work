import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Stack,
    useColorMode,
    useColorModeValue,
    Container,
    Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/react";
import logo_s from '../assets/images/logo_s.png'

const Links = [
    "Home",
    "About",
    "Services",
    "Gallery",
    "Why Choose Us",
    "Testimonials",
    "Contact",
];

const NavLink = ({ children }) => (
    <Box
        as="a"
        px={3}
        py={2}
        rounded="md"
        fontWeight="medium"
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("brand.100", "brand.700"),
        }}
        href="#"
    >
        {children}
    </Box>
);

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box
            bg={useColorModeValue("white", "gray.900")}
            px={4}
            boxShadow="sm"
            position="sticky"
            top="0"
            zIndex="1000"
        >
            <Container maxW="100%" p={0}>
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <Flex align="center" gap={3}>
                        <Box
                            as="img"
                            src={logo_s}
                            alt="Wood Works Logo"
                            boxSize="40px"
                            objectFit="contain"
                            borderRadius="md"
                        />
                        <Text
                            fontSize="lg"
                            fontWeight="bold"
                            color="brand.500"
                        >
                            Umiya Wood Work
                        </Text>
                    </Flex>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <HStack spacing={8} alignItems="center">
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    )}

                    {/* Right Section */}
                    {!isMobile && (
                        <Flex alignItems="center">
                            <IconButton
                                variant="icon"
                                onClick={toggleColorMode}
                                aria-label="Toggle Dark Mode"
                                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            />
                        </Flex>
                    )}
                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <IconButton
                            variant="icon"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label="Open Menu"
                            onClick={isOpen ? onClose : onOpen}
                        />
                    )}
                </Flex>

                {/* Mobile Menu */}
                {isMobile && isOpen && (
                    <Box pb={4}>
                        <Stack as="nav" spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}

                            {/* Divider */}
                            <Box borderTop="1px solid" borderColor="gray.300" pt={4}>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    px={2}
                                    cursor="pointer"
                                    onClick={toggleColorMode}
                                >
                                    <Text fontWeight="medium">
                                        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
                                    </Text>

                                    {colorMode === "light" ? (
                                        <MoonIcon />
                                    ) : (
                                        <SunIcon />
                                    )}
                                </Flex>
                            </Box>
                        </Stack>
                    </Box>
                )}
            </Container>
        </Box>
    );
}