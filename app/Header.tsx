import Link from "next/link";
import { Suspense } from "react";
import "server-only";

const Header: React.FC = () => {
    const title = 'Note App'
    return (
        <div className="bg-white lg:pb-6">
            <div className="max-w-screen-2xl px-2 md:px-4 mx-auto">
                <header className="flex justify-between items-center py-4">
                    {/* 1. トップページへのリンク */}
                    <Link href="/" className="inline-flex items-center text-black-800 text-xl font-bold gap-2.5" aria-label="logo">
                        {title}
                    </Link>
                    {/* 2. 画面幅が768px未満の場合は非表示 */}
                    <nav className="hidden md:flex gap-12">
                        {/* 3. リンク先は未実装のためトップページに遷移 */}
                        <Link href="/notes" className="text-gray-600 hover:text-pink-500 active:text-pink-700 text-lg font-semibold transition duration-100">ノートリスト</Link>
                        {/* <Link href="/" className="text-gray-600 hover:text-pink-500 active:text-pink-700 text-lg font-semibold transition duration-100">FAQ</Link>
                        <Link href="/" className="text-gray-600 hover:text-pink-500 active:text-pink-700 text-lg font-semibold transition duration-100">Setting</Link> */}
                    </nav>

                </header>
            </div >
        </div >
    )
};

export default Header;
