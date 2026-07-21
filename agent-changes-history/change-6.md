# fix: substituir <a href> por next/link na home

## Arquivo alterado
- `src/app/(website)/home/page.tsx`

## O que estava errado
O botão "Saiba mais" usava `<a href="/conheca-o-pai">` — uma tag HTML pura que causa full page reload em vez de navegação client-side (SPA).

## O que foi feito
1. Importado `Link` de `next/link`
2. Substituído `<a>` por `<Link>` mantendo a mesma classe e conteúdo

## Rollback
Trocar `<Link>` de volta para `<a>` e remover o import de `next/link`.
