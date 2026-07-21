# fix: corrigir removeNotification que muta estado

## Arquivo alterado
- `src/app/area-do-cliente/notificacoes/page.tsx`

## O que estava errado
```ts
setNotifications(notifications.splice(index + 1, 1));
```
`Array.splice()` muta o array original e retorna os itens **removidos** — ou seja, o state era setado com o item que deveria ser excluído, e o array original era corrompido silenciosamente.

## O que foi feito
Substituído por `filter` com forma funcional do setter:
```ts
setNotifications((prev) => prev.filter((_, i) => i !== index));
```
Isso cria um novo array sem o item no índice fornecido, sem mutação.

## Rollback
Reverter a linha do `setNotifications` para `notifications.splice(index + 1, 1)`.
