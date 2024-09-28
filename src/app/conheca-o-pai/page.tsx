import Banner from "@src/components/Banner/Banner";
import FounderCard from '../../components/FounderCard/FounderCard';
import './style.css';

export default function ConhecaOPAI() {
  return (
    <main>
      <Banner
        bgImg="conheca-o-pai-banner.jpg"
        title="Quando em apuros, é ele que você chama!"
        subtitle="Se seu carro precisa de ajuda, conte com o PAI."
      />
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
    </main>
  );
}
