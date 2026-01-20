import { Zen_Maru_Gothic } from "next/font/google"
import { headers } from "next/headers"
import { JSX } from "react"

const zen_maru_gothic = Zen_Maru_Gothic({
  weight: '400',
  subsets: ['latin'],
})

export default async function NotFound() {
  const h = await headers();
  const userAgent = h.get('user-agent');

  const strings: {
    key: string,
    contents: JSX.Element
  }[] = [
      {
        key: "english",
        contents: <>
          <h1 className="text-3xl">404</h1>
          <br />
          <h2 className="text-xl">Page not found looooooooool</h2>
        </>
      },
      {
        key: "japanese",
        contents: <h1 className="text-3xl">あらまぁ、サーバーが頭を掻いてるよ</h1>
      }
    ];

  const randomIndex = Math.floor(Math.random() * strings.length);

  return (
    <main key={strings[randomIndex].key} className={zen_maru_gothic.className}>
      <div className="flex flex-col items-center justify-center min-h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {strings[randomIndex].contents}
      </div>
    </main>
  );
}