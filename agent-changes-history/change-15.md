# verificação: build final (next build)

## Status
**Não foi possível rodar `next build`** — o sandbox está em modo `INTEGRATIONS_ONLY` (sem acesso à internet para instalar node_modules).

## Verificação alternativa realizada
Executado `tsc --noEmit --isolatedModules --noResolve` nos arquivos modificados. Todos os erros reportados são exclusivamente de **resolução de módulos** (`Cannot find module 'react'`, `Cannot find module 'next/...'`) — esperados sem `node_modules`.

**Nenhum erro de sintaxe, lógica ou tipagem própria dos arquivos modificados foi encontrado.**

## Recomendação
Ao rodar `npm install && npm run build` no ambiente completo (local ou CI), o build deve passar sem erros novos introduzidos por essas mudanças.
