# fix: corrigir key no Fragment do Chat.map()

## Arquivo alterado
- `src/components/Chatbot/Chat/Chat.tsx`

## O que estava errado
O `.map()` de mensagens usava `<>...</>` (shorthand Fragment) que **não aceita props**, e colocava o `key` no `<div>` filho — onde não ajuda o React na reconciliação da lista. Além disso, os `.map()` internos reutilizavam o nome `index`, causando shadowing.

## O que foi feito
1. Substituído `<>` por `<Fragment key={index}>` no wrapper do map principal
2. Removido `key` do `<div>` filho (agora desnecessário, pois o Fragment pai tem a key)
3. Renomeado variáveis internas para `textIndex` e `optionIndex` para evitar shadowing

## Rollback
Reverter o `<Fragment key={index}>` para `<>` e devolver o `key={index}` para o `<div>` interno.
