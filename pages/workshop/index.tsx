import Container from '../../components/UI/Container';
import Scroll from '../../components/Scroll';
import useMediaQuery from '../../hook/useMediaQuery';
import useColorMode from '@chakra-ui/react';
import Head from 'next/head';
import { Stack, Text } from '@chakra-ui/react';
export default function Workshop() {
  const isLargerThan480 = useMediaQuery(480);
  const isLargerThan800 = useMediaQuery(800);
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>My Workshop</title>
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          my={['10vh', '10vh', '15vh', '15vh']}
        >
          <h1>Workshop</h1>
          <Text>
            This is a workshop page. I will be posting all common builds,
            components, small projects, and more here. A search function will be
            added accordingly eventually. This inlcudes sorting by tag of each
            iteration.
          </Text>
        </Stack>
      </Container>
      <Scroll />
    </>
  );
}
