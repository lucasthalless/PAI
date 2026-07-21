# fix: corrigir links errados no Footer

## Arquivo alterado
- `src/components/Footer/Footer.tsx`

## O que estava errado
Os 6 links da seção "ÁREA DO CLIENTE" no Footer apontavam para rotas inexistentes (`/cadastro`, `/assinatura`, `/agendamentos`, `/chatbot`, `/centro-de-parceiros`, `/notificações`).

## O que foi feito
Corrigidos os `href` para apontar para as rotas reais do App Router:
- `/cadastro` → `/area-do-cliente/meu-cadastro`
- `/assinatura` → `/area-do-cliente/minha-assinatura`
- `/agendamentos` → `/area-do-cliente/meus-agendamentos`
- `/chatbot` → `/area-do-cliente/chatbot`
- `/centro-de-parceiros` → `/area-do-cliente/parceiros`
- `/notificações` → `/area-do-cliente/notificacoes`

## Rollback
Reverter os `href` para os valores anteriores no mesmo arquivo.
