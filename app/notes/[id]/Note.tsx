'use client';
import { Note } from "../type";

type Props = {
    item: Note;
}

/**
 * Noteコンポーネント
 * @param param0
 * @returns
 */
const Note: React.FC<Props> = ({ item }) => {
    return (
        <div className="flex flex-col bg-gray-100 rounded-lg relative p-5 gap-2.5">
            <h3 className="text-pink-500 text-lg md:text-xl font-semibold break-all">{item.title}</h3>
            <p className="text-gray-500 break-all">{item.body}</p>
        </div>
    );
}

export default Note;
