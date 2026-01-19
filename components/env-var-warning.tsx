import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function EnvVarWarning() {
  return (
    <div className="flex gap-4 items-center">
      <Badge variant={"outline"} className="font-normal">
        Supabaseの環境変数が読み取れませんでした。
      </Badge>
      <div className="flex gap-2">
        <Button size="sm" variant={"outline"} disabled>
          ログイン
        </Button>
        <Button size="sm" variant={"default"} disabled>
          ログアウト
        </Button>
      </div>
    </div>
  );
}
