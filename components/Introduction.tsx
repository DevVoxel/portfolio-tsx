import {
  Stack,
  Heading,
  Button,
  Text,
  SimpleGrid,
  SlideFade,
  Flex,
  Box,
  Image,
  useColorMode,
  Link
} from '@chakra-ui/react';
import { type ButtonProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaDiscord, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import useMediaQuery from '../hook/useMediaQuery';
import ContactRawForm from '../components/ContactRawForm';

export const MotionButton = motion<ButtonProps>(Button);

export default function Introduction() {
  const { colorMode } = useColorMode();
  const isLargerThan800 = useMediaQuery(800);
  const isLargerThan400 = useMediaQuery(400);
  return (
    <>
      <SimpleGrid columns={isLargerThan800 ? 2 : 1} spacing={8}>
        <Stack
          spacing={10}
          justifyContent="flex-start"
          alignItems="flex-start"
          mt={8}
        >
          <SlideFade
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.7 } }}
          >
            <Heading
              fontSize="display2"
              color={colorMode === 'light' ? '#A7C7E7' : '#90CDF4'}
              fontWeight="medium"
            >
              Hi there, my name is...
            </Heading>
          </SlideFade>
          <SlideFade
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.8 } }}
          >
            <Heading
              fontSize="display"
              letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
              fontWeight="bold"
              mt={-14}
              mb={2}
            >
              Aiden.
            </Heading>
            <Text fontSize="display2" fontWeight={'semibold'}>
              A Full-Stack Web Developer.
            </Text>
          </SlideFade>

          <SlideFade
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.9 } }}
          >
            <Text fontSize="display3" color="#8F9094">
              💻 Working on projects to further my knowledge.
              <br />
              💥 Website Associate @
              <Link href="https://www.revlocal.com" isExternal>
                RevLocal!
              </Link>
            </Text>
          </SlideFade>

          <SlideFade
            in={true}
            transition={{ enter: { duration: 0.4, delay: 1.0 } }}
          >
            {isLargerThan400 ? (
              <Stack isInline spacing={8}>
                <Link href="/github" isExternal>
                  <Button
                    leftIcon={<FaGithub />}
                    transition="0.3s"
                    position="relative"
                    size={isLargerThan800 ? 'md' : 'sm'}
                  >
                    GitHub
                  </Button>
                </Link>
                <Link href="/linkedin" isExternal>
                  <Button
                    leftIcon={<FaLinkedin />}
                    position="relative"
                    size={isLargerThan800 ? 'md' : 'sm'}
                  >
                    LinkedIn
                  </Button>
                </Link>
                <ContactRawForm />
              </Stack>
            ) : (
              <Box>
                <Link href="/github" isExternal>
                  <Button
                    leftIcon={<FaGithub />}
                    transition="0.3s"
                    position="relative"
                    size={isLargerThan800 ? 'md' : 'sm'}
                    mr={2}
                    mb={2}
                  >
                    GitHub
                  </Button>
                </Link>
                <Link href="/linkedin" isExternal>
                  <Button
                    leftIcon={<FaLinkedin />}
                    position="relative"
                    size={isLargerThan800 ? 'md' : 'sm'}
                    mr={2}
                    mb={2}
                  >
                    LinkedIn
                  </Button>
                </Link>
                <ContactRawForm />
              </Box>
            )}
          </SlideFade>
        </Stack>
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.2 } }}
        >
          <Flex
            marginLeft={{ base: 100, md: 125, lg: 175 }}
            mt={16}
            alignItems="normal"
            justifyContent="center"
            display={isLargerThan800 ? 'block' : 'none'}
          >
            <Box
              maxW={{ base: '312px', md: '412px', lg: '512px' }}
              maxH={{ base: '312px', md: '412px', lg: '512px' }}
            >
              <Image
                src={'https://avatars.githubusercontent.com/u/29802327?v=4'}
                w="100%"
                h="100%"
                placeholder="blur"
                borderRadius={'full'}
                maxW={{ base: '312px', md: '452px', lg: '612px' }}
                maxH={{ base: '312px', md: '452px', lg: '612px' }}
                alt={'Voxel20'}
              />
            </Box>
          </Flex>
        </SlideFade>
      </SimpleGrid>
    </>
  );
}
