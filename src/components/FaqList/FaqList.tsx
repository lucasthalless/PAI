import FaqItem from "./FaqItem/FaqItem";

export default function FaqList() {
  const faqs = [
    {
      question: 'O que é o PAI?',
      answer:
      <>
        O PAI é um webapp que tem como principal funcionalidade fornecer uma hipótese diagnóstica automatizada e assertiva sobre veículos automotivos.
        <br /><br />
        O seu principal objetivo é tornar a resolução de problemas mecânicos muito mais simples e eficaz, diminuindo a influência da subjetividade humana, que pode causar dificuldades na tratativa dessas questões.
        <br /><br />Além de fornecer um diagnóstico, baseado em dados, o aplicativo traz também previsibilidade de gastos e agilidade na resolução dos problemas, já que, ao utilizar a aplicação, é possível receber um orçamento aproximado para resolução do problema e agendar uma visita a um centro parceiro Porto Seguro®.
      </>
    },
    { question: 'Quais outros recursos estão disponíveis?',
      answer:
      <>
        O PAI utiliza tecnologias como Inteligência Artificial e Machine Learning para identificar, apontar e orientar sobre o reparo e prevenção de problemas automotivos de forma totalmente digital.
        <br /><br />
        Esse é um processo 100% automatizado, inteligente e de fácil utilização.
      </>
    },
    {
      question: 'Como o PAI funciona?',
      answer:
      <>
        Além da principal funcionalidade, que é o chatbot para diagnóstico automotivo e orientações, o PAI também conta com os seguintes recursos:
        <br /><br />
        <ul>
          <li>Centro de parceiros;</li>
          <li>Sistema de feedbacks;</li>
          <li>Reconhecimento via imagem e som;</li>
          <li>Análise preditiva de problemas;</li>
          <li>Simulação de reparo e orçamento on-line;</li>
          <li>Recursos de acessibilidade.</li>
        </ul>
      </>
    },
    {
      question: 'Quanto custa a assinatura?',
      answer:
        <>
          O PAI está disponível em três diferentes planos de assinatura:
          <br /><br />
          <ul>
            <li>
              Plano A: R$ 4,99/mês<br />
              Tenha acesso ao chatbot;<br />
              Receba lembretes de trocas e manutenção preventiva;<br />
              Agendamento antecipado aos centros automotivos.
            </li>
            <li>
              Plano B: R$ 12,99/mês<br />
              Todas as vantagens do plano A;<br />
              Atendimento prioritário nos centros automotivos;<br />
              Orçamentação e identificação de problemas detalhados.
            </li>
            <li>
              Plano C: R$ 19,99/mês<br />
              Todas as vantagens dos planos A e B;<br />
              Descontos em serviços Porto;<br />
              Diagnóstico automotivo on-line via imagem e som.
            </li>
          </ul>
        </>
      },
      {
        question: 'Quais são as formas de pagamento aceitas?',
        answer:
        <>
          Atualmente, é possível assinar o PAI utilizando cartão de crédito.
          <br /><br />
          A cobrança é mensal e recorrente, e a assinatura é renovada automaticamente a não ser que haja o cancelamento.
        </>
      },
      {
        question: 'O que eu terei acesso ao me tornar assinante do PAI?',
        answer:
        <>
          As funcionalidades disponíveis na assinatura são diferentes de acordo com o plano de assinatura selecionado. No geral, essas são as funcionalidades disponíveis para assinantes:
          <br /><br />
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
        </>
      },
      {
        question: 'Como acessar os recursos de acessibilidade?',
        answer:
        <>
          O PAI tem uma grande preocupação em ser acessível para todos, por isso, temos recursos de acessibilidade disponíveis no nosso site. Atualmente, estão disponíveis os recursos para pessoas daltônicas e a tradução para libras, que podem ser ativadas na página inicial do PAI.
        </>
      },
      {
        question: 'Preciso ser cliente Porto Seguro® para usar o PAI?',
        answer:
        <>
          Não! Clientes Porto Seguro® desfrutam de vantagens para se tornar assinantes PAI, mas todos podem assinar e utilizar os nossos serviços independente de serem clientes atuais ou não.
        </>
      },
      {
        question: 'Como posso me tornar um parceiro Porto Seguro®?',
        answer:
        <>
          O centro de parceiros Porto Seguro® é uma vantagem do PAI que oferece às oficinas e centros automotivos autônomos uma nova forma de captar clientes e expandir suas bases de atuação.
          <br /><br />
          Ao se tornar um parceiro Porto Seguro®, estas empresas estarão aptas a atender clientes provenientes do PAI, e o seu negócio será divulgado em nossas plataformas para todos os assinantes dentro do raio de atuação.
          <br /><br />
          Para se tornar um parceiro e começar a expandir a sua clientela, o seu negócio deve cumprir alguns requisitos que garantam a perpetuação da qualidade dos serviços Porto Seguro®. Faça o seu cadastro no nosso site e aguarde o contato de um dos nossos especialistas para obter mais informações sobre o processo de seleção.
        </>
      }
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};
