import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";
import './auth-button.css'

export async function AuthButton() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return user ? (
    <div className="flex flex-col items-center gap-4 text-xl">
      こんにちは、{user.email?.split('@')[0]}！
      <LogoutButton />
    </div>
  ) : (
    <div className="auth-button">
      <Link href="/auth/login">
        <button>
          <h2>ログイン</h2>
        </button>
      </Link>
      <Link href="/auth/sign-up">
        <button>
          <h2>新規登録</h2>
        </button>
      </Link>
    </div>
  );
}
