## 1. Contexto do projeto

Você vai trabalhar no frontend de um projeto Next.js já existente. Este NÃO é um projeto novo — leia o código atual antes de propor qualquer mudança estrutural.

- **PAI:** O projeto consiste em um FrontEnd NextJS de uma solução de diagnóstico automotivo com ajuda de um chatbot com IA. voce entende o problema que esta acontecendo em um veiculo com ajuda do chatbot e tambem pode pesquisar onde existem serviços próximos para orçar e agendar consertos. A aplicação conta com website voltado para marketing (que eventualmente pode ser separado em outra aplicação) e um portal do cliente que conta com as funcionalidades do SaaS. 
- **Versão do Next.js:** 14.2.13, usando App Router
- **Linguagem:** TypeScript
- **Gerenciador de estado:** não existe, se não me engano.
- **Estilização:** css padrão.
- **Backend/API:** API REST em desenvolvimento.
- **Autenticação:** não configurada
- **Deploy:** Vercel

## 2. Objetivo geral

Seu trabalho tem duas frentes, nesta ordem de prioridade:

1. **Corrigir bugs existentes** — sem introduzir regressões.
3. **Aplicar boas práticas do Next.js** — refatorações incrementais, não uma reescrita.

## 3. Bugs conhecidos

- [ ] footer com links errados
- [ ] Também faça uma varredura própria por bugs não listados (ex: memory leaks em useEffect, chaves de key duplicadas em listas, race conditions em fetch, estados que não resetam, erros de hidratação SSR/CSR).

## 4. Boas práticas de Next.js a aplicar

- Usar Server Components por padrão; `"use client"` só onde há interatividade real (estado, efeitos, eventos).
- Data fetching no lugar certo: Server Components/Route Handlers em vez de fetch no client quando fizer sentido.
- `next/image` para todas as imagens (evitar `<img>` cru).
- `next/link` para navegação interna (nunca `<a href>` puro para rotas internas).
- Metadata API (`generateMetadata`) em vez de `<head>` manual, se aplicável.
- Loading e error boundaries (`loading.tsx`, `error.tsx`) nas rotas que fazem fetch.
- Evitar waterfalls de requisição (paralelizar fetches independentes).
- Componentização: extrair lógica repetida, eliminar prop drilling excessivo.
- Tipagem forte: eliminar `any`, tipar corretamente respostas de API.
- Acessibilidade básica (labels, roles, contraste, navegação por teclado) nos componentes tocados.

## 5. Restrições — o que NÃO fazer

- Não trocar de framework de estilização, gerenciador de estado ou biblioteca de UI sem aprovação explícita.
- Não reescrever páginas inteiras quando um ajuste pontual resolve.
- Não alterar contratos de API sem avisar (se o backend precisar mudar, sinalize separadamente).
- Não remover funcionalidades existentes "para simplificar".
- Toda mudança estrutural relevante deve vir acompanhada de uma breve explicação do porquê.

## 6. Processo de trabalho esperado

1. Primeiro, faça um levantamento (sem alterar código ainda): liste bugs encontrados, mocks identificados e violações de boas práticas, organizados por prioridade/risco.
2. Aguarde minha validação dessa lista antes de começar a mexer no código
3. Implemente em commits/mudanças pequenas e isoladas, uma preocupação por vez (não misturar fix de bug com refactor de estilo no mesmo commit).
4. Ao final de cada bloco de mudanças, resuma o que foi alterado e por quê.

## 7. Critérios de aceite

- [ ] Build de produção (`next build`) passa sem erros nem warnings novos.
- [ ] Bugs listados na seção 3 verificados como corrigidos.
- [ ] Sem regressão visual/funcional nas telas não mencionadas.