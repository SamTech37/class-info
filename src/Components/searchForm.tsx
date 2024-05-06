//the form to search for courses

"use client";
import {
  TextInput,
  Button,
  Group,
  Box,
  NativeSelect,
  Autocomplete,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import jsonData from "./Departments.json";
import { useRouter } from "next/navigation";

export function SearchForm() {
  const router = useRouter();

  const handleSubmit = () => {
    //redirect to /search?{searchParams}
    let newPath = "/search?";
    for (const [key, value] of Object.entries(searchForm.values)) {
      if (value != "") newPath += `${key}=${value}&`;
    }
    router.push(newPath);
  };
  const searchForm = useForm({
    initialValues: {
      semester: "11220",
      courseName: "",
      instructor: "",
      department: "",
    },

    validate: {},
  });
  const departmentList = jsonData;

  return (
    <Box maw={400} mx="auto">
      <form onSubmit={searchForm.onSubmit(() => handleSubmit())}>
        <NativeSelect
          label="學期"
          data={[
            { label: "112上", value: "11210" },
            { label: "112下", value: "11220" },
            // { label: "112暑", value: "11230" },
          ]}
          {...searchForm.getInputProps("semester")}
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
