"use client"

import { ChevronRight } from "../Chevron/ChevronRight";
import { Input } from "../Input/Input";

export function TalkToUsForm()  {
  return (
    <form
          onSubmit={(e) => {
            e.preventDefault()
            alert('Mensagem recebida 👍')
          }}
        >
          <Input type="text" placeholder="Qual seu nome?" />
          <Input type="text" placeholder="Digite aqui o seu melhor e-mail:" />
          <Input type="text" placeholder="Deixe a sua mensagem:" />
          {/* TODO: checkbox PAI */}
          {/* <input type="checkbox" /> */}

          <button>
            Enviar <ChevronRight color="var(--blue)" />
          </button>
        </form>
  );
};
