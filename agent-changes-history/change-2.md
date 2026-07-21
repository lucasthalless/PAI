# fix: corrigir race condition no Chat (stale closure)

## Arquivo alterado
- `src/components/Chatbot/Chat/Chat.tsx`

## O que estava errado
As funções `sendMessage` e `sendOption` usavam `messages` diretamente da closure ao adicionar a mensagem do usuário:
```ts
setMessages([...messages, { sender: "user", content: input }]);
```
Se o usuário enviasse mensagens rapidamente, `messages` estaria desatualizado (stale state), causando perda de mensagens.

## O que foi feito
Substituída a referência direta a `messages` pela forma funcional do setter (`prev => [...]`) em ambas as funções. Também capturado o `input` numa variável local (`currentInput`) antes de limpar o estado, evitando usar `input` após o `setInput("")`.

## Rollback
Reverter `setMessages((prev) => [...prev, ...])` para `setMessages([...messages, ...])` nas funções `sendMessage` e `sendOption`.
