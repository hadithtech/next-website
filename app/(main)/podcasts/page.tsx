import { getAllEpisodes } from '@/lib/episodes';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Podcasts | Hadith Tech',
    description: 'Explore our collection of tech podcasts featuring industry experts, developers, and thought leaders sharing insights on technology, development, and innovation.',
    openGraph: {
        title: 'Podcasts | Hadith Tech',
        description: 'Explore our collection of tech podcasts featuring industry experts.',
    },
};

export default function PodcastsPage() {
    const episodes = getAllEpisodes('en');

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            All Podcasts
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Discover insightful conversations with technology leaders and innovators
                        </p>
                    </div>

                    {/* Episodes Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {episodes.map((episode) => (
                            <Link
                                key={episode.slug}
                                href={`/podcasts/${episode.slug}`}
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
                                                {new Date(episode.frontmatter.publishedAt).toLocaleDateString('en-US', {
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
                                No podcasts available yet. Check back soon!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
