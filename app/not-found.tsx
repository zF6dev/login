"use client";

import { Zen_Maru_Gothic } from "next/font/google"
import { useState, useEffect, JSX } from "react"

const zen_maru_gothic = Zen_Maru_Gothic({
  weight: '400',
  subsets: ['latin'],
})

export default function NotFound() {
  const [selectedMain, setSelectedMain] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const mains = [
      <main key="english" className={zen_maru_gothic.className}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-5xl">404</h1>
          <br></br>
          <h2 className="text-2xl">Page not found looooooooool</h2>
        </div>
      </main>,
      <main key="japanese" className={zen_maru_gothic.className}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-5xl">あらまぁ、サーバーが頭を掻いてるよ</h1>
        </div>
      </main>
    ];
    const randomIndex = Math.floor(Math.random() * mains.length);
    setSelectedMain(mains[randomIndex]);
  }, []);

  return selectedMain;
}