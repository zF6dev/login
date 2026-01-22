import Link from "next/link";
import { Zen_Maru_Gothic } from "next/font/google"
import styles from './style.module.css'
import './style.css'

const zen_maru_gothic = Zen_Maru_Gothic({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {
    return <main className={zen_maru_gothic.className}>
        <div className="changelog-title">
            <h1>プロジェクトの更新履歴</h1>
            <Link href="https://github.com/zF6dev/login/commits/main/" target="_blank">詳細はこちら →</Link>
            <p>注意: 日時は全てUTC+9です。</p>
        </div>
        <div className="changelog-main-contents">
            <div className="changelog">
                <h2>1/22 16:14</h2>
                <p>ログアウトボタンをホバーした時に下線が引かれないバグの修正</p>
            </div>
            <div className="changelog">
                <h2>1/22 15:55</h2>
                <p>ログアウトボタンの日本語化と、一部の文字の大きさの修正</p>
            </div>
            <div className="changelog">
                <h2>1/21 17:18</h2>
                <p>パスワードの入力時にパスワードを表示する機能を追加</p>
            </div>
            <div className="changelog">
                <h2>1/21 13:08</h2>
                <p>メタデータを削除し、DiscordやTwitterでプレビューが表示されないようにした</p>
            </div>
            <div className="changelog">
                <h2>1/21 12:56</h2>
                <p>更新履歴ページのスタイルを一新し、見やすくした。</p>
            </div>
            <div className="changelog">
                <h2>1/21 12:44</h2>
                <p>not-found.tsxとloading.tsxの文章を少し上に持ってきて見やすくした</p>
            </div>
            <div className="changelog">
                <h2>1/21 0:47</h2>
                <p>ざっくりとした更新履歴ページを作成</p>
            </div>
            <div className="changelog">
                <h2>1/20 23:29</h2>
                <p>not-found.tsxでのランダム要素表示をサーバーサイドからクライアントサイドで行うように変更</p>
            </div>
            <div className="changelog">
                <h2>1/20 22:54</h2>
                <p>not-found.tsxで静的プリレンダリング時のランダム値使用によるエラーを修正</p>
                <p>loading.tsxの表示をabsoluteにすることで、どの端末でもローディング画面が画面の真ん中に表示されるようにした</p>
                <p>ヘッダーのホームボタンとリンク等の間隔を調整してレスポンシブ化した</p>
                <p>ログインボタンの間隔を調整し、スマホで見やすくした</p>
            </div>
            <div className="changelog">
                <h2>1/20 22:02</h2>
                <p>not-found.tsxのページ表示のランダム化をサーバーサイドで行うように変更</p>
            </div>
            <div className="changelog">
                <h2>1/20 17:16</h2>
                <p>not-found.tsxを作成し、独自404ページを表示するようにした</p>
                <p>404ページで、日本語版と英語版のエラーがランダムで出るようにした</p>
            </div>
            <div className="changelog">
                <h2>1/20 16:42</h2>
                <p>ヘッダーのデザインを変更し、スマホでGitHubリンクとテーマスイッチャーが重なるバグを修正</p>
            </div>
            <div className="changelog">
                <h2>1/20 15:18</h2>
                <p>トップページのログインボタンでボタンを押しても反応せず、文字部分しか反応しないバグを修正</p>
            </div>
            <div className="changelog">
                <h2>1/20 12:53</h2>
                <p>ログインページでログインボタンを押した後にトップページに遷移するように変更</p>
                <p>ヘッダーのテーマスイッチャーとGitHubリンクの配置を変更</p>
            </div>
            <div className="changelog">
                <h2>1/20 0:51</h2>
                <p>ログアウト状態でも全てのファイルにアクセスできるように変更</p>
            </div>
            <div className="changelog">
                <h2>1/20 0:12</h2>
                <p>ライトモードとダークモードの切り替えスイッチ(テーマスイッチャー)を作成</p>
                <p>ヘッダーを作成し、ホームボタン、テーマスイッチャー、ソースコードリンクをどのページでも表示できるようにした</p>
            </div>
            <div className="changelog">
                <h2>1/19 23:39</h2>
                <p>ログアウトボタンのUIを他のログインボタンと統一し、トップページで左端に表示されてしまうバグを修正。</p>
            </div>
            <div className="changelog">
                <h2>1/19 23:34</h2>
                <p>トップページの注意事項に詳細を追加</p>
            </div>
            <div className="changelog">
                <h2>1/19 23:31</h2>
                <p>新規登録完了のページの文章をトップページへ行くように促す文章に変更</p>
            </div>
            <div className="changelog">
                <h2>1/19 23:25</h2>
                <p>メタデータの削除</p>
            </div>
            <div className="changelog">
                <h2>1/19 23:23</h2>
                <p>ユーザー名とパスワードの文字数等の条件を表示</p>
            </div>
            <div className="changelog">
                <h2>1/19 23:20</h2>
                <p>ユーザー名の文字数の上限を30字に変更</p>
            </div>
            <div className="changelog">
                <h2>1/19 23:17</h2>
                <p>お知らせリンクが外部リンクなので、新規タブで開くように変更</p>
            </div>
            <div className="changelog">
                <h2>1/19 22:54</h2>
                <p>トップページに注意点を追加</p>
            </div>
            <div className="changelog">
                <h2>1/19 22:47</h2>
                <p>ログイン方法をメールアドレスから独自ユーザーIDに変更</p>
                <p>メールアドレスを使用しないため、パスワードリセットページを一時的に削除</p>
            </div>
            <div className="changelog">
                <h2>1/19 21:46</h2>
                <p>メタデータのタイトルや説明をテンプレから変更</p>
            </div>
            <div className="changelog">
                <h2>1/19 19:32</h2>
                <p>ログインボタンやエラーメッセージを全て日本語化</p>
            </div>
            <div className="changelog">
                <h2>1/19 19:28</h2>
                <p>パスワードリセットページのUIを調整し、中央揃えにした</p>
            </div>
            <div className="changelog">
                <h2>1/19 19:25</h2>
                <p>ページの大部分を日本語化</p>
                <p>Vercelへのデプロイボタンを廃止</p>
                <p>パスワードリセットシステムを一時的に廃止</p>
            </div>
            <div className="changelog">
                <h2>1/19 17:35</h2>
                <p>ログインボタンなど、一部を日本語化した</p>
            </div>
            <div className="changelog">
                <h2>1/19 17:24</h2>
                <p>トップページなどをこのリポジトリを作成する前に開発していたUIに更新</p>
                <p>ログインページなど、一部を日本語化した</p>
                <p>ローディング画面の作成</p>
            </div>
            <div className="changelog">
                <h2>1/19 16:48</h2>
                <p>環境変数の設定と、それに伴う一部の鍵名の変更</p>
            </div>
            <div className="changelog">
                <h2>1/19 16:44</h2>
                <p>プロジェクトの作成開始</p>
                <p>npx create-next-app -e with-supabaseでSupabaseのテンプレがあるNext.jsアプリを作成。</p>
            </div>
        </div>
    </main>
}