"use client";

import { TextInput, Button, Group, Box, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";

import { useForm } from "@mantine/form";
import { referenceLinks } from "@/config";
import Link from "next/link";
export default function CourseIDForm() {
  const [isLoading, { toggle }] = useDisclosure(false);

  const router = useRouter();
  const handleSubmit = () => {
    toggle(); // show loading overlay
    const { courseID } = courseIDForm.values;
    let newPath = `/course/${courseID}`;
    router.push(newPath);
  };

  const initialValues = {
    courseID: "",
  };

  const courseIDForm = useForm({
    initialValues,
    validate: {},
  });

  return (
    <Box maw={400} mx="auto" pos="relative">
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: "xs", blur: 2 }}
      />
      <form onSubmit={courseIDForm.onSubmit(() => handleSubmit())}>
        <TextInput
          label="科號"
          description="如：11220CS135601 或 11310CS135501"
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
