import Image from "next/image";
import Link from "next/link";

// Mock data for blog posts (same as in page.tsx)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    content: `Next.js is a powerful React framework that makes building full-stack web applications simple and efficient. In this post, we'll explore the key features that make Next.js a great choice for your next project.

    ## Why Next.js?

    Next.js provides several benefits that make it an excellent choice for modern web development:

    1. Server-side rendering (SSR)
    2. Static site generation (SSG)
    3. API routes
    4. Built-in CSS and Sass support
    5. TypeScript support out of the box

    ## Getting Started

    To create a new Next.js project, you can use the following command:

    \`\`\`bash
    npx create-next-app@latest my-app
    \`\`\`

    This will set up a new Next.js project with all the necessary dependencies and configuration.`,
    date: "March 15, 2024",
    author: "John Doe",
    category: "Development",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "The Future of Web Development",
    content: `The web development landscape is constantly evolving, bringing new technologies and methodologies that shape how we build applications. Let's explore some of the most exciting trends in web development.

    ## Emerging Technologies

    1. WebAssembly
    2. Edge Computing
    3. AI and Machine Learning in Web Apps
    4. Progressive Web Apps (PWAs)
    5. Micro Frontends

    ## What's Next?

    The future of web development looks promising, with more focus on performance, accessibility, and user experience.`,
    date: "March 14, 2024",
    author: "Jane Smith",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Mastering TypeScript",
    content: `TypeScript has become an essential tool in modern web development, offering type safety and better developer experience. Let's dive into some advanced TypeScript concepts.

    ## Advanced TypeScript Features

    1. Generics
    2. Utility Types
    3. Decorators
    4. Advanced Types
    5. Type Guards

    ## Best Practices

    Learn how to write maintainable and scalable TypeScript code with these best practices.`,
    date: "March 13, 2024",
    author: "Mike Johnson",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

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
    <article className="max-w-4xl mx-auto">
      <div className="relative h-96 mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      
      <header className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center">
          <div className="text-gray-600">
            By {post.author}
          </div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
} 