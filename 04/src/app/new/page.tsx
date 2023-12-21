import Link from "next/link";
import React from "react";
import { prisma } from "../db";
import { redirect } from 'next/navigation'

const page = () => {
  const createTodo = async (data: FormData) => {
    "use server";
    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Title is required");
    }
    await prisma.tODO.create({ data: { title, complete: false } });
    redirect("/")
  };
  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300
        bg-transparent rounded px-2 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300
        bg-transparent rounded px-2 outline-none focus-within:border-slate-100"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300
        bg-transparent rounded px-2 outline-none focus-within:border-slate-100"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
