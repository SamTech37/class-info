"use client";
import { QueryTestButton } from "@/Components/QueryTestingButton";
import { use } from "react";

export default function Department(props: {
  params: Promise<{ department: string }>;
}) {
  const params = use(props.params);
  //params is a promise, need to await it
  return (
    <div>
      My Department: {params.department}
      <QueryTestButton department={params.department} />
    </div>
  );
}
