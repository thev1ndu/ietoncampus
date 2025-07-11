import Image from "next/image";
import { getEventBySlug, getEventSlugs } from "@/lib/events";

export async function generateStaticParams() {
  const slugs = await getEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  const { meta, content } = await getEventBySlug(params.slug);

  return (
    <article className="prose mx-auto py-8">
      <h1>{meta.title}</h1>
      <p>{meta.date}</p>
      <Image
        src={meta.thumbnail}
        alt={meta.title}
        width={800}
        height={400}
        className="rounded-md my-4"
      />
      <div>{content}</div>
    </article>
  );
}
