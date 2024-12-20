"use client";
import { QueryTestButton } from "@/Components/QueryTestingButton";

export default function Department({
  params,
}: {
  params: { department: string };
}) {
  return (
    <div>
      My Department: {params.department}
      <QueryTestButton department={params.department} />
    </div>
  );
}
