import { supabaseAdmin } from "@/app/supabase/client";
import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  contact: z.string().min(3), // тут может быть email/телефон/любая строка
  name: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { contact, name } = ContactSchema.parse(body);

    const { data, error } = await supabaseAdmin
      .from("profiles") // <-- имя твоей таблицы
      .insert({ contact, name }) // <-- одна колонка, остальное ставит БД
      .select()
      .single();

    if (error) {
      // покажем максимум деталей
      return NextResponse.json(
        {
          error: error.message,
          code: (error as any).code,
          details: (error as any).details,
          hint: (error as any).hint,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ contact: data, name: data }, { status: 201 });
  } catch (e: any) {
    const msg = e?.issues?.[0]?.message ?? e?.message ?? "Bad Request";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
