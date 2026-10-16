import React from "react";
import { getRecentEpisodes } from "@/lib/episodes";
import { getGuestsByEpisodeSlug } from "@/lib/guests";
import { ArrowRight, User, Clock } from "lucide-react";
import Link from "next/link";

const Episodes = () => {
  const episodes = getRecentEpisodes('en', 4);
  const episodeGuests = episodes.map(episode => ({
    ...episode,
    guests: getGuestsByEpisodeSlug(episode.slug, 'en')
  }));

  return (
    <div className="container py-20 bg-secondary/10">
      <div className="text-center flex flex-col items-center justify-center gap-3 mb-12">
        <h2 className="text-4xl font-bold">Latest Podcast Episodes</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Discover our latest conversations with technology leaders and innovators
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 md:max-w-[1000px] max-w-[450px] mx-auto my-8">
        {episodeGuests.map((episode) => (
          <div
            className="border p-5 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 group bg-background"
            key={episode.slug}
          >
            <div className="flex mb-3 items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <User className="inline text-muted-foreground" size={18} />
                {episode.guests.length > 0 ? (
                  <Link
                    href={`/guests/${episode.guests[0].slug}`}
                    className="inline text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {episode.guests[0].frontmatter.name}
                  </Link>
                ) : (
                  <p className="inline text-muted-foreground text-sm">{episode.frontmatter.guest}</p>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="inline text-muted-foreground" size={16} />
                <p className="inline text-muted-foreground text-sm">{episode.frontmatter.duration}</p>
              </div>
            </div>
            <Link
              href={`/podcasts/${episode.slug}`}
              className="block group/episode"
            >
              {/* embed YouTube */}
              <iframe
                className="w-full h-56 object-cover rounded-xl bg-primary pointer-events-none"
                src={episode.frontmatter.embedUrl}
                title={episode.frontmatter.title}
                allowFullScreen
              />
              <h3 className="mt-4 font-bold text-lg group-hover/episode:text-primary transition-colors line-clamp-2">
                {episode.frontmatter.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {episode.frontmatter.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/podcasts" className="inline-flex items-center justify-center group gap-2 text-primary underline font-semibold hover:gap-3 transition-all">
          Explore All Podcasts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Episodes;
