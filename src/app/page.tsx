import { db } from "@/server/db";
import Link from "next/link";
import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-950 to-zinc-800 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-[5rem]">
          Welcome to Intyr
        </h1>
        <SignedOut>
          <SignIn routing="hash" />
        </SignedOut>
      </div>
    </main>
  );
}
