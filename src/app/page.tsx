import { ChevronRight } from "@src/components/Chevron/ChevronRight";
import Image from "next/image";
import './home.css';

export default function Home() {
  return (
    <main>
      <section className="banner-section">
        <div className="banner-text">
          <h1>
            Problema no carro?
            <br />
            <span>
              É só chamar o <strong>PAI</strong>!
            </span>
          </h1>
          <p>
            <strong>PAI</strong> (Porto Artificial Intelligence) é uma solução
            desenvolvida para a <strong>Porto Seguro ®</strong> com o objetivo
            de proporcionar uma nova, completa e automatizada experiência de
            diagnóstico de <strong>automóveis</strong> para clientes e
            parceiros.
          </p>
          <a className="gradient-button" href="/home#get-to-know">
            Saiba mais <ChevronRight />
          </a>
        </div>
        <div className="banner-imgs">
          <Image src="/PAI.png" width={632} height={632} alt="Imagem PAI" />
          <Image src="/black-logo.png" width={190} height={190} alt="Logo PAI" />
        </div>
      </section>
    </main>
  );
}
