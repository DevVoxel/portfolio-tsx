import Container from '../../components/UI/Container';
import Scroll from '../../components/Scroll';
import useMediaQuery from '../../hook/useMediaQuery';
import useColorMode from '@chakra-ui/react';
import Head from 'next/head';
import { Stack } from '@chakra-ui/react';
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
        </Stack>
      </Container>
      <Scroll />
    </>
  );
}
