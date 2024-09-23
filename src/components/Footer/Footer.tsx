import { homeLinks } from "@src/utils/homeLinks";
import Image from "next/image";
import Link from "next/link";
import './style.css';

export function Footer()  {
  return (
    <footer>
      <div>
        <Image src="/white-logo.svg" width={101} height={101} alt="logo PAI." />
        <p>
          <i>Porto Artificial Intelligence © 2024</i>
        </p>
        <Link href="/termos">Termos de Uso</Link>
        <Link href="/privacidade">Politica de Privacidade</Link>
      </div>
      <div>
        <nav>
          <h5>HOME</h5>
          {homeLinks.map((link, index) =>
            <Link key={index} href={link.path}>{link.name}</Link>
          )}
        </nav>
      </div>
    </footer>
  );
};
