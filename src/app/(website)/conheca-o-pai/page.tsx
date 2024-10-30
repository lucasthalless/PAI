import Banner from "@src/components/Banner/Banner";
import { TalkToUsForm } from "@src/components/TalkToUsForm/TalkToUsForm";
import Image from "next/image";
import FounderCard from '../../../components/FounderCard/FounderCard';
import './style.css';

export default function ConhecaOPAI() {
  return (
    <>
      <Banner
        bgImg="conheca-o-pai-banner.jpg"
        title={<>Quando em apuros,<br />é <strong>ele</strong> que você chama!</>}
        subtitle="Se seu carro precisa de ajuda, conte com o PAI."
      />
      <section className="get-to-know">
        <div className="get-to-know-text">
          <h2>
            Uma <strong>solução</strong><br />
            que é <strong>revolução.</strong>
          </h2>
          <p>
            <strong>PAI</strong> é um aplicativo digital que traz ao campo dos reparos automotivos uma nova perspectiva.
            <br /><br />
            Sua principal tarefa é <strong>identificar</strong>, <strong>apontar</strong> e <strong>orientar</strong> sobre o reparo e prevenção de problemas automotivos de forma totalmente digital, utilizando tecnologias como Inteligência Artificial e Machine Learning, com uma interface amigável e de simples compreensão.
            <br /><br />
            Com ajuda do <strong>PAI</strong>, você pode ter um diagnóstico do seu veículo direto do seu computador ou celular. E, caso a gente identifique um problema, direcionamos você para um <strong>centro automotivo Porto Seguro®</strong> já com um orçamento aproximado e um horário reservado para conserto.
            <br /><br />
            <i><strong>Praticidade, assertividade e inteligência.</strong></i>
          </p>
        </div>
        <div className="get-to-know-img">
          <Image alt="Robots." src="/robots.png" width={727} height={727}/>
        </div>
      </section>
      <section className="founders-section">
        <h2>Fundadores</h2>
        <div className="separator"></div>
        <div className="founders-div">
          <FounderCard
            name="Carolina Rodgerio"
            role="Gerente de projetos"
            github="carolrodgerio"
            linkedin="carol-rodgerio"
            imageUrl="carolina.png"
          />

          <FounderCard
            name="Enrico D’Amico"
            role="Desenvolvedor Back-end"
            github="Enrico-AD"
            linkedin="enricoandradedamico"
            imageUrl="enrico.png"
          />

          <FounderCard
            name="Lucas Santos"
            role="Full-stack & IA"
            github="lucasthalless"
            linkedin="lucastds"
            imageUrl="lucas.png"
          />
        </div>
      </section>
      <section className="talk-to-us-section">
        <h3>Fale conosco!</h3>
        <TalkToUsForm />
      </section>
    </>
  );
}
