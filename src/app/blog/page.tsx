import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildItemListSchema } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/blog";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Bhai Blog – Saudi Arabia Travel & Taxi Guide",
  description:
    "Expert guides for Umrah pilgrims and travelers in Saudi Arabia. Taxi prices, Ziyarat tours, airport guides, Makkah–Madinah routes, and pilgrim tips.",
  alternates: {
    canonical: "https://taxibhaisauditaxiservice.com/blog",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Umrah Guide":     "bg-green-100 text-green-700",
  "Airport Guide":   "bg-blue-100 text-blue-700",
  "Ziyarat Guide":   "bg-amber-100 text-amber-700",
  "Intercity Routes":"bg-purple-100 text-purple-700",
  "Pilgrim Guide":   "bg-teal-100 text-teal-700",
};

export default function BlogIndexPage() {
  const listSchema = buildItemListSchema(
    BLOG_POSTS.map((p) => ({
      name: p.title,
      url: `/blog/${p.slug}`,
      description: p.description,
    })),
    "Taxi Bhai – Saudi Arabia Travel & Taxi Guide Blog"
  );

  return (
    <>
      <JsonLd data={listSchema} />
      <div className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />
          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl font-black mb-3">
              Saudi Arabia Taxi &amp; Travel Guide
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Expert guides for Umrah pilgrims, intercity travelers, and anyone navigating
              Saudi Arabia&apos;s western region.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white border border-gray-200 hover:border-green-400 rounded-2xl p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-600"}`}
                >
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime} min read
                </span>
              </div>
              <h2 className="font-black text-gray-900 text-lg leading-tight mb-2 group-hover:text-green-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {post.description}
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">
                  {new Date(post.datePublished).toLocaleDateString("en-SA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-green-600 group-hover:translate-x-1 transition-transform">
                  Read more <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
