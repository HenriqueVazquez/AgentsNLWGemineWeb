# NLW Agents 🚀

Projeto desenvolvido por **Henrique Vazquez** durante o evento da **Rocketseat**.

## 🛠️ Tecnologias e Bibliotecas Principais

- ⚛️ **React 19** – Biblioteca principal para construção da interface.
- 🟦 **TypeScript 5.8** – Tipagem estática para maior segurança e produtividade.
- ⚡ **Vite 7** – Ferramenta de build e desenvolvimento rápido.
- 🛣️ **React Router DOM 7** – Gerenciamento de rotas SPA.
- 🔄 **@tanstack/react-query 5** – Gerenciamento de dados assíncronos e cache.
- 🎨 **TailwindCSS 4** – Utilitário para estilização rápida e responsiva.
- 🧩 **@radix-ui/react-slot** – Composição avançada de componentes.
- 🖼️ **lucide-react** – Ícones modernos para React.
- 🏷️ **class-variance-authority, clsx, tailwind-merge** – Utilitários para manipulação de classes CSS.
- ✨ **tw-animate-css** – Animações CSS integradas ao Tailwind.
- 🧹 **biome** – Linter e formatter para padronização do código.
- 🧪 **zod** – Validação de schemas e formulários.
- 🧰 **shadcn/ui** – Componentes de UI reutilizáveis.

## 🤖 Integração com IA Gemini e Embeddings

- **Transcrição de Áudio:** O front-end permite gravar áudios diretamente do navegador, enviando-os para o backend.
- **Processamento no Backend:** O backend realiza a transcrição do áudio e gera embeddings a partir do texto transcrito.
- **Respostas Inteligentes:** Utiliza a API Gemini (Google AI) para gerar respostas contextuais baseadas na transcrição do áudio, retornando-as para o front-end.
- **Fluxo Completo:** O usuário grava a aula completa; os seguidores podem realizar perguntas com base nessa aula e receber respostas da IA, que utiliza todo o histórico disponível na sala para responder com base no contexto.

## 📁 Padrões e Organização

- **Componentização:** Componentes reutilizáveis organizados em `src/components` (ex: `ui/button.tsx`).
- **Pages:** Páginas principais em `src/pages` (ex: `create-room.tsx`, `room.tsx`, `record-room-audio.tsx`).
- **Hooks, utils e aliases:** Utilitários e hooks organizados em `src/lib` e aliases configurados para facilitar imports.
- **Estilização:** TailwindCSS com customização de temas e suporte a dark mode.
- **Gerenciamento de estado e dados:** React Query para requisições e cache.
- **Lint/Format:** Biome configurado para padronização automática do código.

## ▶️ Como rodar o projeto

1. **Clone o repositório e acesse a pasta:**
   ```bash
   git clone <url-do-repo>
   cd web
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

## 📜 Scripts principais

- `npm run dev` – Inicia o ambiente de desenvolvimento.
- `npm run build` – Gera a build de produção (compila TypeScript e gera os arquivos finais).
- `npm run preview` – Visualiza a build de produção localmente.
- `npm run shadcs` – Gerencia e adiciona componentes do shadcn/ui.

---

Feito com carinho por **Henrique Vazquez** 💜✨

<div align="center">
  <strong>Obrigado por visitar! 🚀🤖</strong>
</div> 