import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { RelatedContent } from "@/components/sections/RelatedContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildArticleSchema } from "@/lib/schema";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog";
import { BUSINESS } from "@/lib/constants";
import { getRelatedContent } from "@/lib/relatedContent";
import { Clock, Calendar, ArrowLeft, MessageCircle } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.authorName }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.authorName],
    },
    alternates: {
      canonical: `${BUSINESS.website}/blog/${slug}`,
    },
  };
}

function renderMarkdown(md: string): string {
  return md
    .split("\n")
    .map((line) => {
      if (line.startsWith("## "))
        return `<h2 class="text-xl font-black text-gray-900 mt-8 mb-3">${line.slice(3)}</h2>`;
      if (line.startsWith("### "))
        return `<h3 class="text-lg font-bold text-gray-900 mt-6 mb-2">${line.slice(4)}</h3>`;
      if (line.startsWith("- "))
        return `<li class="text-gray-600 text-sm leading-relaxed ml-4 list-disc">${line.slice(2)}</li>`;
      if (line.match(/^\d+\. /))
        return `<li class="text-gray-600 text-sm leading-relaxed ml-4 list-decimal">${line.replace(/^\d+\. /, "")}</li>`;
      if (line.startsWith("| ") && line.includes("|")) {
        const cells = line.split("|").filter((c) => c.trim());
        const isHeader = line.includes("---");
        if (isHeader) return "";
        const tag = "td";
        return `<tr class="border-t border-gray-200">${cells.map((c) => `<${tag} class="px-3 py-2 text-sm text-gray-700">${c.trim()}</${tag}>`).join("")}</tr>`;
      }
      if (line.trim() === "") return "<br />";
      return `<p class="text-gray-600 text-sm leading-relaxed">${line}</p>`;
    })
    .join("\n");
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category === post.category
  ).slice(0, 2);

  const relatedLinks = getRelatedContent(`/blog/${slug}`);

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          authorName: post.authorName,
        })}
      />

      {/* Hero */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${slug}` },
            ]}
          />
          <div className="mt-4">
            <span className="inline-block bg-green-700 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-4">{post.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.datePublished).toLocaleDateString("en-SA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime} min read
              </span>
              <span>By {post.authorName}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <div
              className="prose-custom space-y-1"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="bg-green-700 rounded-2xl p-5 text-white sticky top-20">
              <h3 className="font-black text-base mb-1">Need a Taxi?</h3>
              <p className="text-green-100 text-xs mb-4">
                Book Taxi Bhai — fixed prices, 24/7 service.
              </p>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=Hi%20Taxi%20Bhai%2C%20I%20want%20to%20book%20a%20taxi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold w-full py-2.5 rounded-xl transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Now
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-1 text-green-100 hover:text-white text-xs mt-3 transition-colors"
              >
                {BUSINESS.phone}
              </a>
            </div>

            {related.length > 0 && (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-3">Related Articles</h3>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="block group"
                    >
                      <p className="text-xs font-semibold text-gray-700 group-hover:text-green-700 leading-snug transition-colors">
                        {r.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {r.readingTime} min
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </div>
      <RelatedContent
        services={relatedLinks.services}
        routes={relatedLinks.routes}
        cities={relatedLinks.cities}
        blogs={relatedLinks.blogs}
        heading="Related Services & Routes"
      />
    </>
  );
}
