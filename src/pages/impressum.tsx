import Footer from "@/components/Footer";
import Head from "next/head";
import { Flex, Heading, Text, Box, Stack } from "@chakra-ui/react";

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum</title>
        <meta name="description" content="Impressum" />
      </Head>
      <Flex direction="column" minHeight="100vh">
        <Flex as="main" direction="column" flex="1" w="100%" bg="light">
          <Box maxWidth="800px" margin="0 auto" padding="20px">
            <Heading as="h1" textAlign="center" marginBottom="20px">
              Impressum
            </Heading>
            <Stack textAlign="left" spacing="20px">
              <Text>
                <strong>powdr labs GmbH</strong>
                <br />
                Fichtestr, 32
                <br />
                10967 Berlin
                <br />
                Handelsregister: HRB260037B
                <br />
                Registergericht: Charlottenburg
              </Text>
              <Text>
                <strong>Vertreten durch:</strong>
                <br />
                Leonardo de S&aacute; Alt
                <br />
                Thibaut Schaeffer
              </Text>
              <Text>
                <strong>Kontakt</strong>
                <br />
                E-Mail: info@powdrlabs.com
              </Text>
              <Text>
                <strong>
                  Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
                </strong>
                <br />
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </Text>
            </Stack>
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
