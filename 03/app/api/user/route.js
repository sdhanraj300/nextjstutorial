import { users } from "@/lib/db";
import {NextResponse} from "next/server";
export default async function GET() {
  return NextResponse.json(users);
}
