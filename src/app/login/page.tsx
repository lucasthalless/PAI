"use client";

import { Input } from "@src/components/Input/Input";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function Login() {
  const handleInDevelopmentLinks = () => {
    alert("Ação em desenvolvimento indisponível no momento!");
  };

  return (
    <>
      <div className="login-text">
        <Image src="/white-logo.svg" alt="Logo PAI." width={112} height={112} />
        <div>
          <h2>Área de Clientes</h2>
          <p>
            Caso você ainda não seja um cliente PAI,
            <br />
            <button onClick={handleInDevelopmentLinks}>
              faça seu cadastro aqui.
            </button>
          </p>
        </div>
      </div>
      <div className="login-form">
        <form>
          <Input name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="••••••••" />
          <button onClick={handleInDevelopmentLinks}>
            Esqueceu sua senha?
          </button>
          <Link className="link-button" href="/area-do-cliente">
            Fazer login
          </Link>
        </form>
        <div className="alternative-login-separator">
          <p>Ou faça login com</p>
        </div>
        <div className="socials-login">
          <Image
            src="/google-card.svg"
            alt="Logar com Google."
            width={116}
            height={60}
            onClick={handleInDevelopmentLinks}
          />
          <button onClick={handleInDevelopmentLinks} className="apple-card">
            <Image
              src="/apple.svg"
              alt="Logar com Apple"
              width={23}
              height={28}
            />
          </button>
          <Image
            src="/facebook-card.svg"
            alt="Logar com Facebook."
            width={116}
            height={60}
            onClick={handleInDevelopmentLinks}
          />
        </div>
      </div>
    </>
  );
}
