import { MetadataRoute } from 'next'
import { getAllEpisodes } from '@/lib/episodes'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hadithtech.com'

    // Get all episodes for both locales
    const episodesEn = getAllEpisodes('en')
    const episodesAr = getAllEpisodes('ar')

    // Static English pages
    const staticPagesEn = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/podcasts`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/subscribe`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/podcasts/coming-soon`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
    ]

    // Static Arabic pages
    const staticPagesAr = [
        {
            url: `${baseUrl}/ar`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ar/subscribe`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/ar/podcasts`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ar/podcasts/coming-soon`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
    ]

    // Episode pages (English)
    const episodePagesEn = episodesEn.map((episode) => ({
        url: `${baseUrl}/podcasts/${episode.slug}`,
        lastModified: new Date(episode.frontmatter.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Episode pages (Arabic)
    const episodePagesAr = episodesAr.map((episode) => ({
        url: `${baseUrl}/ar/podcasts/${episode.slug}`,
        lastModified: new Date(episode.frontmatter.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        ...staticPagesEn,
        ...staticPagesAr,
        ...episodePagesEn,
        ...episodePagesAr,
    ]
}
