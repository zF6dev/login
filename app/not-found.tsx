import { Zen_Maru_Gothic } from "next/font/google"
import { JSX } from "react"

const zen_maru_gothic = Zen_Maru_Gothic({
  weight: '400',
  subsets: ['latin'],
})

export default function NotFound() {
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
      <div className="flex flex-col items-center justify-center min-h-screen">
        {strings[randomIndex].contents}
      </div>
    </main>
  );
}