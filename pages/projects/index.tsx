// @ts-nocheck
import {
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Divider,
  SimpleGrid
} from '@chakra-ui/react';
import { createClient } from 'contentful';
import Head from 'next/head';
import { useState } from 'react';
import Container from '../../components/UI/Container';
import ProjectCard from '../../components/UI/ProjectCard';

function ProjectPage({ projects }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Container enableTransition={false}>
        <Head>
          <title>Projects</title>
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          my={['10vh', '10vh', '15vh', '15vh']}
        >
          <Stack spacing={5}>
            {' '}
            <Heading fontSize={{ base: '4xl', md: '6xl' }}>Projects</Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              A list of projects I have created or worked on.
            </Text>
            <Divider />
            <Stack maxW={700} spacing={5} alignSelf="center">
              <ProjectCard
                title={'Tabletop Nerds'}
                description={
                  'Tabletop-Nerds is a Laravel based Full Stack project built with massive ammounts of interactivity.  Built amongst a small team of 4 developers, this project utilizes several important coding practices and technologies.  Functionality between the Front-End/Back-End being seamless & efficient.'
                }
                deployLink={''}
                githubLink={'https://github.com/Voxel20/tabletop-nerds'}
                image={
                  'https://images.ctfassets.net/gpz0vzuizl3q/4krNsfhouW9wgiKuqKWOF3/c3cd5e43d9b9f773b4b9a330b7c0edd0/Screenshot_1.png?h=250'
                }
                tags={[
                  'Laravel',
                  'Docker',
                  'Blade',
                  'TailwindCSS',
                  'PHP',
                  'PHPUnit'
                ]}
              />
            </Stack>
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
            {projects
              .filter(
                (project) =>
                  project.fields.title
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                  project.fields.description
                    .toLowerCase()
                    .includes(query.toLowerCase())
              )
              .map((project) => (
                <ProjectCard
                  key={project.fields.title}
                  title={project.fields.title}
                  description={project.fields.description}
                  deployLink={project.fields.deployLink}
                  githubLink={project.fields.githubLink}
                  image={'https:' + project.fields.image.fields.file.url}
                  tags={project.fields.tags}
                />
              ))}
          </SimpleGrid>
        </Stack>
        <Stack maxW={1000} spacing={5} alignSelf="center" alignItems={'center'}>
          <Heading fontSize={{ base: '2xl', md: '4xl' }}>
            First Project. (2012)
          </Heading>
          <Text fontSize={{ base: '14px', md: '16px' }}>
            This is the very first project I worked on in 2012. theRandomizr.
          </Text>
          <ProjectCard
            title={'theRandomizr'}
            description={
              'A randomization website I built in 2012 to help my brothers and I decide on a movie to watch.  It did this using an unordered list & some vanilla JavaScript.  This was the project my father used in order to introduce me to the field of Web Development.'
            }
            deployLink={'https://therandomizr.com'}
            githubLink={'https://github.com/Voxel20/OGRandomizr'}
            image={
              'https://images.ctfassets.net/gpz0vzuizl3q/3DYntjbIXphZqT6qeqw7oa/9c7232850b211796718ced04006868e8/og-randomizr.png?h=250'
            }
            tags={['JavaScript', 'HTML5', 'CSS3']}
          />
        </Stack>
      </Container>
    </>
  );
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'projects',
    order: 'sys.updatedAt'
  });

  return {
    props: {
      projects: data.items.reverse()
    }
  };
}

export default ProjectPage;
