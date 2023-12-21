import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "./components/TodoItem";

export default async function Home() {
  const getTodos = () => {
    return prisma.tODO.findMany();
  };
  const todos = await getTodos();

  async function toggleTodo(id: string, complete: boolean) {
    "use server"
    await prisma.tODO.update({
      where: { id },
      data: { complete },
    });
  }
  return (
    <div>
      <header className="flex justify-between mb-4">
        <h1 className="text-2xl">Tddos </h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300
        px-2 py-1 rounded
        hover:bg-slate-700
        focus-within:bg-slate-700 outline-none
        "
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}
