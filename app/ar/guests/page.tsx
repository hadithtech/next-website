import { getAllGuests } from '@/lib/guests';
import Link from 'next/link';
import type { Metadata } from 'next';
import GuestPhoto from '@/components/GuestPhoto';

export const metadata: Metadata = {
    title: 'الضيوف | حديث التقنية',
    description: 'تعرف على ضيوفنا الرائعين - خبراء الصناعة والمطورين وقادة الفكر الذين شاركوا رؤاهم وخبراتهم في بودكاست حديث التقنية.',
    openGraph: {
        title: 'الضيوف | حديث التقنية',
        description: 'تعرف على ضيوفنا الرائعين - خبراء الصناعة وقادة الفكر.',
    },
};

export default function GuestsPageAr() {
    const guests = getAllGuests('ar');

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            ضيوفنا
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            تعرف على العقول الرائعة التي شاركت خبرتها ورؤاها مع حديث التقنية
                        </p>
                    </div>

                    {/* Guests Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {guests.map((guest) => (
                            <Link
                                key={guest.slug}
                                href={`/ar/guests/${guest.slug}`}
                                className="group"
                            >
                                <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                                    {/* Guest Photo */}
                                    <div className="aspect-square bg-muted overflow-hidden">
                                        <GuestPhoto guest={guest} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                                            {guest.frontmatter.name}
                                        </h2>
                                        {guest.frontmatter.handle && (
                                            <p className="text-sm text-muted-foreground mb-3">
                                                @{guest.frontmatter.handle}
                                            </p>
                                        )}

                                        <p className="text-muted-foreground text-sm flex-1 line-clamp-3 mb-4">
                                            {guest.frontmatter.shortBio}
                                        </p>

                                        {/* Episode Count */}
                                        <div className="text-xs text-muted-foreground pt-4 border-t">
                                            {guest.frontmatter.episodeSlugs.length} حلقة
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Empty State */}
                    {guests.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">لا توجد ضيوف.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
