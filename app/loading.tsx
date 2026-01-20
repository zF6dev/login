`use client`
import { Zen_Maru_Gothic } from "next/font/google"

const zen_maru_gothic = Zen_Maru_Gothic({
  weight: '500',
  subsets: ['latin'],
})

const Loading = () => {
    return (
        <div className={zen_maru_gothic.className + " flex items-center justify-center h-screen"}>
            <p className="text-2xl absolute top-1/2 left-1/2">Loading...</p>
        </div>
    );
}

export default Loading;