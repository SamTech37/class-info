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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { useForm } from "@mantine/form";
import jsonData from "./Departments.json";
import { useRouter } from "next/navigation";
import { availableSemesters, defaultSemester } from "@/config";

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
  };
  const searchForm = useForm({
    initialValues,
    validate: {},
  });
  const departmentList = jsonData;

  return (
    <Box maw={400} mx="auto" pos="relative">
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: "xs", blur: 2 }}
      />

      <form onSubmit={searchForm.onSubmit(() => handleSubmit())}>
        <NativeSelect
          label="學期"
          data={availableSemesters}
          {...searchForm.getInputProps("semester")}
        />
        <NativeSelect
          label="授課語言"
          data={[
            { label: "不限", value: "" },
            { label: "中文", value: "ZH" },
            { label: "English", value: "EN" },
          ]}
          {...searchForm.getInputProps("lang")}
        />
        <TextInput
          label="課程名稱"
          {...searchForm.getInputProps("courseName")}
        />
        <TextInput
          label="授課教師"
          {...searchForm.getInputProps("instructor")}
        />
        <Autocomplete
          label="開課單位"
          data={departmentList}
          {...searchForm.getInputProps("department")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
