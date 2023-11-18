"use client";
import { ServerError } from "@/Components/ErrorPage";
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ServerError reset={reset} />;
}
