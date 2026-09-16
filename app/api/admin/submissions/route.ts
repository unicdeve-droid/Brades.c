import { NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  await ensureSchema();
  const rows = await sql`
    SELECT id, field1_value, field2_value, field3_value, ip, created_at
    FROM submissions
    ORDER BY created_at DESC
    LIMIT 200;
  `;
  return NextResponse.json(rows);
}
