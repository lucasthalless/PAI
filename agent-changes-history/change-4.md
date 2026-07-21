# fix: corrigir componente Input para repassar todas as props

## Arquivo alterado
- `src/components/Input/Input.tsx`

## O que estava errado
O componente recebia `InputHTMLAttributes<null>` (tipo genérico errado) e só repassava manualmente `type`, `placeholder` e `disabled` para o `<input>`. Props como `value`, `readOnly`, `onChange`, `name`, `id` eram ignoradas — fazendo com que os formulários de cadastro, assinatura e login não funcionassem corretamente.

## O que foi feito
1. Corrigido o tipo genérico para `InputHTMLAttributes<HTMLInputElement>`
2. Desestruturado `className` (para aplicar no wrapper) e espalhado `...props` diretamente no `<input>`
3. Agora qualquer prop HTML válida é repassada automaticamente

## Rollback
Reverter para a versão anterior que listava manualmente `type`, `placeholder` e `disabled`.
