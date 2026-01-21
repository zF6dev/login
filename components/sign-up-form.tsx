"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import { Suspense } from "react";
import Image from "next/image";
import { Zen_Maru_Gothic } from "next/font/google"
import { Eye, EyeOff } from "lucide-react"

const zen_maru_gothic = Zen_Maru_Gothic({
  weight: '400',
  subsets: ['latin'],
})

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("パスワードが一致しません。");
      setIsLoading(false);
      return;
    }

    if (username.includes("@")) {
      setError("ユーザー名に「@」を含めることはできません。");
      setIsLoading(false);
      return;
    }

    if (username.length < 4) {
      setError("ユーザー名は4文字以上である必要があります。");
      setIsLoading(false);
      return;
    }

    if (username.length > 30) {
      setError("ユーザー名は30文字以下である必要があります。");
      setIsLoading(false);
      return;
    }

    const email = `${username}@guest.9a.si`;

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      });
      if (error) throw error;
      router.push("/auth/sign-up-success");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "エラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={zen_maru_gothic.className}>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Link
          href="/"
          className="inline-block text-sm underline-offset-4 hover:underline">
          ← トップページに戻る
        </Link>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">新規登録</CardTitle>
            <CardDescription>アカウントを新規作成する</CardDescription>
            <CardDescription>※ユーザー名は4文字以上30文字以下で入力してください。</CardDescription>
            <CardDescription>※パスワードは6文字以上で入力してください。</CardDescription>
            <CardDescription>※パスワードリセット機能は"まだ"ありません。</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="username">ユーザー名</Label>
                  <Input
                    id="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">パスワード</Label>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="repeat-password">パスワードの再入力</Label>
                  </div>
                  <Input
                    id="repeat-password"
                    type="password"
                    required
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "アカウント作成中..." : "新規登録"}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                すでにアカウントを持っていますか？{" "}
                <Link href="/auth/login" className="underline underline-offset-4">
                  ログイン
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
