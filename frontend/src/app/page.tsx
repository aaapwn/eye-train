"use server";
import { auth } from "@/lib/auth";
import ShowTodos from "@/components/ShowTodos";

export default async function Home() {
  const session = auth();
  return (
    <ShowTodos session={session} />
  );
}
