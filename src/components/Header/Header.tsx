"use client";

import { homeLinks } from "@src/utils/homeLinks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./style.css";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <div className="header-logo">
        <Link href="/home">
          <Image src="/white-logo.svg" width={49} height={49} alt="PAI logo." />
        </Link>
      </div>
      <nav className="header-nav">
        {homeLinks.map((link, index) => {
          return (
            <Link className={`header-nav-link`} key={index} href={link.path}>
              {link.name}
            </Link>
          );
        })}
      </nav>
      <button onClick={() => router.push("/login")}>Área do cliente</button>
    </header>
  );
}
