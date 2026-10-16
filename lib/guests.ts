import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getEpisodeBySlug, getEpisodeSlugs, type Episode } from './episodes';

export interface SocialLinks {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    github?: string;
    website?: string;
}

export interface GuestFrontmatter {
    id: number;
    name: string;
    handle: string;
    shortBio: string;
    bio: string;
    photo: string;
    socialLinks?: SocialLinks;
    episodeSlugs: string[];
}

export interface Guest {
    slug: string;
    frontmatter: GuestFrontmatter;
    content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'guests');

/**
 * Get all guest slugs for a specific locale
 */
export function getGuestSlugs(locale: string = 'en'): string[] {
    const guestsDir = path.join(CONTENT_DIR, locale);

    if (!fs.existsSync(guestsDir)) {
        return [];
    }

    return fs
        .readdirSync(guestsDir)
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace(/\.mdx$/, ''));
}

/**
 * Get guest by slug for a specific locale
 */
export function getGuestBySlug(slug: string, locale: string = 'en'): Guest | null {
    try {
        const guestPath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);

        if (!fs.existsSync(guestPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(guestPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: data as GuestFrontmatter,
            content,
        };
    } catch (error) {
        console.error(`Error loading guest ${slug}:`, error);
        return null;
    }
}

/**
 * Get all guests for a specific locale
 */
export function getAllGuests(locale: string = 'en'): Guest[] {
    const slugs = getGuestSlugs(locale);

    const guests = slugs
        .map(slug => getGuestBySlug(slug, locale))
        .filter((guest): guest is Guest => guest !== null)
        .sort((a, b) => {
            // Sort by name alphabetically
            return a.frontmatter.name.localeCompare(b.frontmatter.name);
        });

    return guests;
}

/**
 * Get episodes for a specific guest by their slug
 */
export function getEpisodesForGuest(guestSlug: string, locale: string = 'en'): Episode[] {
    const guest = getGuestBySlug(guestSlug, locale);

    if (!guest) {
        return [];
    }

    const episodes = guest.frontmatter.episodeSlugs
        .map(episodeSlug => getEpisodeBySlug(episodeSlug, locale))
        .filter((episode): episode is Episode => episode !== null)
        .sort((a, b) => {
            // Sort by published date, newest first
            return new Date(b.frontmatter.publishedAt).getTime() -
                new Date(a.frontmatter.publishedAt).getTime();
        });

    return episodes;
}

/**
 * Get all guests appearing in a specific episode by episode slug
 */
export function getGuestsByEpisodeSlug(episodeSlug: string, locale: string = 'en'): Guest[] {
    const allGuests = getAllGuests(locale);

    return allGuests.filter(guest =>
        guest.frontmatter.episodeSlugs.includes(episodeSlug)
    );
}
