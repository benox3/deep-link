import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box } from "native-base";
import * as React from "react";
import InfoCard from "../components/InfoCard";
import { RootStackParamList } from "../lib/constants";
import { ScreenProps } from "../lib/types";

export default function UserInfoScreen(
  { route }: NativeStackScreenProps<RootStackParamList, "User">,
) {
  return (
    <Box my={4}>
      <InfoCard
        firstName={route.params.firstName}
        lastName={route.params.lastName}
        avatarUrl={route.params.avatarUrl}
        birthDate={route.params.birthDate}
        birthCountryCode={route.params.birthCountryCode}
      />
    </Box>
  );
}
