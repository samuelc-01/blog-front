/*
  =============================================
  Blog/Portfólio - samuelc-01
  ---------------------------------------------
  Este arquivo é a página inicial do blog/portfólio.
  - Exibe um header com imagem, título e subtítulo.
  - Lista os posts agrupados por ano e mês (arquivo cronológico).
  - O array 'blogPosts' pode ser expandido para novos posts.
  - Para cada post, crie uma página em /posts/[id]/page.tsx se desejar detalhes.

  Dicas para devs:
  - Para adicionar posts, basta inserir no array 'blogPosts' com data no formato YYYY-MM-DD.
  - O agrupamento por ano/mês é automático.
  - Para customizar o header, edite o bloco <section> principal.
  - Para alterar o layout global, edite src/app/layout.tsx.
  - Imagens externas precisam estar permitidas em next.config.js.
  - Use Tailwind CSS para estilização rápida.
  =============================================
*/
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = format(now, "MMMM", { locale: ptBR });

const blogPosts = [
  {
    id: 1,
    title: "#1 Welcome",
    excerpt: `Olá! Meu nome é Samuel Cristian dos Santos. Sou Desenvolvedor e Técnico em Eletroeletrônica, com experiência em C++, Python e automação industrial. Atuo em Divinópolis/MG e já trabalhei com suporte de TI, desenvolvimento de soluções, automações com microcontroladores e APIs, além de projetos freelance e estágio em tecnologia.\n\nTenho facilidade em depuração, solução de problemas e interfaces de programação. Também possuo inglês para trabalho profissional.\n\nEntre em contato: samuel.cristian17062004@gmail.com | +55 (37) 98854-9143 | [LinkedIn](https://www.linkedin.com/in/samuelcristian) | [GitHub](https://github.com/ceefast)`,
    date: now.toISOString().slice(0, 10),
    author: "Samuel Cristian dos Santos",
    category: "Perfil Profissional",
    image: "https://avatars.githubusercontent.com/u/94959646?s=400&u=20a9e6bdc634aee3c4447b2f9656369cf54c2d88&v=4",
  },
];

function groupPostsByYearMonth(posts: typeof blogPosts) {
  const groups: Record<string, Record<string, typeof blogPosts>> = {};
  posts.forEach((post) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = format(date, "MMMM", { locale: ptBR });
    if (!groups[year]) groups[year] = {};
    if (!groups[year][month]) groups[year][month] = [];
    groups[year][month].push(post);
  });
  return groups;
}

const groupedPosts = groupPostsByYearMonth(blogPosts);

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="w-40 h-24 flex items-center justify-center rounded-2xl shadow-2xl mb-2">
            <Image
              src="https://avatars.githubusercontent.com/u/94959646?s=400&u=20a9e6bdc634aee3c4447b2f9656369cf54c2d88&v=4"
              alt="Samuel Cristian dos Santos"
              width={160}
              height={100}
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">samuelc-01 | blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Developer | Electronics | C++ | Python<br /> Brasil 🇧🇷
        </p>
      </section>
      <div className="space-y-8">
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mt-6 mb-2 text-black">{currentYear} - {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}</h2>
            <ul className="list-disc list-inside space-y-2">
              {groupedPosts[currentYear]?.[currentMonth]?.map((post) => (
                <li key={post.id} className="text-black">
                  <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                    {post.title}
                  </Link>
                  <span className="text-black text-sm ml-2">({format(new Date(post.date), 'dd/MM/yyyy')})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
