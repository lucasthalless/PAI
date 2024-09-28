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
            rm="554975"
            github="carolrodgerio"
            imageUrl="https://avatars.githubusercontent.com/u/161485752?v=4"
          />

          <FounderCard
            name="Enrico D’Amico"
            rm="557706"
            github="Enrico-AD"
            imageUrl="https://avatars.githubusercontent.com/u/74722460?v=4"
          />

          <FounderCard
            name="Lucas Santos"
            rm="558886"
            github="lucasthalless"
            imageUrl="https://avatars.githubusercontent.com/u/67612669?v=4"
          />
        </div>
      </section>
    </main>
  );
}
