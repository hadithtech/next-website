import { getEpisodeBySlug, getAllEpisodes } from '@/lib/episodes';
import { getGuestsByEpisodeSlug } from '@/lib/guests';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const episodes = getAllEpisodes('en');
    return episodes.map((episode) => ({
        slug: episode.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const episode = getEpisodeBySlug(params.slug, 'en');

    if (!episode) {
        return {
            title: 'Episode Not Found',
        };
    }

    return {
        title: `${episode.frontmatter.title} | Hadith Tech`,
        description: episode.frontmatter.description,
        openGraph: {
            title: episode.frontmatter.title,
            description: episode.frontmatter.description,
            type: 'video.episode',
        },
    };
}

export default function PodcastEpisodePage({ params }: PageProps) {
    const episode = getEpisodeBySlug(params.slug, 'en');
    const guests = getGuestsByEpisodeSlug(params.slug, 'en');

    if (!episode) {
        notFound();
    }

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/podcasts"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to all podcasts
                    </Link>

                    {/* Episode Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
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

                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {episode.frontmatter.title}
                        </h1>

                        <p className="text-xl text-muted-foreground mb-6">
                            {episode.frontmatter.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {episode.frontmatter.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-sm px-4 py-2 bg-secondary rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Video Player */}
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-12">
                        <iframe
                            src={episode.frontmatter.embedUrl}
                            title={episode.frontmatter.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>

                    {/* Episode Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <MDXRemote source={episode.content} />
                    </div>

                    {/* Guest Info */}
                    {guests.length > 0 && (
                        <div className="mt-12 p-6 bg-secondary rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">
                                Guest{guests.length > 1 ? 's' : ''}
                            </h3>
                            <div className="space-y-3">
                                {guests.map((guest) => (
                                    <Link
                                        key={guest.slug}
                                        href={`/guests/${guest.slug}`}
                                        className="flex items-center gap-3 p-3 border rounded-lg hover:bg-primary/10 transition-colors"
                                    >
                                        <img
                                            src={guest.frontmatter.photo}
                                            alt={guest.frontmatter.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold hover:text-primary transition-colors">
                                                {guest.frontmatter.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                @{guest.frontmatter.handle}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
