import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-svh w-full flex flex-col items-center justify-center p-6 md:p-10">
            <Link
                href="/"
                className="inline-block text-sm underline-offset-4 hover:underline">
                ← トップページへ戻る
            </Link>
            <div className="w-full max-w-sm">
                <h1>お疲れ様です。パスワードリセットとかいう機能はありません。</h1>
            </div>
        </div>
    );
}
