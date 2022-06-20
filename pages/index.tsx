import Head from 'next/head';
import { Stack } from '@chakra-ui/react';
import Introduction from '../components/Introduction';
import AboutMe from '../components/About';
import Contact from '../components/Contact';
import Container from '../components/UI/Container';
import Scroll from '../components/Scroll';
import useMediaQuery from '../hook/useMediaQuery';

function IndexPage({}) {
  const isLargerThan800 = useMediaQuery(800);
  const isLargerThan1024 = useMediaQuery(1024);

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
          spacing={isLargerThan800 ? 12 : 5}
          alignItems="center"
          mt={{ base: '10vh', md: '15vh' }}
        >
          <Introduction />
          <AboutMe />
          <Contact />
        </Stack>
      </Container>
      <Scroll />
    </>
  );
}

export default IndexPage;
