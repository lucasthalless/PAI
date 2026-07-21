# feat: adicionar loading.tsx e error.tsx na rota do chatbot

## Arquivos criados
- `src/app/area-do-cliente/chatbot/loading.tsx`
- `src/app/area-do-cliente/chatbot/error.tsx`

## O que estava errado
Nenhuma rota do projeto possuía boundaries de loading ou error. A rota do chatbot faz fetch para uma API externa (via server action `getBotResponse`), mas se a página demorasse ou a API falhasse, não havia feedback visual ao usuário.

## O que foi feito
1. Criado `loading.tsx` — exibido automaticamente pelo Next.js enquanto a página carrega (Suspense boundary)
2. Criado `error.tsx` — exibido quando ocorre um erro não tratado na rota, com botão "Tentar novamente" que chama `reset()`

## Rollback
Deletar os dois arquivos. O comportamento volta ao padrão (sem loading/error visual customizado).
