import {
  AspectRatio,
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "native-base";
import { countries } from "countries-list";
import * as React from "react";

export default function InfoCard(
  {
    firstName,
    lastName,
    avatarUrl,
    birthCountryCode,
    birthDate,
  }: {
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    birthDate: string;
    birthCountryCode: keyof typeof countries;
  },
) {
  return (
    <Box alignItems="center">
      <Box
        width="80"
        rounded="lg"
        overflow="hidden"
        py="12"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Stack space={4} alignItems="center" mt="2">
          <Avatar
            bg="green.500"
            size="2xl"
            source={{
              uri: avatarUrl,
            }}
          >
            {`${firstName[0]}${lastName[0]}`}
          </Avatar>
          <Heading size="md" ml="-1">
            {`${firstName} ${lastName}`}
          </Heading>
        </Stack>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Text>
              <Text fontWeight="bold">
                Born:{" "}
              </Text>
              <Text>
                {birthDate}
              </Text>
            </Text>
            <Text>
              <Text fontWeight="bold">
                Place of Birth:{" "}
              </Text>
              <Text>
                <Text>
                  {countries[birthCountryCode].emoji}
                </Text>
                <Text>
                  {countries[birthCountryCode].name}
                </Text>
              </Text>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
