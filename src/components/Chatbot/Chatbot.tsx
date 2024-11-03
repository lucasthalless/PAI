import Image from "next/image";
import Chat from "./Chat/Chat";
import "./style.css";

export function Chatbot() {
  return (
    <section className="chatbot">
      <div className="chatbot-header">
        <Image
          src="/chatbot-profile.svg"
          alt="Chatbot!"
          width={32}
          height={48}
        />
        <div className="chatbot-name">
          <h6>PAI</h6>
          <p>
            <span className="status-icon"></span> Offline
          </p>
        </div>
        <div className="chatbot-actions">
          <Image src="/speaker-on.svg" alt="Ouvir." width={24} height={24} />
          <Image
            src="/file-download.svg"
            alt="Baixar chat."
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="separator"></div>
      <Chat />
    </section>
  );
}
