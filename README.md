# samuelc-01 Blog

Este projeto é um blog/portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS. Ele serve como base para quem deseja criar um portfólio moderno, organizado por ano/mês, e facilmente extensível para novos posts.

## Funcionalidades
- Página inicial com posts agrupados por ano e mês (arquivo cronológico)
- Post inicial de boas-vindas com descrição profissional
- Layout responsivo e moderno
- Suporte a imagens externas (GitHub, Unsplash)
- Estrutura pronta para adicionar novos posts

## Estrutura de Pastas
```
src/
  app/
    layout.tsx      # Layout global (header, footer, navegação)
    page.tsx        # Página inicial (lista de posts agrupados)
    posts/
      [id]/
        page.tsx    # Página de post individual (detalhes)
  styles/
    globals.css     # Estilos globais (Tailwind)
```

## Principais Arquivos
- `src/app/page.tsx`: Página inicial. Agrupa e exibe os posts por ano/mês. O array `blogPosts` pode ser expandido para adicionar novos posts.
- `src/app/layout.tsx`: Define o layout padrão do site (cabeçalho, rodapé, navegação).
- `src/app/posts/[id]/page.tsx`: Página de detalhes de cada post (pode ser customizada para cada tipo de conteúdo).
- `next.config.js`: Configuração para permitir imagens externas (GitHub, Unsplash, etc).
- `tailwind.config.ts`: Configuração do Tailwind CSS.

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse em [http://localhost:3000](http://localhost:3000)

## Como adicionar um novo post
1. No arquivo `src/app/page.tsx`, adicione um novo objeto ao array `blogPosts`:
   ```ts
   {
     id: 2,
     title: "Título do Post",
     excerpt: "Resumo ou descrição curta.",
     date: "2024-06-01", // formato YYYY-MM-DD
     author: "Seu Nome",
     category: "Categoria",
     image: "URL da imagem (opcional)",
   }
   ```
2. O post aparecerá automaticamente agrupado pelo ano e mês na home.
3. Para criar uma página de detalhes, crie um arquivo em `src/app/posts/[id]/page.tsx`.

## Como customizar
- **Layout:** Edite `layout.tsx` para mudar cabeçalho, rodapé ou navegação.
- **Estilo:** Edite `globals.css` ou use classes do Tailwind.
- **Posts:** O agrupamento por ano/mês é automático, basta preencher o campo `date` corretamente.
- **Imagens:** Para usar imagens externas, adicione o domínio em `next.config.js`.

## Dicas para expandir
- Adicione autenticação para posts privados/admin
- Integre com CMS (ex: Notion, Strapi, Contentful)
- Adicione busca, tags ou categorias
- Implemente comentários ou integração com redes sociais

## Créditos
Desenvolvido por Samuel Cristian dos Santos

---
Sinta-se livre para usar, modificar e expandir este projeto!
