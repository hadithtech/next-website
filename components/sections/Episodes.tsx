import React from "react";
import { getRecentEpisodes } from "@/lib/episodes";
import { ArrowRight, User, Clock } from "lucide-react";
import Link from "next/link";

const Episodes = () => {
  const episodes = getRecentEpisodes('en', 4);

  return (
    <div className="container relative">
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-extrabold">Latest Podcast Episodes</h1>
        <p className="lg:text-lg opacity-50 max-w-2xl">
          Discover our latest conversations with technology leaders and innovators
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 md:max-w-[1000px] max-w-[450px] mx-auto my-8">
        {episodes.map((episode) => (
          <Link 
            href={`/podcasts/${episode.slug}`}
            className="border p-5 rounded-3xl hover:shadow-lg transition-shadow group" 
            key={episode.slug}
          >
            <div className="flex mb-3 items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <User className="inline text-muted-foreground" size={18}/>
                <p className="inline text-muted-foreground text-sm">{episode.frontmatter.guest}</p>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="inline text-muted-foreground" size={16}/>
                <p className="inline text-muted-foreground text-sm">{episode.frontmatter.duration}</p>
              </div>
            </div>
            {/* embed YouTube */}
            <iframe
              className="w-full h-56 object-cover rounded-2xl bg-primary pointer-events-none"
              src={episode.frontmatter.embedUrl}
              title={episode.frontmatter.title}
              allowFullScreen
            />
            <h3 className="mt-3 font-semibold group-hover:text-primary transition-colors line-clamp-2">
              {episode.frontmatter.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {episode.frontmatter.description}
            </p>
          </Link>
        ))}
      </div>
      <div className="bg-gradient-to-t from-background to-transparent absolute bottom-8 left-1/2 -translate-x-1/2 pt-16 w-full">
        <Link href="/podcasts" className="flex items-center justify-center group gap-1 text-primary underline relative top-6">
          Explore All Podcasts <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
        </Link>
      </div>
    </div>
  );
};

export default Episodes;
