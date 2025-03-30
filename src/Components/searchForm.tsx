//the form to search for courses

"use client";
import {
  TextInput,
  Button,
  Group,
  Box,
  NativeSelect,
  Autocomplete,
  LoadingOverlay,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import StyledLink from "./StyledLink";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import {
  availableSemesters,
  defaultSemester,
  referenceLinks,
  DepartmentList,
  VenueList,
} from "@/config";

export function SearchForm() {
  const [isLoading, { toggle }] = useDisclosure(false);

  const router = useRouter();

  const handleSubmit = () => {
    //redirect to /search?{searchParams}
    toggle();
    let newPath = "/search?";
    for (const [key, value] of Object.entries(searchForm.values)) {
      if (value != "") newPath += `${key}=${value}&`;
    }
    router.push(newPath);
  };

  const initialValues: QueryFilters = {
    semester: defaultSemester,
    courseName: "",
    instructor: "",
    department: "",
    lang: "",
    venue: "",
    classTime: "", //TODO
  };
  const searchForm = useForm({
    initialValues,
    validate: {},
  });

  //for autocomplete input
  const departmentList = DepartmentList;
  const venueList = VenueList;

  return (
    <Box maw={400} mx="auto" pos="relative">
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: "xs", blur: 2 }}
      />

      <form onSubmit={searchForm.onSubmit(() => handleSubmit())}>
        <Stack gap="sm">
          <NativeSelect
            label="學期 Semester"
            data={availableSemesters}
            {...searchForm.getInputProps("semester")}
          />
          <NativeSelect
            label="授課語言 Language"
            data={[
              { label: "不限", value: "" },
              { label: "中文", value: "ZH" },
              { label: "English", value: "EN" },
            ]}
            {...searchForm.getInputProps("lang")}
          />
          <TextInput
            label="課程名稱 Course Name"
            {...searchForm.getInputProps("courseName")}
          />
          <TextInput
            label="授課教師 Instructor"
            {...searchForm.getInputProps("instructor")}
          />
          <Autocomplete
            label="上課地點 Classroom"
            data={venueList}
            description={
              <StyledLink
                href={referenceLinks.buildingCodes.URL}
                size="xs"
                c="teal"
              >
                {`see "Building and Room Number"`}
              </StyledLink>
            }
            {...searchForm.getInputProps("venue")}
          />
          <Autocomplete
            label="開課單位 Department"
            data={departmentList}
            description={
              <StyledLink
                href={referenceLinks.departmentCodes.URL}
                size="xs"
                c="teal"
              >
                {`see "Dept. Codes"`}
              </StyledLink>
            }
            {...searchForm.getInputProps("department")}
          />
        </Stack>

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
