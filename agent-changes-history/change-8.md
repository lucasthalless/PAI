# refactor: remover duplicação da fonte Poppins no website layout

## Arquivo alterado
- `src/app/(website)/layout.tsx`

## O que estava errado
A fonte Poppins era instanciada tanto no root layout (`src/app/layout.tsx`) quanto no website layout (`src/app/(website)/layout.tsx`). Como o root layout já aplica `poppins.className` no `<body>`, o grupo (website) herda a fonte automaticamente — a segunda instância era redundante e gerava um download duplicado da fonte.

## O que foi feito
1. Removido o import e instância de `Poppins` do website layout
2. Removido `className={poppins.className}` do `<main>` (a fonte já vem do `<body>` pai)

## Rollback
Reimportar `Poppins` de `next/font/google`, instanciar com os mesmos weights e adicionar `className` no `<main>`.
