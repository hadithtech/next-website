import { getAllGuests } from '@/lib/guests';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guests | Hadith Tech',
    description: 'Meet our amazing guests - industry experts, developers, and thought leaders who have shared their insights and experiences on the Hadith Tech podcast.',
    openGraph: {
        title: 'Guests | Hadith Tech',
        description: 'Meet our amazing podcast guests - industry experts and thought leaders.',
    },
};

export default function GuestsPage() {
    const guests = getAllGuests('en');

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Our Guests
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Meet the brilliant minds who have shared their expertise and insights on Hadith Tech
                        </p>
                    </div>

                    {/* Guests Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {guests.map((guest) => (
                            <Link
                                key={guest.slug}
                                href={`/guests/${guest.slug}`}
                                className="group"
                            >
                                <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                                    {/* Guest Photo */}
                                    <div className="aspect-square bg-muted overflow-hidden">
                                        <img
                                            src={guest.frontmatter.photo}
                                            alt={guest.frontmatter.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                                            {guest.frontmatter.name}
                                        </h2>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            @{guest.frontmatter.handle}
                                        </p>

                                        <p className="text-muted-foreground text-sm flex-1 line-clamp-3 mb-4">
                                            {guest.frontmatter.shortBio}
                                        </p>

                                        {/* Episode Count */}
                                        <div className="text-xs text-muted-foreground pt-4 border-t">
                                            {guest.frontmatter.episodeSlugs.length} episode{guest.frontmatter.episodeSlugs.length !== 1 ? 's' : ''}
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Empty State */}
                    {guests.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No guests found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
