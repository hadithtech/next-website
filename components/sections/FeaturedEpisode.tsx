import React from 'react';
import { getFeaturedEpisodes } from '@/lib/episodes';
import Link from 'next/link';
import { Play, Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const FeaturedEpisode = () => {
    const featuredEpisodes = getFeaturedEpisodes('en', 1);

    if (featuredEpisodes.length === 0) {
        return null;
    }

    const episode = featuredEpisodes[0];

    return (
        <section className="py-20">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8">
                        <span className="text-primary text-sm font-semibold uppercase tracking-wide">Featured Episode</span>
                        <h2 className="text-4xl font-bold mt-2 mb-4">Latest Conversation</h2>
                        <p className="text-muted-foreground text-lg">
                            Don't miss our most recent episode featuring industry insights and expert perspectives
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center bg-secondary/30 rounded-2xl overflow-hidden border hover:shadow-xl transition-all">
                        {/* Video Embed */}
                        <div className="aspect-video bg-muted relative">
                            <iframe
                                src={episode.frontmatter.embedUrl}
                                title={episode.frontmatter.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>

                        {/* Episode Details */}
                        <div className="p-8 md:p-6">
                            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    <span>{episode.frontmatter.guest}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{episode.frontmatter.duration}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 line-clamp-2">
                                {episode.frontmatter.title}
                            </h3>

                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                {episode.frontmatter.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {episode.frontmatter.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={`/podcasts/${episode.slug}`}
                                className={cn(buttonVariants(), "gap-2")}
                            >
                                <Play className="w-4 h-4" />
                                Watch Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedEpisode;
