"use serveer";
import  from "@/serve_components/supabaseServer";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });
  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}
export async function POST(req: Request) {
  const { contact } = await req.json().catch(() => ({}));
  if (!contact || typeof contact !== "string")
    return NextResponse.json({ error: "error" }, { status: 400 });
  const { data, error } = await supabase
    .from("profiles")
    .insert({ contact })
    .select()
    .single();
  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}
