import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="inline-block text-sm underline-offset-4 hover:underline">
            ← トップページに戻る
          </Link>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                新規登録が完了しました！
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                ログイン画面に戻って、登録した情報でログインしてください。
              </p>
              <br></br>
              <Link
                href="/auth/login"
                className="inline-block text-sm underline-offset-4 hover:underline">
                ← ログイン画面に戻る
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
