# refactor: remover redirect.tsx e usar redirect() diretamente

## Arquivos alterados
- `src/app/page.tsx` (simplificado)
- `src/utils/redirect.tsx` (removido)

## O que estava errado
`redirect.tsx` era marcado com `"use server"` mas exportava um "componente" React. Server Actions não devem ser componentes — são funções que podem ser chamadas de Client Components. No caso, `redirect()` do Next.js funciona durante o render de Server Components, então o wrapper era desnecessário e semanticamente confuso.

## O que foi feito
1. Removido o arquivo `src/utils/redirect.tsx`
2. Simplificado `src/app/page.tsx` para chamar `redirect("/home")` diretamente — que é o padrão do Next.js para redirecionamento em Server Components

## Rollback
Recriar `src/utils/redirect.tsx` com o conteúdo anterior e voltar o import em `page.tsx`.
