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
        <nav>
          <h5>ÁREA DO CLIENTE</h5>
          <Link href="/cadastro">Cadastro</Link>
          <Link href="/assinatura">Assinatura</Link>
          <Link href="/agendamentos">Agendamentos</Link>
          <Link href="/chatbot">Chatbot PAI</Link>
          <Link href="/centro-de-parceiros">Centro de Parceiros</Link>
          <Link href="/notificações">Notificações</Link>
        </nav>
        <nav>
          <h5>REDES SOCIAIS</h5>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">GitHub</Link>
        </nav>
      </div>
    </footer>
  );
};
