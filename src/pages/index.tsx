import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { BsGithub } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Index() {
  return (
    <>
      <Head>
        <title>powdr - A zkVM toolkit</title>
        <meta
          name="description"
          content="powdr brings modularity, flexibility, security and excellent developer experience to zkVMs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="powdr - A zkVM toolkit" />
        <meta
          property="og:description"
          content="Powdr brings modularity, flexibility, security and excellent developer experience to zkVMs"
        />
        <meta property="og:image" content="https://powdr.org/og-image.png" />
      </Head>
      <Flex as="main" bg="light" flexDir="column" w="100%">
        <Container color="primary" maxW="5xl">
          <VStack gap="64px">
            <Header />
            <VStack gap="32px" my="24px">
              <Image src="/vector-art1.svg" alt="Vector art" />
              <Text
                maxW="830px"
                align="center"
                lineHeight="tall"
                fontSize={{ sm: "16px", md: "24px" }}
                fontWeight="light"
              >
                Powdr brings modularity, flexibility, security and excellent
                developer experience to zkVMs.
              </Text>
              <Flex
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                w="100%"
                gap="4"
              >
                <Link
                  href="https://github.com/powdr-labs/powdr/tree/main/riscv/tests/riscv_data/vec_median"
                  target="_blank"
                  p="16px"
                  borderRadius="full"
                  bg="accent"
                  fontFamily="heading"
                  fontWeight="bold"
                  fontSize={{ sm: "16px", md: "18px" }}
                  _hover={{ shadow: "lg" }}
                >
                  Check out our examples
                </Link>
                <Link
                  href="https://docs.powdr.org"
                  target="_blank"
                  p="16px"
                  borderRadius="full"
                  bg="gray.200"
                  fontFamily="heading"
                  fontWeight="bold"
                  fontSize={{ sm: "16px", md: "18px" }}
                  _hover={{ shadow: "lg" }}
                >
                  Read our docs
                </Link>
              </Flex>
            </VStack>
            <VStack gap="32px" my="24px">
              <Heading textAlign="center">How it works</Heading>
              <Text
                maxW="650px"
                align="center"
                lineHeight="tall"
                fontSize={{ sm: "16px", md: "24px" }}
                fontWeight="light"
              >
                Design a new zkVM in hours, through a user-defined ISA, which
                powdr compiles into a zkVM.
              </Text>
              <Text
                maxW="650px"
                align="center"
                lineHeight="tall"
                fontSize={{ sm: "16px", md: "24px" }}
                fontWeight="light"
              >
                Generate proofs using eSTARK, Halo2, Nova, and whatever comes
                next.
              </Text>
              <Image src="/vector-art2.svg" alt="Vector art" />
            </VStack>
            <VStack gap="32px" mb="24px" w={"100%"}>
              <Heading textAlign="center">Want to see more?</Heading>
              <Flex
                flexWrap="wrap"
                h="314px"
                w="100%"
                gap="4"
                fontFamily="heading"
              >
                <Link
                  position="relative"
                  display="flex"
                  href="https://github.com/powdr-labs"
                  target="_blank"
                  flex="1"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="3xl"
                  borderColor="dark"
                  border="1px"
                  minW="200px"
                  _before={{
                    opacity: 0,
                    position: "absolute",
                    content: `""`,
                    width: "100%",
                    height: "100%",
                    borderRadius: "3xl",
                    background:
                      "linear-gradient(50deg, rgba(66, 141, 255, 1) 0%, rgba(66, 221, 255, 1) 50%, rgba(255, 155, 239, 1) 100%)",
                    transition: "0.33s",
                    zIndex: 0,
                  }}
                  _hover={{
                    shadow: "lg",
                    textTransform: "none",
                    border: "none",
                    _before: { opacity: 1 },
                  }}
                >
                  <Flex
                    zIndex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="2"
                  >
                    <BsGithub size="72px" />
                    <Text
                      fontWeight="bold"
                      fontSize={{ sm: "16px", md: "24px" }}
                    >
                      Check our Github
                    </Text>
                  </Flex>
                </Link>
                <Link
                  position="relative"
                  display="flex"
                  href="mailto:info@powdrlabs.com"
                  target="_blank"
                  flex="1"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="3xl"
                  borderColor="dark"
                  border="1px"
                  minW="200px"
                  _before={{
                    opacity: 0,
                    position: "absolute",
                    content: `""`,
                    width: "100%",
                    height: "100%",
                    borderRadius: "3xl",
                    background:
                      "linear-gradient(50deg, rgba(66, 141, 255, 1) 0%, rgba(66, 221, 255, 1) 50%, rgba(255, 155, 239, 1) 100%)",
                    transition: "0.33s",
                    zIndex: 0,
                  }}
                  _hover={{
                    shadow: "lg",
                    textTransform: "none",
                    border: "none",
                    _before: { opacity: 1 },
                  }}
                >
                  <Flex
                    zIndex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="2"
                  >
                    <HiOutlineEnvelope size="72px" />
                    <Text
                      fontWeight="bold"
                      fontSize={{ sm: "16px", md: "24px" }}
                    >
                      Contact us by email
                    </Text>
                  </Flex>
                </Link>
              </Flex>
            </VStack>
          </VStack>
        </Container>
      </Flex>
      <Footer />
    </>
  );
}
