"use client";

import { homeLinks } from "@src/utils/homeLinks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./style.css";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-logo">
        <Link href="/home">
          <Image src="/white-logo.svg" width={49} height={49} alt="PAI logo." />
        </Link>
      </div>
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        {homeLinks.map((link, index) => {
          return (
            <Link className={`header-nav-link`} key={index} href={link.path}>
              {link.name}
            </Link>
          );
        })}
        <button className="customer-area-button-mobile" onClick={() => router.push("/login")}>Área do cliente</button>
      </nav>
      <button className="customer-area-button" onClick={() => router.push("/login")}>Área do cliente</button>

      <button className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
    </header>
  );
}
