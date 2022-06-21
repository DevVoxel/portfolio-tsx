// @ts-nocheck
import Container from '../../components/UI/Container';
import Head from 'next/head';
import Scroll from '../../components/Scroll';
import {
  Avatar,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
  useColorMode,
  Divider,
  Box,
  Tag,
  TagLabel,
  TagLeftIcon
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaReact } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiCss3,
  SiHtml5,
  SiChakraui,
  SiPrisma,
  SiPhp,
  SiBootstrap,
  SiMysql,
  SiLaravel,
  SiDocker,
  SiJquery,
  SiTailwindcss,
  SiMarkdown,
  SiBlazor,
  SiGit,
  SiReact
} from 'react-icons/si';
import { VscTerminalBash } from 'react-icons/vsc';
import useMediaQuery from '../../hook/useMediaQuery';
import PostContainer from '../../components/Blog/PostContainer';

function Project({ data }) {
  const isLargerThan480 = useMediaQuery(480);
  const isLargerThan800 = useMediaQuery(800);
  const { colorMode } = useColorMode();
  const getTag = (tag) => {
    let values = [];
    switch (tag) {
      case 'TypeScript':
        {
          values[0] = 'blue';
          values[1] = SiTypescript;
        }
        break;
      case 'JavaScript':
        {
          values[0] = 'yellow';
          values[1] = SiJavascript;
        }
        break;
      case 'Bash':
        {
          values[0] = 'grey';
          values[1] = VscTerminalBash;
        }
        break;
      case 'React':
        {
          values[0] = 'blue';
          values[1] = FaReact;
        }
        break;
      case 'NextJS':
        {
          values[0] = 'grey';
          values[1] = SiNextdotjs;
        }
        break;
      case 'JavaScript':
        {
          values[0] = 'yellow';
          values[1] = SiJavascript;
        }
        break;
      case 'CSS3':
        {
          values[0] = 'green';
          values[1] = SiCss3;
        }
        break;
      case 'CSS':
        {
          values[0] = 'green';
          values[1] = SiCss3;
        }
        break;
      case 'HTML5':
        {
          values[0] = 'red';
          values[1] = SiHtml5;
        }
        break;
      case 'HTML':
        {
          values[0] = 'red';
          values[1] = SiHtml5;
        }
        break;
      case 'ChakraUI':
        {
          values[0] = 'purple';
          values[1] = SiChakraui;
        }
        break;
      case 'Prisma':
        {
          values[0] = 'cyan';
          values[1] = SiPrisma;
        }
        break;
      case 'PHP':
        {
          values[0] = 'purple';
          values[1] = SiPhp;
        }
        break;
      case 'Bootstrap':
        {
          values[0] = 'grey';
          values[1] = SiBootstrap;
        }
        break;
      case 'MySQL':
        {
          values[0] = 'orange';
          values[1] = SiMysql;
        }
        break;
      case 'Laravel':
        {
          values[0] = 'pink';
          values[1] = SiLaravel;
        }
        break;
      case 'Docker':
        {
          values[0] = 'cyan';
          values[1] = SiDocker;
        }
        break;
      case 'JQuery':
        {
          values[0] = 'yellow';
          values[1] = SiJquery;
        }
        break;
      case 'TailwindCSS':
        {
          values[0] = 'blue';
          values[1] = SiTailwindcss;
        }
        break;
      case 'MDX':
        {
          values[0] = 'white';
          values[1] = SiMarkdown;
        }
        break;
      case 'Blade':
        {
          values[0] = 'orange';
          values[1] = SiBlazor;
        }
        break;
      case 'PHPUnit':
        {
          values[0] = 'purple';
          values[1] = SiPhp;
        }
        break;
      case 'Git':
        {
          values[0] = 'black';
          values[1] = SiGit;
        }
        break;
      default: {
        values[0] = 'white';
      }
    }
    return values;
  };

  return (
    <>
      <Container enableTransition={false}>
        <Head>
          <title>{'Tabletop Nerds'}</title>
        </Head>
        <Stack my="15vh" justifyContent="center" alignItems="center">
          <Stack
            w={['100vw', '95vw']}
            maxW="680px"
            p={['20px', '20px', '24px', '24px']}
          >
            <Stack
              borderRadius={'10px'}
              minH="200px"
              border="1px"
              borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            >
              <Image
                src={
                  'https://images.ctfassets.net/gpz0vzuizl3q/4krNsfhouW9wgiKuqKWOF3/c3cd5e43d9b9f773b4b9a330b7c0edd0/Screenshot_1.png?h=250'
                }
                borderRadius="10px"
                maxWidth={'100%'}
                maxHeight={'100%'}
                placeholder="blur"
                w="auto"
                mx="auto"
                alt="Project Image"
              ></Image>
            </Stack>
            <Stack
              isInline
              justifyContent={'center'}
              alignItems={'center'}
              spacing={6}
            >
              <Heading fontSize={['2xl', '2xl', '3xl', '3xl']}>
                {'Tabletop Nerds'}
              </Heading>
              <Link
                href={'https://github.com/Voxel20/tabletop-nerds'}
                color={colorMode === 'light' ? 'black' : 'white'}
                isExternal
              >
                <FaGithub size={25} />
              </Link>
              <div />
            </Stack>
          </Stack>
          {isLargerThan480 ? (
            <Stack isInline>
              {' '}
              <Tag
                key={'TypeScript'}
                colorScheme={'blue'}
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                <TagLeftIcon as={SiTypescript}></TagLeftIcon>
                <TagLabel>{'TypeScript'}</TagLabel>
              </Tag>
              <Tag
                key={'NextJS'}
                colorScheme={'black'}
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                <TagLeftIcon as={SiNextdotjs}></TagLeftIcon>
                <TagLabel>{'NextJS'}</TagLabel>
              </Tag>
              <Tag
                key={'ChakraUI'}
                colorScheme={'purple'}
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                <TagLeftIcon as={SiChakraui}></TagLeftIcon>
                <TagLabel>{'ChakraUI'}</TagLabel>
              </Tag>
              <Tag
                key={'React'}
                colorScheme={'blue'}
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                <TagLeftIcon as={SiReact}></TagLeftIcon>
                <TagLabel>{'React'}</TagLabel>
              </Tag>
            </Stack>
          ) : (
            <Stack isInline>
              <Box>
                {' '}
                <Tag
                  key={'TypeScript'}
                  colorScheme={'blue'}
                  size={isLargerThan800 ? 'md' : 'sm'}
                >
                  <TagLeftIcon as={SiTypescript}></TagLeftIcon>
                  <TagLabel>{'TypeScript'}</TagLabel>
                </Tag>
                <Tag
                  key={'NextJS'}
                  colorScheme={'black'}
                  size={isLargerThan800 ? 'md' : 'sm'}
                >
                  <TagLeftIcon as={SiNextdotjs}></TagLeftIcon>
                  <TagLabel>{'NextJS'}</TagLabel>
                </Tag>
                <Tag
                  key={'ChakraUI'}
                  colorScheme={'purple'}
                  size={isLargerThan800 ? 'md' : 'sm'}
                >
                  <TagLeftIcon as={SiChakraui}></TagLeftIcon>
                  <TagLabel>{'ChakraUI'}</TagLabel>
                </Tag>
                <Tag
                  key={'React'}
                  colorScheme={'blue'}
                  size={isLargerThan800 ? 'md' : 'sm'}
                >
                  <TagLeftIcon as={SiReact}></TagLeftIcon>
                  <TagLabel>{'React'}</TagLabel>
                </Tag>
              </Box>
            </Stack>
          )}
          <Divider />
          {colorMode === 'light' ? (
            <>
              <PostContainer.light></PostContainer.light>
            </>
          ) : (
            <>
              <PostContainer.dark></PostContainer.dark>
            </>
          )}
        </Stack>
      </Container>
      <Scroll />
    </>
  );
}

export default Project;
