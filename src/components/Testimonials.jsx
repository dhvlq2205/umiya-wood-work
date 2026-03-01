import { Box, Container, Heading, Text, Stack, Avatar, } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Ravi Patel",
        role: "Home Owner",
        feedback:
            "Outstanding craftsmanship! The custom furniture completely transformed our home interior.",
    },
    {
        name: "Mehul Shah",
        role: "Business Owner",
        feedback:
            "Professional team and on-time delivery. Highly recommend for premium wood interiors.",
    },
    {
        name: "Kiran Desai",
        role: "Architect",
        feedback:
            "Attention to detail and quality finishing exceeded our expectations.",
    },
    {
        name: "Amit Joshi",
        role: "Interior Designer",
        feedback:
            "Excellent finishing and high-quality wood material. Very reliable team.",
    },
];

export default function Testimonials() {
    const useCarousel = testimonials.length > 3;

    return (
        <Box py={20} bg="gray.50" _dark={{ bg: "gray.900" }}>
            <Container maxW="1200px">
                <Stack textAlign="center" mb={14}>
                    <Heading fontSize={{ base: "2xl", md: "4xl" }} color="brand.500">
                        What Our Clients Say
                    </Heading>
                    <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.300" }}>
                        Hear from our satisfied customers and partners.
                    </Text>
                </Stack>

                {useCarousel ? (
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        style={{ paddingBottom: "40px" }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Stack direction={{ base: "column", md: "row" }} spacing={8}>
                        {testimonials.map((item, index) => (
                            <TestimonialCard key={index} item={item} />
                        ))}
                    </Stack>
                )}
            </Container>
        </Box>
    );
}

function TestimonialCard({ item }) {
    return (
        <Box
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
            textAlign="center"
        >
            <Stack spacing={4} align="center">
                <Avatar name={item.name} size="lg" />
                <Text color="gray.600" _dark={{ color: "gray.300" }}>
                    “{item.feedback}”
                </Text>
                <Box>
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                        {item.role}
                    </Text>
                </Box>
            </Stack>
        </Box>
    );
}