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
      <h1>席予約システム v0.1</h1>
    </div>
    <div className="top-main-contents">
      <div className="top-news">
        <Link href="https://9a.si/r">
          <button>
            <h2>お知らせを開く</h2>
            <h3>学校説明会についての要項を確認できます。</h3>
          </button>
        </Link>
      </div>
      <div className="top-login">
            <AuthButton />
      </div>
    </div>
  </main>
}