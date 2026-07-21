import { ChevronRight } from "@src/components/Chevron/ChevronRight";
import Image from "next/image";
import Link from "next/link";
import "./home.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PAI ⎯ Início",
  description:
    "PAI (Porto Artificial Intelligence) é uma solução de diagnóstico automotivo inteligente desenvolvida para a Porto Seguro®.",
};

export default function Home() {
  return (
    <section className="home-banner-section">
      <div className="banner-text">
        <h1>
          Problema no carro?
          <br />
          <span>
            É só chamar o <strong>PAI</strong>!
          </span>
        </h1>
        <p>
          <strong>PAI</strong> <i>(Porto Artificial Intelligence)</i> é uma
          solução desenvolvida para a <strong>Porto Seguro®</strong> com o
          objetivo de proporcionar uma nova, completa e automatizada experiência
          no campo do <strong>diagnóstico de veículos automotivos.</strong>
        </p>
        <Link className="gradient-button" href="/conheca-o-pai">
          Saiba mais <ChevronRight />
        </Link>
      </div>
      <div className="banner-imgs">
        <Image src="/PAI.png" width={632} height={632} alt="Imagem PAI" />
        <Image src="/black-logo.png" width={190} height={190} alt="Logo PAI" />
      </div>
    </section>
  );
}
