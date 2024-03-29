"use client"
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();

  const active = path === "/" ? 0 : 1;
  const subPage = path.startsWith("/blog/") ? 1 : 0;

  const [backgroundPosition, setBackgroundPosition] = useState((active * 100));
  const [selectorPosition, setSelectorPosition] = useState((active * 100));

  const handleBackgroundPosition = (index: number) => {
    // Define la posición del fondo para cada enlace
    const newPosition = (index * 100); // Ajusta según tus necesidades
    setBackgroundPosition(newPosition);
  };

  const handleSelectorPosition = (index: number) => {
    // Define la posición del fondo para cada enlace
    const newPosition = (index * 100); // Ajusta según tus necesidades
    setSelectorPosition(newPosition);
  };

  return (

    <nav id="nav" className={`origin-bottom-left py-2 px-1 flex gap-1 items-center rounded-full border backdrop-blur-2xl border-violet-500/30  dark:border-violet-500/40 bg-black/5 dark:bg-white/10 transition-all`}>
      <Link href="/" id="nav-home"
        className={`relative flex justify-center items-center gap-[3px] w-24 rounded-full py-1 px-4 transition`}
        onMouseEnter={() => handleSelectorPosition(0)}
        onMouseLeave={() => handleSelectorPosition(active)}
        onClick={() => handleBackgroundPosition(0)}>
        <svg className="size-6" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.398 495.398" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path> <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path> </g> </g> </g> </g></svg>
        Home
      </Link>
      <Link href="/blog" id="nav-blog"
        className={`relative flex justify-center items-center gap-[3px] w-24 rounded-full py-1 px-4 transition`}
        onMouseEnter={() => handleSelectorPosition(1)}
        onMouseLeave={(i: any) => handleSelectorPosition(active)}
        onClick={() => handleBackgroundPosition(1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-blockquote size-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15h15" /><path d="M21 19h-15" /><path d="M15 11h6" /><path d="M21 7h-6" /><path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" /><path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" /></svg>
        Blog
      </Link>
      <div id="nav-selector" className={`absolute w-24 h-10 rounded-full ${subPage? "h-6":""} bg-black/20 dark:bg-white/20 transition-all duration-100 z-[-1]`} style={{ transform:`translateX(${selectorPosition}px)` }}></div>
      <div id="nav-selected" className={`absolute w-24 h-10 rounded-full bg-black/10 dark:bg-white/10 transition-all duration-300 z-[-2]`} style={{ transform: `translateX(${backgroundPosition}px)`, }}></div>
    </nav>

  )
}
