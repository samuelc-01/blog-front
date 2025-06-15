import Image from "next/image";
import Link from "next/link";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Samuel Cristian dos Santos",
    excerpt: "Desenvolvedor | Eletroeletrônica | C++ | Python\nDivinópolis, Minas Gerais, Brasil",
    date: "Atualizado em 2024",
    author: "Samuel Cristian dos Santos",
    category: "Perfil Profissional",
    image: "https://avatars.githubusercontent.com/u/your-github-id", // Substitua pelo seu avatar do GitHub se quiser
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bem-vindo ao Meu Portfólio</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Desenvolvedor | Técnico em Eletroeletrônica | C++ | Python<br />Divinópolis, Minas Gerais, Brasil
        </p>
      </section>

      <div className="grid grid-cols-1 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 flex items-center justify-center bg-gray-100">
              {/* Se quiser usar sua foto, coloque a URL correta */}
              {/* <Image src={post.image} alt={post.title} width={120} height={120} className="rounded-full object-cover" /> */}
              <span className="text-6xl">👨‍💻</span>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 whitespace-pre-line">{post.excerpt}</p>
              <Link href={`/posts/${post.id}`} className="text-blue-600 hover:text-blue-800">
                Ver detalhes
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
