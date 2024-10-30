import { LinkCard } from "@src/components/svgs/LinkCard/LinkCard";
import Image from "next/image";

export default function AreaDoCliente() {
  return (
    <>
      <h1>
        Olá, <strong>Usuário!</strong>
      </h1>
      <div className="separator"></div>
      <div className="links-cards">
        <LinkCard href="/area-do-cliente/meu-cadastro">
          <Image
            src="/my-account.svg"
            alt="Meu cadastro."
            width={142}
            height={142}
          />
          <h4>
            Meu <br />
            <strong>cadastro</strong>
          </h4>
        </LinkCard>
        <LinkCard href="/area-do-cliente/minha-assinatura">
          <Image
            src="/my-plan.svg"
            alt="Minha assinatura."
            width={94}
            height={94}
          />
          <h4>
            Minha <br />
            <strong>assinatura</strong>
          </h4>
        </LinkCard>
        <LinkCard href="/area-do-cliente/meus-agendamentos">
          <Image
            src="/my-schedules.svg"
            alt="Meus agendamentos."
            width={94}
            height={94}
          />
          <h4>
            Meus <br />
            <strong>agendamentos</strong>
          </h4>
        </LinkCard>
        <LinkCard href="/area-do-cliente/chatbot">
          <Image src="/bot.svg" alt="Chatbot." width={94} height={94} />
          <h4>
            Chatbot <br />
            <strong>PAI</strong>
          </h4>
        </LinkCard>
        <LinkCard href="/area-do-cliente/parceiros">
          <Image
            src="/partners-center.svg"
            alt="Centro de parceiros."
            width={94}
            height={94}
          />
          <h4>
            Centro de parceiros <br />
            <strong>Porto Seguro®</strong>
          </h4>
        </LinkCard>
        <LinkCard href="/area-do-cliente/notificacoes">
          <Image
            src="/my-notifications.svg"
            alt="Minhas notificações."
            width={94}
            height={94}
          />
          <h4>
            Minhas <br />
            <strong>notificações</strong>
          </h4>
        </LinkCard>
      </div>
    </>
  );
}
