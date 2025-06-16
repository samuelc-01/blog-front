/*
  =============================================
  Página de Post Individual - Blog/Portfólio samuelc-01
  ---------------------------------------------
  Este arquivo representa a página de detalhes de um post.
  - Use para exibir conteúdo completo, imagens, links, etc.
  - O parâmetro 'id' é dinâmico e corresponde ao post selecionado.

  Dicas para devs:
  - Personalize o layout e conteúdo conforme o tipo de post.
  - Pode usar dados mockados ou integrar com backend futuramente.
  - Use Tailwind CSS para estilização rápida.
  =============================================
*/
import image from "next/image";
import Image from "next/image";
import Link from "next/link";

// Mock data for blog posts (same as in page.tsx)
const blogPosts = [
  {
    id: 1,
    title: "Journey Begins: Why I Study, Code, and Share",
    content: `In the world of software development, the pursuit of knowledge is just as essential as the code we write. This blog is born as an extension of my learning process — a space where I document, reflect, and share ideas, mistakes, discoveries, and purpose.

## Purpose: Beyond Technology

My name is Samuel Cristian, and I began my path in development through an internship working with Flutter. Curiosity led me beyond mobile interfaces: I went on to study automation, microcontrollers, then modern front-end development with **React** and **Next.js**, solid APIs using **Node.js**, and security practices focused on networking and infrastructure.

## Purpose-Driven Learning

> "It is not knowledge, but the act of learning, not possession but the act of getting there, which grants the greatest enjoyment."  
> — **Carl Friedrich Gauss**

## What You'll Find Here

- Technical guides based on real-world problems  
- Best practices in security, testing, and architecture  
- Reflections on technology, learning, and professional growth  
- Directed study: how I built my study plan based on learning cycles  
- Articles featuring quotes from thinkers who inspire me (Nietzsche, Gauss, Kant, Alan Kay, Dijkstra)

> "We must build systems that encourage thinking, not substitute for it."  
> — **Bret Victor**

## About Me

- 💻 Fullstack Developer | React.js, Next.js, Node.js, FastAPI  
- ⚙️ Electronics Technician focused on automation and networks  
- 🛠️ Passionate about efficient, secure, and well-documented systems  
- 🧠 Lifelong learner, driven by philosophical restlessness

*Post number 1.*`,
    date: "June 16, 2025",
    author: "Samuel Cristian",
    category: "Studies & Research",
    image: "https://www.codedex.io/images/python/python-animated.gif"
  },
];


export default async function BlogPost({ params }: { params: { id: string } }) {
  const postId = await Promise.resolve(params.id);
  const post = blogPosts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative h-96 mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
      
      <header className="mb-8">
        <div className="flex items-center text-sm text-black mb-4">
          <span className="font-medium">{post.date}</span>
          <span className="mx-2">•</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tight leading-tight bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg shadow-lg">
          {post.title}
        </h1>
        <div className="flex items-center">
          <div className="text-black font-medium">
            By {post.author}
          </div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-black prose-strong:text-black prose-blockquote:text-black prose-blockquote:border-l-4 prose-blockquote:border-gray-400 prose-blockquote:pl-4 prose-blockquote:italic prose-ul:text-black prose-li:marker:text-gray-600">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 leading-relaxed text-black">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="inline-flex items-center text-black hover:text-gray-700 font-medium">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all posts
        </Link>
      </div>
    </article>
  );
} 