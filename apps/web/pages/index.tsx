import { useForm } from "@mantine/form";
import {
  Box,
  Button,
  Center,
  Container,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { countries } from "countries-list";

export function Index() {
  const form = useForm<
    {
      firstName: string;
      lastName: string;
      birthDate?: typeof Date;
      birthCountryCode?: keyof typeof countries;
      avatarUrl?: string;
    }
  >({
    initialValues: {
      firstName: "",
      lastName: "",
      birthDate: undefined,
      birthCountryCode: undefined,
      avatarUrl: "",
    },
    validate: (values) => ({
      birthDate: values.birthDate === undefined
        ? "Date of Birth is required"
        : null,
    }),
  });

  const data = Object.entries(countries).map(([countryCode, { name }]) => ({
    label: name,
    value: countryCode,
  }));

  return (
    <Container p="md" sx={{ maxWidth: 400 }}>
      <Box mb="md">
        <Center>
          <Title>Deep Link</Title>
        </Center>
        <Center>
          <Text size="md">
            Fill out some information here to send back to the mobile
            application
          </Text>
        </Center>
      </Box>
      <Paper shadow="xs" p="md">
        <form
          onSubmit={form.onSubmit((values) => {
            const qs = Object.entries(values).reduce(
              (acc, [key, value]) => {
                if (
                  typeof value === "undefined" || value === null || value === ""
                ) {
                  return acc;
                }

                let formattedVal: string;

                switch (key) {
                  case "birthDate": {
                    // TODO: create typeguard for value based on key
                    formattedVal =
                      (value as unknown as Date).toISOString().split("T")[0];
                    break;
                  }
                  default: {
                    formattedVal = value as string;
                  }
                }

                if (acc === "") {
                  return `?${key}=${formattedVal}`;
                }

                return `${acc}&${key}=${formattedVal}`;
              },
              "",
            );

            window.open(`${process.env.NEXT_PUBLIC_DEEP_LINK_PREFIX}user${qs}`);
          })}
        >
          <Stack spacing="xs">
            <TextInput
              label="First Name"
              placeholder="First Name"
              required
              {...form.getInputProps("firstName")}
            />
            <TextInput
              label="Last Name"
              placeholder="Last Name"
              required
              {...form.getInputProps("lastName")}
            />
            <TextInput
              label="Avatar Url"
              placeholder="Avatar Url"
              {...form.getInputProps("avatarUrl")}
            />
            <Select
              label="Country of birth"
              placeholder="Where were you born?"
              searchable
              required
              nothingFound="No options"
              maxDropdownHeight={280}
              data={data}
              {...form.getInputProps("birthCountryCode")}
            />
            <DatePicker
              maxDate={new Date()}
              placeholder="When were you born?"
              label="Date Of Birth"
              required
              {...form.getInputProps("birthDate")}
            />

            <Button
              type="submit"
              variant="gradient"
              sx={{ borderRadius: 20 }}
              gradient={{ from: "#db2777", to: "#c026d3", deg: 90 }}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default Index;
