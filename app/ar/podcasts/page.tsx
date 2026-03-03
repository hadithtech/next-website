import { getAllEpisodes } from '@/lib/episodes';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'البودكاست | حديث التقنية',
  description: 'استكشف مجموعتنا من البودكاست التقني التي تضم خبراء الصناعة والمطورين وقادة الفكر الذين يشاركون رؤاهم حول التكنولوجيا والتطوير والابتكار.',
  openGraph: {
    title: 'البودكاست | حديث التقنية',
    description: 'استكشف مجموعتنا من البودكاست التقني التي تضم خبراء الصناعة.',
  },
};

export default function PodcastsPageAr() {
  const episodes = getAllEpisodes('ar');

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              جميع حلقات البودكاست
            </h1>
            <p className="text-lg text-muted-foreground">
              اكتشف محادثات ثاقبة مع قادة التكنولوجيا والمبتكرين
            </p>
          </div>

          {/* Episodes Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {episodes.map((episode) => (
              <Link
                key={episode.slug}
                href={`/ar/podcasts/${episode.slug}`}
                className="group block"
              >
                <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <iframe
                      src={episode.frontmatter.embedUrl}
                      title={episode.frontmatter.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-muted-foreground">
                        {new Date(episode.frontmatter.publishedAt).toLocaleDateString('ar-SA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        {episode.frontmatter.duration}
                      </span>
                    </div>

                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {episode.frontmatter.title}
                    </h2>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {episode.frontmatter.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {episode.frontmatter.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-secondary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {episodes.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                لا توجد حلقات بودكاست متاحة حاليًا. تحقق مرة أخرى قريبًا!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
