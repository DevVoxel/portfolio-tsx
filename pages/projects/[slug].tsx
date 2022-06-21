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
  SiGit
} from 'react-icons/si';
import { VscTerminalBash } from 'react-icons/vsc';
import useMediaQuery from '../../hook/useMediaQuery';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import PostContainer from '../../components/Blog/PostContainer';
import MDXComponents from '../../components/Blog/MDXComponents';

function Project({ data, source }) {
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
  const Tags = data.tags.map((item) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? 'md' : 'sm'}
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ));

  return (
    <>
      <Container enableTransition={false}>
        <Head>
          <title>{data.title}</title>
        </Head>
        <Stack my="15vh" justifyContent="center" alignItems="center">
          <Stack
            w={['100vw', '95vw']}
            maxW="680px"
            p={['20px', '20px', '24px', '24px']}
          >
            {/* <Heading fontSize={['3xl', '3xl', '5xl', '5xl']} alignSelf="center">
              {data.title}
            </Heading> */}

            {/* <Stack
              py={4}
              direction={{ base: 'column', md: 'row' }}
              alignItems="baseline"
              justifyContent={'space-between'}
            >
              <Stack isInline alignItems={'center'}>
                <Avatar
                  name="Voxel20"
                  size="xs"
                  src="https://avatars.githubusercontent.com/u/29802327?v=4"
                  zIndex={-1}
                />
                <Text fontSize={['xs', 'xs', 'sm', 'sm']}>
                  Created by{' '}
                  <Link href="/github" isExternal>
                    Voxel20
                  </Link>
                </Text>
              </Stack>
            </Stack> */}
            <Stack
              borderRadius={'10px'}
              minH="200px"
              border="1px"
              borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            >
              <Image
                src={'https:' + data.image.fields.file.url}
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
                {data.title}
              </Heading>
              {data.githubLink ? (
                <Link
                  href={data.githubLink}
                  color={colorMode === 'light' ? 'black' : 'white'}
                  isExternal
                >
                  <FaGithub size={25} />
                </Link>
              ) : (
                <div />
              )}
              {data.deployLink ? (
                <Link
                  href={data.deployLink}
                  color={colorMode === 'light' ? 'black' : 'white'}
                  isExternal
                >
                  <FaExternalLinkAlt size={25} />
                </Link>
              ) : (
                <div />
              )}
            </Stack>
          </Stack>
          {isLargerThan480 ? (
            <Stack isInline>{Tags}</Stack>
          ) : (
            <Stack isInline>
              <Box>{Tags}</Box>
            </Stack>
          )}
          <Divider />
          {colorMode === 'light' ? (
            <>
              <PostContainer.light>
                <MDXRemote {...source} components={MDXComponents} />
              </PostContainer.light>
            </>
          ) : (
            <>
              <PostContainer.dark>
                <MDXRemote {...source} components={MDXComponents} />
              </PostContainer.dark>
            </>
          )}
        </Stack>
      </Container>
      <Scroll />
    </>
  );
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'projects'
  });
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'projects',
    'fields.slug': params.slug
  });

  const article = data.items[0].fields;
  const source = article.longDescription;
  const mdxSource = await serialize(source);

  return {
    props: {
      data: article,
      source: mdxSource
    }
  };
}

export default Project;
