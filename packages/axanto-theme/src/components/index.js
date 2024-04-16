import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import React from "react";
import Title from "./title";
import FontFace from "../assets/fonts/font-face";
import Layout from "./layout";
import Homepage from "../pages/homepage";
import Loading from "./loading";

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const overrides = extendTheme({
    fonts: {
      heading: "Kelson, system-ui, Helvetica, sans-serif"
    },
    colors: { ...state.theme.colors }
  });

  return (
    <ChakraProvider theme={{ ...overrides }}>
      <FontFace />
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      <>
        <Layout>
          <Switch>
            <Loading when={data.isFetching} />
            <Homepage when={data.isHome} />
          </Switch>
        </Layout>
        {/* <Box
        as="main"
        mt={{ base: "40px", md: "70px" }}
        minH="calc(100vh - 320px)"
      >
        <Switch>
         
          <SearchResults when={data.isSearch} />
          <Archive when={data.isArchive} />
          <Post when={data.isPostType} />
          <Page404 when={data.is404} />
        </Switch>
      </Box> */}

      </>

    </ChakraProvider>
  );
};

export default connect(Theme);
