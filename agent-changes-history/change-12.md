# fix: corrigir alt text do LinkedIn no FounderCard

## Arquivo alterado
- `src/components/FounderCard/FounderCard.tsx`

## O que estava errado
O ícone do LinkedIn tinha `alt='Github.'` — texto alternativo incorreto que prejudica acessibilidade (leitores de tela anunciariam "Github" para um link de LinkedIn).

## O que foi feito
Corrigido o alt para `'LinkedIn.'`.

## Rollback
Reverter o alt de `'LinkedIn.'` para `'Github.'`.
