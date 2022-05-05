import * as React from "react";
import { Box, Heading, Link, Stack } from "native-base";
import { FORM_URL } from "../lib/constants";

export default function HomeScreen() {
  return (
    <Box alignSelf="center" justifyContent="center" height="100%">
      <Stack space={3} alignItems="center">
        <Heading>Deep Link</Heading>
        <Link href={FORM_URL} isExternal>
          <Box
            px="3"
            py="2"
            bg={{
              linearGradient: {
                colors: ["pink.600", "fuchsia.600"],
                start: [0, 1],
                end: [1, 1],
              },
            }}
            rounded="2xl"
            _text={{
              color: "white",
              fontWeight: "medium",
            }}
          >
            Fill out Form
          </Box>
        </Link>
      </Stack>
    </Box>
  );
}
