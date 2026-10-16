import { getGuestBySlug, getAllGuests, getEpisodesForGuest } from '@/lib/guests';
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
    const guests = getAllGuests('en');
    return guests.map((guest) => ({
        slug: guest.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const guest = getGuestBySlug(params.slug, 'en');

    if (!guest) {
        return {
            title: 'Guest Not Found',
        };
    }

    return {
        title: `${guest.frontmatter.name} | Hadith Tech`,
        description: guest.frontmatter.shortBio,
        openGraph: {
            title: guest.frontmatter.name,
            description: guest.frontmatter.shortBio,
            type: 'profile',
        },
    };
}

export default function GuestDetailPage({ params }: PageProps) {
    const guest = getGuestBySlug(params.slug, 'en');
    const episodes = getEpisodesForGuest(params.slug, 'en');

    if (!guest) {
        notFound();
    }

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/guests"
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
                        Back to all guests
                    </Link>

                    {/* Guest Header */}
                    <div className="mb-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                            {/* Photo */}
                            <div className="w-full md:w-48 flex-shrink-0">
                                <img
                                    src={guest.frontmatter.photo}
                                    alt={guest.frontmatter.name}
                                    className="w-full h-auto rounded-lg object-cover aspect-square"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                    {guest.frontmatter.name}
                                </h1>
                                <p className="text-lg text-muted-foreground mb-4">
                                    @{guest.frontmatter.handle}
                                </p>

                                <p className="text-lg mb-6">
                                    {guest.frontmatter.shortBio}
                                </p>

                                {/* Social Links */}
                                {guest.frontmatter.socialLinks && (
                                    <div className="flex gap-4">
                                        {guest.frontmatter.socialLinks.twitter && (
                                            <a
                                                href={guest.frontmatter.socialLinks.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-secondary transition-colors"
                                            >
                                                <span>Twitter</span>
                                            </a>
                                        )}
                                        {guest.frontmatter.socialLinks.linkedin && (
                                            <a
                                                href={guest.frontmatter.socialLinks.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-secondary transition-colors"
                                            >
                                                <span>LinkedIn</span>
                                            </a>
                                        )}
                                        {guest.frontmatter.socialLinks.github && (
                                            <a
                                                href={guest.frontmatter.socialLinks.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-secondary transition-colors"
                                            >
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                        {guest.frontmatter.socialLinks.website && (
                                            <a
                                                href={guest.frontmatter.socialLinks.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-secondary transition-colors"
                                            >
                                                <span>Website</span>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Full Bio */}
                        <div className="prose prose-lg dark:prose-invert max-w-none mb-8 py-8 border-t border-b">
                            <MDXRemote source={guest.content} />
                        </div>
                    </div>

                    {/* Episodes Section */}
                    {episodes.length > 0 && (
                        <div>
                            <h2 className="text-3xl font-bold mb-8">
                                Featured Episodes ({episodes.length})
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {episodes.map((episode) => (
                                    <Link
                                        key={episode.slug}
                                        href={`/podcasts/${episode.slug}`}
                                        className="group block"
                                    >
                                        <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                                            {/* Video Thumbnail */}
                                            <div className="aspect-video bg-muted relative overflow-hidden">
                                                <iframe
                                                    src={episode.frontmatter.embedUrl}
                                                    title={episode.frontmatter.title}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="w-full h-full pointer-events-none"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-4 flex-1 flex flex-col">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-sm text-muted-foreground">
                                                        {new Date(episode.frontmatter.publishedAt).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric',
                                                        })}
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">•</span>
                                                    <span className="text-sm text-muted-foreground">
                                                        {episode.frontmatter.duration}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                    {episode.frontmatter.title}
                                                </h3>

                                                <p className="text-sm text-muted-foreground flex-1 line-clamp-2">
                                                    {episode.frontmatter.description}
                                                </p>
                                            </div>
                                        </article>
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
