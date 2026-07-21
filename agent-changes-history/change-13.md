# refactor: corrigir interface e hover do LinkCard

## Arquivo alterado
- `src/components/svgs/LinkCard/LinkCard.tsx`

## O que estava errado
1. A interface `LinkCardProps` estendia `SVGAttributes<LinkCardProps>` sem razão semântica — o componente é um Link, não um SVG
2. O `onMouseOver` usava `e.currentTarget.children[0] as HTMLElement` — cast inseguro que pode quebrar se a estrutura do SVG mudar
3. Atributos SVG usavam kebab-case HTML (`color-interpolation-filters`, `flood-opacity`) em vez de camelCase React (`colorInterpolationFilters`, `floodOpacity`)

## O que foi feito
1. Criada interface `LinkCardProps` simples com apenas `color`, `children` e `href`
2. Substituídos os handlers de hover por `querySelector("rect")` com null check — mais seguro e explícito
3. Corrigidos atributos SVG para camelCase (padrão React/JSX)

## Rollback
Restaurar a versão anterior com `SVGAttributes` e os handlers com cast `as HTMLElement`.
