// 1. フックを用いているためClient Componentsとして定義
'use client'
import Link from "next/link";
import useSWR from "swr";
import { Note, zNotes } from "./type";

type Props = {
    initialState: Note[];
}

const fetcher = (url: string) => fetch(url).then(async (res) => {
    const data = await res.json();
    const notes = zNotes.parse(data);
    return notes;
});

const NoteList: React.FC<Props> = ({ initialState }) => {
    // クライアントサイドでのデータ取得
    const { data } = useSWR('/api/notes', fetcher, { suspense: true, fallbackData: initialState })
    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10">
            {data.map(note => <NoteItem key={note.id} item={note} />)}
        </div>
    )
}

type NoteProps = {
    item: Note;
}

const NoteItem: React.FC<NoteProps> = ({ item }) => {
    return (
        <div className="bg-gray-100 rounded-lg relative p-5 pt-8">
            <Link href={`/notes/${item.id}`} prefetch={false}>
                <h3 className="text-pink-500 hover:text-pink-700 text-lg md:text-xl font-semibold mb-3 break-all underline underline-offset-2">{item.title}</h3>
            </Link>
            <p className="text-gray-500 break-all">{item.body}</p>
        </div>
    );
};

export default NoteList;
