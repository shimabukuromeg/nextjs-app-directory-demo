import { backendUrl } from "@/constants/api";
import { NextResponse } from "next/server";

// 動的レンダリングを強制する
export const dynamic = 'force-dynamic';

// ノート一覧を取得するAPI
export async function GET() {
    try {
        // バックエンドのRailsのAPIを叩いて note を取得する
        const res = await fetch(`${backendUrl}/notes`, { cache: 'no-store' });

        // status codeが200以外の場合はエラーレスポンスを返す
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const notes = await res.json();
        return NextResponse.json(notes);

    } catch (error) {
        // エラーレスポンスを返す
        console.error(`Fetch failed: ${error}`);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
