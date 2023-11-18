"use client";
import { QueryButton } from "@/Components/QueryButton";

export default function Department({
  params,
}: {
  params: { department: string };
}) {
  return (
    <div>
      My Department: {params.department}
      <QueryButton department={params.department} />
    </div>
  );
}
