import { Input } from "@src/components/Input/Input";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function Login() {
  return (
    <>
      <div className="login-text">
        <Image src="/white-logo.svg" alt="Logo PAI." width={112} height={112} />
        <div>
          <h2>Área de Clientes</h2>
          <p>
            Caso você ainda não seja um cliente PAI,
            <br />
            <Link href="/cadastro">faça seu cadastro aqui.</Link>
          </p>
        </div>
      </div>
      <div className="login-form">
        <form>
          <Input name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="••••••••" />
          <Link href="/esqueci-minha-senha">Esqueceu sua senha?</Link>
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
          />
          <div className="apple-card">
            <Image
              src="/apple.svg"
              alt="Logar com Apple"
              width={23}
              height={28}
            />
          </div>
          <Image
            src="/facebook-card.svg"
            alt="Logar com Facebook."
            width={116}
            height={60}
          />
        </div>
      </div>
    </>
  );
}
