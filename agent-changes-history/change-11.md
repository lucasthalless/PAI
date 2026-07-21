# fix: adicionar tratamento de erro no actions.ts

## Arquivo alterado
- `src/lib/actions.ts`

## O que estava errado
1. `process.env.CHATBOT_API_URL as string` — cast perigoso, crashava sem mensagem clara se a env var não existisse
2. Sem verificação de `response.ok` — erros HTTP (4xx, 5xx) passavam silenciosamente
3. `console.log(response)` em produção — poluía logs desnecessariamente
4. Retorno não tipado explicitamente — dependia de inferência implícita

## O que foi feito
1. Criada interface `BotResponse` para tipar o retorno da API
2. Adicionada verificação de `process.env.CHATBOT_API_URL` com throw descritivo
3. Adicionada verificação de `response.ok` antes do `.json()`
4. Removido `console.log`
5. Removido cast `as string` desnecessário

## Rollback
Restaurar a versão anterior com `fetch(...).then(res => res.json())` e o `console.log`.
