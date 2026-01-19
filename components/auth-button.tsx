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
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <LogoutButton />
    </div>
  ) : (
    <div className="auth-button">
      <button>
        <Link href="/auth/login"><h2>ログイン</h2></Link>
      </button>
      <button>
        <Link href="/auth/sign-up"><h2>新規登録</h2></Link>
      </button>
    </div>
  );
}
