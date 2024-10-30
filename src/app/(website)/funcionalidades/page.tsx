import Banner from "@src/components/Banner/Banner";
import { ChevronRight } from "@src/components/Chevron/ChevronRight";
import Image from "next/image";
import Link from "next/link";
import './style.css';

export default function Page()  {
  return (
    <>
      <Banner
        bgImg="funcionalidades-banner.jpg"
        title={<>Soluções complexas,<br />resoluções simples.</>}
        subtitle="Funcionalidades tecnológicas descomplicadas para você."
      />
      <section className="subscriber-section">
        <div className="subscriber-section-text">
          <h2>
            Ao se tornar um <strong>assinante</strong>,<br />
            você ganha...
          </h2>
          <ul>
            <li>
              Acesso ao assistente virtual para diagnósticos automotivos;
            </li>
            <li>
              Diagnóstico via texto, imagem e som;
            </li>
            <li>
              Lembretes de trocas e manutenções preventivas;
            </li>
            <li>
              Avisos de tendências de falhas mecânicas;
            </li>
            <li>
              Agendamento facilitado aos centros automotivos Porto Seguro®;
            </li>
            <li>
              Previsão de orçamento para resolução de problemas;
            </li>
            <li>
              Descontos em serviços Porto Seguro®.
            </li>
          </ul>
          <i>* Verifique recursos disponíveis em cada plano</i>
        </div>
        <div className="subscriber-section-img">
          <Image alt="Robots." src="/assinante.png" width={727} height={727}/>
        </div>
      </section>
      <section className="reasons-to-love-section">
        <h2>Motivos para amar o <strong>PAI:</strong></h2>
        <div className="reasons-wrapper">
          <div>
            <Image src="/reason-chatbot.jpg" alt="Chatbot." width={300} height={300} />
            <p>
              <strong>Assistente virtual (chatbot)</strong><br /><br />
              Com ele, é possível identificar problemas automotivos com apenas algum cliques, sem precisar se sujar de graxa ou acionar o seguro.
              <br /><br />
              Com perguntas direcionadas e inteligentes, nosso chatbot te entrega todo o diagnóstico de veículos com base na análise de seus sintomas, tipos, modelos e histórico.
              <br /><br />
              Ao final do diagnóstico, você receberá um orçamento aproximado para a resolução do problema e será direcionado para agendar o conserto em um centro automotivo Porto Seguro®.
            </p>
          </div>

          <div>
            <Image src="/reason-multimodal.jpg" alt="Diagnóstico via texto, imagem e som." width={300} height={300} />
            <p>
              <strong>Diagnóstico via texto, imagem e som</strong><br /><br />
              Luz de aviso no painel? Fumaça de cor diferente? Motor com barulhos estranhos?
              <br /><br />
              Esses são sintomas que podem ser difíceis de escrever por texto, mas que são facilmente identificáveis com a captura de imagens, sons e vídeos.
              <br /><br />
              Por isso, o PAI conta com um sistema de reconhecimento inteligente, que traça possíveis problemas automotivos com base nas capturas que você enviar.
            </p>
          </div>

          <div>
            <Image src="/reason-reminder.jpg" alt="Lembretes de trocas e manutenções preventivas." width={300} height={300} />
            <p>
              <strong>Lembretes de trocas e manutenções preventivas</strong><br /><br />
              Você não precisa mais se preocupar com a data da troca de óleo.
              <br /><br />
              Ao cadastrar as últimas datas no aplicativo, o PAI te avisará quando se aproximar novamente a hora de realizar alguma troca ou manutenção.
              <br /><br />
              Você também pode configurar lembretes personalizados.
            </p>
          </div>

          <div>
            <Image src="/reason-warning.jpg" alt="Avisos de tendências de falhas mecânicas." width={300} height={300} />
            <p>
              <strong>Avisos de tendências de falhas mecânicas</strong><br /><br />
              Sabemos que alguns modelos de carros são mais propensos a apresentarem certos tipos de falhas, e que a forma como os motoristas dirigem também influenciam no desenvolvimento ou não de problemas mecânicos.
              <br /><br />
              Por isso, o PAI te avisará sobre problemas crônicos do seu veículo, além de sugerir revisões periódicas com base no seu comportamento e hábitos como motorista.
            </p>
          </div>

          <div>
            <Image src="/reason-scheduling.jpg" alt="Agendamento facilitado aos centros automotivos Porto Seguro®" width={300} height={300} />
            <p>
              <strong>Agendamento facilitado aos centros automotivos Porto Seguro®</strong><br /><br />
              Sem tempo para visitar o mecânico? Um problema inesperado no veículo?
              <br /><br />
              Sem problemas. Através do aplicativo, você pode agendar sua visita a um centro automotivo
              Porto Seguro® de maneira fácil e rápida, com horários flexíveis, localizações diversas e um atendimento que se adequa às suas necessidades.
            </p>
          </div>

          <div>
            <Image src="/reason-budget.jpg" alt="Previsão de orçamento para resolução de problemas." width={300} height={300} />
            <p>
              <strong>Previsão de orçamento para resolução de problemas</strong><br /><br />
              Chega de ter surpresas na hora de pagar a conta da oficina!
              <br /><br />
              Depois de realizar o seu diagnóstico veicular com ajuda do PAI, você recebe acesso a uma lista dos centros automotivos Porto Seguro® e oficinas parceiras mais próximas para agendar o reparo, já com um orçamento estimado para aquisição das peças e mão-de-obra em cada centro automotivo.
            </p>
          </div>

          <div>
            <Image src="/reason-discount.jpg" alt="Descontos em serviços Porto Seguro®" width={300} height={300} />
            <p>
              <strong>Descontos em serviços Porto Seguro®</strong><br /><br />
              Para quem quer redobrar os cuidados com o veículo, a Porto Seguro® oferece as melhores soluções.
              <br /><br />
              Todos os assinantes PAI garantem condições especiais para aproveitarem outros serviços Porto® e garantirem uma cobertura completa e de qualidade para seu carro ou moto.
              <br /><br />
              Além disso, segurados Porto Seguro® também possuem benefícios para assinar o PAI. Consulte condições com nosso atendimento.
            </p>
          </div>

        </div>
      </section>
      <section className="subscribe-section">
        <h3>
          Não perca essa oportunidade.<br />
          <strong>Torne-se um assinante PAI hoje mesmo.</strong>
        </h3>

        <Link className="link-button" href="/planos">
          Quero Assinar <ChevronRight color="var(--blue)" />
        </Link>
      </section>
    </>
  );
};
