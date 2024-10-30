import Banner from "@src/components/Banner/Banner";
import { PlanCard } from "@src/components/PlanCard/PlanCard";
import FaqList from '../../../components/FaqList/FaqList';
import './style.css';

export default function Planos() {
  return (
    <>
      <Banner
        bgImg="planos-banner.jpg"
        title={<><strong>PAI</strong> é quem cria...<br />a melhor tecnologia 😎</>}
        subtitle="Assine agora e aproveite o futuro do diagnóstico automotivo!"
      />
      <section id="plans" className="plans-section">
        <h2>Planos</h2>
        <div className="separator"></div>
        <div className="plans-div">
          <PlanCard
            name="Plano A"
            price="R$ 4,99"
            benefit1="Tenha acesso ao ChatBot;"
            benefit2="Receba lembretes de trocas e manutenção preventiva;"
            benefit3="Agendamento antecipado aos centros automotivos."
          />
          <PlanCard
            name="Plano B"
            price="R$ 12,99"
            benefit1="Todas as vantagens do Plano A;"
            benefit2="Atendimento prioritário nos centros automotivos;"
            benefit3="Orçamentação e identificação de problemas detalhados."
            favorite
          />
          <PlanCard
            name="Plano C"
            price="R$ 19,99"
            benefit1="Todas as vantagens dos Planos A e B;"
            benefit2="Descontos em serviços Porto;"
            benefit3="Diagnóstico automotivo on-line via imagem e som."
          />
        </div>
      </section>
      <section className="faq-section">
        <h2>Perguntas frequentes</h2>
        <div className="separator"></div>
        <FaqList />
      </section>
    </>
  )
}