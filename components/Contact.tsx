import {
  Stack,
  Heading,
  Text,
  useColorMode,
  Button,
  Link
} from '@chakra-ui/react';
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa';
import SlideUpWhenVisible from '../hook/slideUpWhenVisible';
import useMediaQuery from '../hook/useMediaQuery';

export default function Contact() {
  const { colorMode } = useColorMode();
  const isLargerThan800 = useMediaQuery(800);
  return (
    <>
      <Stack
        spacing={5}
        h="70vh"
        w="100%"
        alignItems={'center'}
        justifyContent={'center'}
      >
        <SlideUpWhenVisible threshold={undefined}>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign={'center'}>
            Places to find me.
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible threshold={undefined}>
          I&apos;m currently developing with my friends at{' '}
          <Link href="https://suro.club" isExternal>
            <Text
              display={'inline'}
              fontWeight="semibold"
              color={colorMode === 'light' ? '#5E81AC' : '#90CDF4'}
            >
              Suro.
            </Text>
            {/* </Link>{" "}
              and working on my social platform{" "}
              <Link href="https://" isExternal>
                <Text
                  display={"inline"}
                  fontWeight="semibold"
                  color={colorMode === "light" ? "#5E81AC" : "#90CDF4"}
                >
                  DOCTYPE
                </Text> */}
          </Link>
        </SlideUpWhenVisible>

        <Stack pt={'3vh'} spacing={5} w="100%" alignItems={'center'}>
          <SlideUpWhenVisible threshold={undefined}>
            <Stack isInline spacing={4}>
              <Link href="/github" isExternal>
                <Button
                  leftIcon={<FaGithub />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                >
                  GitHub
                </Button>
              </Link>
              <Link href="/linkedin" isExternal>
                <Button
                  leftIcon={<FaLinkedin />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                >
                  LinkedIn
                </Button>
              </Link>
              <Link href="/mail">
                <Button
                  leftIcon={<FaEnvelope />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                >
                  Email
                </Button>
              </Link>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible threshold={undefined}>
            <Stack isInline spacing={4}>
              <Link href="/discord" isExternal>
                <Button
                  leftIcon={<FaDiscord />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                >
                  Discord
                </Button>
              </Link>
              <Link href="/twitter" isExternal>
                <Button
                  leftIcon={<FaTwitter />}
                  position="static"
                  size={isLargerThan800 ? 'md' : 'sm'}
                >
                  Twitter
                </Button>
              </Link>
            </Stack>
          </SlideUpWhenVisible>
        </Stack>
      </Stack>
    </>
  );
}
