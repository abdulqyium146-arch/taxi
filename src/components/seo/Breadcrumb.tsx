import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex items-center gap-1.5 flex-wrap text-sm text-gray-500">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              )}
              {index === 0 && (
                <Home className="w-3.5 h-3.5 flex-shrink-0" />
              )}
              {index === allItems.length - 1 ? (
                <span className="text-gray-800 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-green-700 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
