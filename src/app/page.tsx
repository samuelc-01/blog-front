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
    title: "Journey Begins: Why I Study, Code, and Share",
    excerpt: "In the world of software development, the pursuit of knowledge is just as essential as the code we write...",
    date: "June 16, 2025",
    author: "Samuel Cristian",
    category: "Studies & Research",
    image: "https://www.codedex.io/images/python/python-animated.gif"
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    excerpt: "Writing clean code is an art that every developer should master...",
    date: "June 15, 2025",
    author: "Samuel Cristian",
    category: "Programming",
    image: "https://www.codedex.io/images/python/python-animated.gif"
  },
  {
    id: 3,
    title: "Understanding React Hooks",
    excerpt: "React Hooks have revolutionized how we write React components...",
    date: "June 14, 2025",
    author: "Samuel Cristian",
    category: "React",
    image: "https://www.codedex.io/images/python/python-animated.gif"
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
  // Get current year and month
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

  // Group posts by year and month
  const postsByDate = blogPosts.reduce((acc, post) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const key = `${year}-${month}`;
    
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(post);
    return acc;
  }, {} as Record<string, typeof blogPosts>);

  // Get unique dates for the lateral section
  const uniqueDates = Object.keys(postsByDate).sort((a, b) => {
    const [yearA, monthA] = a.split('-');
    const [yearB, monthB] = b.split('-');
    return new Date(`${yearB}-${monthB}`).getTime() - new Date(`${yearA}-${monthA}`).getTime();
  });

  return (
    <div className="flex gap-8">
      {/* Main content - centered posts */}
      <div className="flex-1 max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">
            {currentMonth} {currentYear}
          </h2>
          <div className="space-y-8">
            {Object.entries(postsByDate).map(([date, posts]) => (
              <div key={date} className="space-y-6">
                {posts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center text-sm text-black mb-4">
                        <span className="font-medium">{post.date}</span>
                        <span className="mx-2">•</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <Link href={`/posts/${post.id}`} className="block">
                        <h3 className="text-xl font-bold text-black mb-2 hover:text-gray-700 transition-colors duration-200">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-black">
                        <span className="font-medium">By {post.author}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Lateral section with date filters */}
      <div className="w-64 hidden lg:block">
        <div className="sticky top-8">
          <h3 className="text-lg font-semibold text-black mb-4">On this page:</h3>
          <nav className="space-y-2">
            {uniqueDates.map((date) => {
              const [year, month] = date.split('-');
              return (
                <a
                  key={date}
                  href={`#${date}`}
                  className="block text-black hover:text-gray-700 transition-colors duration-200"
                >
                  {year} - {month}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
