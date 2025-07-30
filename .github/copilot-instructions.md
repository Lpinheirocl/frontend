
# Instruções Copilot para Agentes de IA

## Visão Geral do Projeto
- Este é um projeto frontend Angular 20+, gerado com Angular CLI.
- O código principal do app está em `app/src/app/`.
- Os arquivos estáticos (imagens, etc.) ficam em `app/src/assets/`.
- Pontos de entrada: `main.ts` (navegador), `main.server.ts` (renderização no servidor).

## Fluxos de Trabalho do Desenvolvedor
- **Iniciar servidor de desenvolvimento:**
  ```bash
  cd app
  ng serve
  ```
  Acesse em [http://localhost:4200](http://localhost:4200).
- **Build para produção:**
  ```bash
  cd app
  ng build
  ```
  Saída em `app/dist/`.
- **Executar testes unitários:**
  ```bash
  cd app
  ng test
  ```
- **Gerar componentes/serviços:**
  Use os esquemáticos do Angular CLI, por exemplo:
  ```bash
  ng generate component components/exemplo
  ng generate service services/exemplo
  ```

## Estrutura e Padrões de Código
- **Páginas:** Cada rota/página está em `app/src/app/pages/{pagina}/` (ex: `home`).
- **Componentes:** UI compartilhada em `app/src/app/components/`.
- **CSS/Assets:** Use caminhos relativos para imagens no CSS, ex:
  ```css
  background-image: url('../../assets/images/background.jpg');
  ```
  Não use caminhos absolutos começando com `/app/...`.
- **Rotas:** Rotas do cliente em `app.routes.ts`, rotas do servidor em `app.routes.server.ts`.
- **Configuração:** Configuração do app em `app.config.ts` e `app.config.server.ts`.

## Convenções
- Use Angular CLI para todo scaffolding e builds.
- Mantenha assets em `app/src/assets/` e referencie com caminhos relativos.
- Prefira pastas de feature para páginas/componentes.
- Use TypeScript para todos os arquivos fonte.

## Pontos de Integração
- Não há integração backend por padrão; adicione serviços de API em `app/src/app/services/` se necessário.
- Para SSR, veja `main.server.ts` e `server.ts`.

## Arquivos-Chave
- `app/src/app/pages/` — módulos de página
- `app/src/app/components/` — componentes compartilhados
- `app/src/assets/` — arquivos estáticos
- `app/angular.json` — configuração do workspace Angular
- `app/package.json` — dependências/scripts

---

Se alguma convenção ou fluxo de trabalho estiver pouco claro, peça esclarecimento ou envie feedback para melhorar estas instruções.
