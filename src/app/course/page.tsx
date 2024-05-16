//a page to query course by ID

"use client";

import { Title } from "@mantine/core";
import { TextInput, Button, Group, Box, NativeSelect } from "@mantine/core";
import { useRouter } from "next/navigation";

import { useForm } from "@mantine/form";
import { defaultSemester, availableSemesters, referenceLinks } from "@/config";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Title mb="xs">搜尋科號</Title>
      <CourseIDForm />
    </>
  );
}

function CourseIDForm() {
  const router = useRouter();
  const handleSubmit = () => {
    const { courseID, semester } = courseIDForm.values;
    let newPath = `/course/${semester}${courseID}`;
    router.push(newPath);
  };

  const initialValues = {
    courseID: "",
    semester: defaultSemester,
  };

  const courseIDForm = useForm({
    initialValues,
    validate: {},
  });

  return (
    <Box maw={400} mx="auto">
      <form onSubmit={courseIDForm.onSubmit(() => handleSubmit())}>
        <NativeSelect
          label="學期"
          data={availableSemesters}
          {...courseIDForm.getInputProps("semester")}
        />
        <TextInput
          label="科號"
          description="不用輸入學期。如：CS135601"
          {...courseIDForm.getInputProps("courseID")}
        />

        <Group justify="space-between" mt="md">
          <Link
            href={referenceLinks.courseIDRef.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {referenceLinks.courseIDRef.title}
          </Link>
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
