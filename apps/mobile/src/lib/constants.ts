import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { countries } from "countries-list";

export type RootStackParamList = {
  Home: undefined;
  User: {
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    birthDate: string;
    birthCountryCode: keyof typeof countries;
  };
};

// TODO: Move to env vars
export const FORM_URL = "http://localhost:4200";

export const Stack = createNativeStackNavigator<RootStackParamList>();
