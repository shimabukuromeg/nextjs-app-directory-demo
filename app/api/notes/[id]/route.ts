import { backendUrl } from "@/constants/api";
import { NextRequest, NextResponse } from "next/server";

// 動的レンダリングを強制する
export const dynamic = 'force-dynamic';

// ノート詳細を取得するAPI
export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {

  // バックエンドのRailsのAPIを叩いて note を取得する
  const res = await fetch(`${backendUrl}/notes/${params.id}`, { cache: 'no-store' });
  const note = await res.json();

  if (note === null) {
    return new NextResponse(null, { status: 404 })
  }
  return NextResponse.json(note)
}
