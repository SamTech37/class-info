//the form to search for courses

"use client";
import Link from "next/link";
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

import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import {
  availableSemesters,
  defaultSemester,
  referenceLinks,
  DepartmentList,
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
  const departmentList = DepartmentList;

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
          <TextInput
            label="上課地點 Classroom"
            description={
              <Link href={referenceLinks.buildingCodes.URL}>
                see "Building and Room Number"
              </Link>
            }
            {...searchForm.getInputProps("venue")}
          />
          <Autocomplete
            label="開課單位 Department"
            data={departmentList}
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
