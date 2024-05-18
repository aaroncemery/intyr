import { db } from "@/server/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Hello (App in progress)
        </h1>
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{post.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
