import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface EpisodeFrontmatter {
    id: number;
    title: string;
    guest: string;
    guestHandle: string;
    description: string;
    publishedAt: string;
    videoId: string;
    embedUrl: string;
    duration: string;
    tags: string[];
    featured?: boolean;
}

export interface Episode {
    slug: string;
    frontmatter: EpisodeFrontmatter;
    content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'episodes');

/**
 * Get all episode slugs for a specific locale
 */
export function getEpisodeSlugs(locale: string = 'en'): string[] {
    const episodesDir = path.join(CONTENT_DIR, locale);

    if (!fs.existsSync(episodesDir)) {
        return [];
    }

    return fs
        .readdirSync(episodesDir)
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace(/\.mdx$/, ''));
}

/**
 * Get episode by slug for a specific locale
 */
export function getEpisodeBySlug(slug: string, locale: string = 'en'): Episode | null {
    try {
        const episodePath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);

        if (!fs.existsSync(episodePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(episodePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: data as EpisodeFrontmatter,
            content,
        };
    } catch (error) {
        console.error(`Error loading episode ${slug}:`, error);
        return null;
    }
}

/**
 * Get all episodes for a specific locale
 */
export function getAllEpisodes(locale: string = 'en'): Episode[] {
    const slugs = getEpisodeSlugs(locale);

    const episodes = slugs
        .map(slug => getEpisodeBySlug(slug, locale))
        .filter((episode): episode is Episode => episode !== null)
        .sort((a, b) => {
            // Sort by published date, newest first
            return new Date(b.frontmatter.publishedAt).getTime() -
                new Date(a.frontmatter.publishedAt).getTime();
        });

    return episodes;
}

/**
 * Get featured episodes for a specific locale
 */
export function getFeaturedEpisodes(locale: string = 'en', limit?: number): Episode[] {
    const allEpisodes = getAllEpisodes(locale);
    const featured = allEpisodes.filter(episode => episode.frontmatter.featured);

    return limit ? featured.slice(0, limit) : featured;
}

/**
 * Get recent episodes for a specific locale
 */
export function getRecentEpisodes(locale: string = 'en', limit: number = 4): Episode[] {
    const allEpisodes = getAllEpisodes(locale);
    return allEpisodes.slice(0, limit);
}
