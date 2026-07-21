# refactor: extrair interatividade e remover "use client" desnecessário

## Arquivos alterados
- `src/components/InDevelopmentButton/InDevelopmentButton.tsx` (novo)
- `src/app/area-do-cliente/meu-cadastro/page.tsx`
- `src/app/area-do-cliente/minha-assinatura/page.tsx`

## O que estava errado
As páginas `meu-cadastro` e `minha-assinatura` estavam marcadas com `"use client"` apenas porque tinham um `handleInDevelopmentActions` que chamava `alert()`. Isso forçava a página inteira (incluindo formulários estáticos) a ser renderizada no client, perdendo benefícios de Server Components (streaming, menor bundle JS).

## O que foi feito
1. Criado componente `InDevelopmentButton` (client) que encapsula o `alert()` e aceita qualquer prop de botão via spread
2. Removido `"use client"` das páginas — agora são Server Components
3. Substituídos os `<button onClick={handleInDevelopmentActions}>` por `<InDevelopmentButton>`

## Rollback
Deletar o componente `InDevelopmentButton`, restaurar `"use client"` e a função `handleInDevelopmentActions` nos dois arquivos de página.
