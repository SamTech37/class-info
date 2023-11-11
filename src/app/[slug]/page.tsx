"use client";
import { QueryButton } from "@/Components/QueryButton";

export default function Department({ params }: { params: { slug: string } }) {
  return (
    <div>
      My Department: {params.slug}
      <QueryButton department={params.slug} />
    </div>
  );
}
