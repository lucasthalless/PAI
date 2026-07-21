# feat: adicionar metadata nas páginas do website

## Arquivos alterados
- `src/app/(website)/home/page.tsx`
- `src/app/(website)/planos/page.tsx`
- `src/app/(website)/funcionalidades/page.tsx`
- `src/app/(website)/conheca-o-pai/page.tsx`

## O que estava errado
Apenas o root layout exportava `metadata`. As páginas individuais do website não tinham título nem descrição próprios — prejudicando SEO, acessibilidade e compartilhamento social (cada aba/link mostraria o mesmo título genérico).

## O que foi feito
Adicionado export `metadata: Metadata` com `title` e `description` específicos em cada página do grupo (website):
- `/home` → "PAI ⎯ Início"
- `/planos` → "PAI ⎯ Planos"
- `/funcionalidades` → "PAI ⎯ Funcionalidades"
- `/conheca-o-pai` → "PAI ⎯ Conheça o PAI"

## Rollback
Remover o import de `Metadata` e o export `metadata` de cada arquivo.
