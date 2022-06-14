import Head from "next/head";
import { Stack } from "@chakra-ui/react";
import Introduction from "../components/Introduction";
import AboutMe from "../components/About";
import Contact from "../components/Contact";
import FeaturedProjects from "../components/FeaturedProjects";
import Container from "../components/UI/Container";
import { createClient } from "contentful";

function IndexPage({  }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Aiden Smith</title>
          <meta name="title" content="Aiden Smith" />
          <meta name="description" content="Aiden Smith's personal website" />
        </Head>
        <Stack
          as="main"
          justifyContent="center"
          spacing={"0px"}
          alignItems="center"
          mt={{ base: "10vh", md: "15vh" }}
        >
          <Introduction />
          <AboutMe />
          <Contact />
        </Stack>
      </Container>
    </>
  );
}

export default IndexPage;