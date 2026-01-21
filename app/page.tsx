import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import { Zen_Maru_Gothic } from "next/font/google"
import styles from './style.module.css'
import './style.css'
import './normalize.css'
import { defaultHead } from "next/head";

const zen_maru_gothic = Zen_Maru_Gothic({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return <main className={zen_maru_gothic.className}>
    <div className="top-title">
      <h1>席予約システム v0.2</h1>
      <h3>注意: このシステムは開発中です。<br></br>ログイン情報は一日に三回ほど削除いたします。</h3>
      <h3>そのため、前回新規登録していてもそのIDでログインできない可能性があります。</h3>
      <h3>その場合は、再度新規登録していただけるとありがたいです。</h3>
      <h3>ご迷惑をおかけいたします。</h3>
      <h3>前回のデータ消去: 2026/1/20/15:16</h3>
    </div>
    <div className="top-changelog">
      <Link href="/changelog">更新履歴を見る</Link>
    </div>
    <div className="top-main-contents">
      <div className="top-news">
        <Link href="https://9a.si/r" target="_blank">
          <button>
            <h2>お知らせを開く</h2>
            <h3>学校説明会についての要項なんて確認できません(笑)</h3>
          </button>
        </Link>
      </div>
      <div className="top-login">
            <AuthButton />
      </div>
    </div>
  </main>
}