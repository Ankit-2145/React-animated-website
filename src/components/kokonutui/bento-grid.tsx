import { cn } from "@/lib/utils";
import {
  CheckCircle,
  TrendingUp,
  Video,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type React from "react"; // Import React
import { useState } from "react";

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  showAllTags?: boolean;
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items?: BentoItem[];
}

const itemsSample: BentoItem[] = [
  {
    title: "Web Development Services",
    description:
      "Building Fast, Scalable, and Modern Websites That Drive Growth",
    icon: (
      <TrendingUp
        className="w-4 h-4 text-blue-500"
        aria-label="Trending Up Icon"
      />
    ),
    status: "Live",
    tags: [
      "Custom Website Development",
      "Full-Stack Web Development",
      "E-commerce Development",
      "CMS Development",
      "Web Application Development",
      "Landing Page Development",
      "Performance Optimization & SEO",
      "API Development & Integration",
      "Headless CMS & JAMstack Development",
      "Website Maintenance & Support",
    ],
    colSpan: 2,
  },
  {
    title: "Task Manager",
    meta: "84 completed",
    description: "Automated workflow management with priority scheduling",
    icon: (
      <CheckCircle
        className="w-4 h-4 text-emerald-500"
        aria-label="Check Circle Icon"
      />
    ),
    status: "Updated",
    tags: ["Productivity", "Automation"],
  },
  {
    title: "Media Library",
    meta: "12GB used",
    description: "Cloud storage with intelligent content processing",
    icon: <Video className="w-4 h-4 text-purple-500" aria-label="Video Icon" />,
    tags: ["Storage", "CDN"],
  },
  {
    title: "Global Network",
    meta: "6 regions",
    description: "Multi-region deployment with edge computing",
    icon: <Globe className="w-4 h-4 text-sky-500" aria-label="Globe Icon" />,
    status: "Beta",
    tags: ["Infrastructure", "Edge"],
    colSpan: 2,
  },
];

const gridItemClasses = {
  base: cn(
    "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
    "border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black",
    "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
    "hover:-translate-y-0.5 will-change-transform"
  ),
  persistentHover:
    "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5 dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
};

function TagList({ tags }: { tags?: string[] }) {
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? tags : tags?.slice(0, 3);

  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      {visibleTags?.map((tag, i) => (
        <span
          key={i}
          className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-xs transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20"
        >
          #{tag}
        </span>
      ))}
      {tags.length > 3 && (
        <button
          onClick={() => setShowAllTags(!showAllTags)}
          className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-xs transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20"
        >
          {showAllTags ? (
            <>
              <ChevronUp className="w-3 h-3" />
              Less
            </>
          ) : (
            <>
              <ChevronDown className="w-3 h-3" />
              {`+${tags.length - 3} more`}
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default function BentoGrid({ items = itemsSample }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            gridItemClasses.base,
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover && gridItemClasses.persistentHover
          )}
        >
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-linear-to-br transition-all duration-300">
                {item.icon}
              </div>
              <span
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-xs",
                  "bg-muted text-muted-foreground",
                  "transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20"
                )}
              >
                {item.status || "Active"}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-card-foreground tracking-tight text-xl">
                {item.title}
                <span className="ml-2 text-xs text-muted-foreground font-normal">
                  {item.meta}
                </span>
              </h3>
              <p className="text-base text-muted-foreground leading-snug">
                {item.description}
              </p>
            </div>

            <div className="flex flex-col items-start justify-between mt-2">
              <TagList tags={item.tags} />
              <span className="text-xs text-card-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                {item.cta || "Explore →"}
              </span>
            </div>
          </div>

          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-xl p-px bg-linear-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10",
              "transition-opacity duration-300",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          />
        </div>
      ))}
    </div>
  );
}
