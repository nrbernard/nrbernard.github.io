import Head from 'next/head'
import { ThemeProvider } from '@chakra-ui/core'
import { Box, Heading, IconButton, Link, Text } from '@chakra-ui/core'

function HomePage(): JSX.Element {
  return (
    <ThemeProvider>
      <Head>
        <title>Nick Bernard - Software Engineer in Portland, OR</title>
      </Head>
      <Box>
        <Heading>Hello, I'm Nick Bernard.</Heading>
        <Text>I write software for the web in Portland, OR.</Text>
        <Link href="mailto:nrobertbernard@gmail.com" isExternal color="blue.600">
          <IconButton aria-label="email" icon="email" variant="outline" />
        </Link>
      </Box>
    </ThemeProvider>
  );
}

export default HomePage
