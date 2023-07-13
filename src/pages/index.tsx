import Header from "@/components/Header";
import { Logotype } from "@/components/Logotype";
import {
  Button,
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
        <title>Powdr - A zkVM toolkit</title>
        <meta
          name="description"
          content="Powdr brings modularity, flexibility, security and excellent developer experience to zkVMs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Powdr - A zkVM toolkit" />
        <meta
          property="og:description"
          content="Powdr brings modularity, flexibility, security and excellent developer experience to zkVMs"
        />
        <meta property="og:image" content="https://powdr.org/og-image.png" />
        <link rel="icon" href="/favicon.svg" />
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
                developper experience to zkVMs.
              </Text>
              <Button
                py="24px"
                borderRadius="full"
                bg="accent"
                fontFamily="heading"
                fontSize={{ sm: "16px", md: "18px" }}
                _hover={{ shadow: "lg" }}
              >
                Check out our examples
              </Button>
            </VStack>
            <VStack gap="32px" my="24px">
              <Heading>How it works</Heading>
              <Text
                maxW="650px"
                align="center"
                lineHeight="tall"
                fontSize={{ sm: "16px", md: "24px" }}
                fontWeight="light"
              >
                Design a new zkVM in hours, through a user-defined ISA which
                Powdr compiles into a zkVM.
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
              <Heading>Want to see more?</Heading>
              <Flex
                flexWrap="wrap"
                h="314px"
                w="100%"
                gap="4"
                fontFamily="heading"
              >
                <Link
                  display="flex"
                  href="https://github.com/powdr-org"
                  target="_blank"
                  flex="1"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="2"
                  borderRadius="3xl"
                  borderColor="dark"
                  border="1px"
                  minW="200px"
                  _hover={{ textTransform: "none" }}
                >
                  <BsGithub size="72px" />
                  <Text fontWeight="bold" fontSize={{ sm: "16px", md: "24px" }}>
                    Check our Github
                  </Text>
                </Link>
                <Link
                  display="flex"
                  href="mailto:info@powdr.org"
                  flex="1"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems="center"
                  gap="2"
                  borderRadius="3xl"
                  borderColor="dark"
                  border="1px"
                  minW="200px"
                  _hover={{ textTransform: "none" }}
                >
                  <HiOutlineEnvelope size="72px" />
                  <Text fontWeight="bold" fontSize={{ sm: "16px", md: "24px" }}>
                    Contact us by email
                  </Text>
                </Link>
              </Flex>
            </VStack>
          </VStack>
        </Container>
      </Flex>
      <Flex as="footer" bg="dark" mt="24px" h="300px">
        <Flex
          flexDir="column"
          flexGrow="1"
          justifyContent="center"
          alignItems="center"
          color="light"
          overflow="hidden"
        >
          <Logotype color="light" height="75px" />
          <Flex gap="4" fontFamily="heading" fontSize="16px">
            <Text>Powdr-2023</Text>
            <Link href="#">Legals</Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
