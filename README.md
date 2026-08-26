# Shield Dev — Portfólio

Portfólio de Rodrigo Dantas (Shield Dev). Vite + React + TypeScript + Tailwind CSS.

## Rodar localmente

Pré-requisito: Node.js 18+ instalado.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # testa o build localmente
```

## Estrutura

```
shield-dev-portfolio/
├─ index.html
├─ public/
│  └─ projetos/            # imagens reais dos projetos (webp)
│     ├─ erivan.webp
│     └─ go-ticket-park.webp
└─ src/
   ├─ main.tsx             # entrypoint
   ├─ App.tsx              # monta as seções + efeitos de scroll
   ├─ index.css            # design system (variáveis, estilos, animações) + Tailwind
   ├─ data/
   │  └─ conteudo.ts       # TODO o conteúdo: nav, projetos, serviços, contatos
   └─ components/
      ├─ Logo.tsx
      ├─ Navbar.tsx
      ├─ Hero.tsx
      ├─ Sobre.tsx
      ├─ Projetos.tsx
      ├─ Servicos.tsx
      ├─ Contato.tsx
      └─ Footer.tsx
```

## Como editar

- **Textos, projetos, serviços e contatos:** `src/data/conteudo.ts`.
- **Cores, espaçamentos, animações:** `src/index.css` (variáveis CSS no topo, em `:root` dentro de cada bloco).
- **Novo projeto:** adicione um item no array `PROJETOS`. Para capa com imagem, coloque o arquivo em `public/projetos/` e aponte `imagem: "/projetos/arquivo.webp"`. Para capa em gradiente (mockup), use `gradiente` + `mock: "browser" | "phone"`.

## Observações

- O hero mostra um painel de código animado (`src/components/HeroCode.tsx`) em vez de imagem/vídeo — edite o array `CODE` nesse arquivo para trocar o snippet exibido.
- O estilo principal fica em `src/index.css` (design system próprio). O Tailwind está instalado e ativo — use as utilitárias à vontade para novos componentes.

© Shield Dev · Rodrigo Dantas
