import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { ReactElement } from "react";

// Extend meta to include description
export interface EventMeta {
  title: string;
  date: string;
  thumbnail: string;
  description: string;
}

const EVENTS_PATH = path.join(process.cwd(), "content/events");

export async function getEventSlugs(): Promise<string[]> {
  const entries = await fs.readdir(EVENTS_PATH);
  return entries
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getAllEvents(): Promise<
  (EventMeta & { slug: string })[]
> {
  const slugs = await getEventSlugs();
  return Promise.all(
    slugs.map(async (slug) => {
      const source = await fs.readFile(
        path.join(EVENTS_PATH, `${slug}.mdx`),
        "utf8"
      );
      const { data } = matter(source);
      return { slug, ...(data as EventMeta) };
    })
  );
}

export async function getEventBySlug(
  slug: string
): Promise<{ meta: EventMeta; content: ReactElement }> {
  const source = await fs.readFile(
    path.join(EVENTS_PATH, `${slug}.mdx`),
    "utf8"
  );
  const { frontmatter, content } = await compileMDX<EventMeta>({
    source,
    options: { parseFrontmatter: true },
  });

  return { meta: frontmatter, content };
}
