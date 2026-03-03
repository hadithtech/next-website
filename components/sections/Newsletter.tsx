import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Mail, Youtube, Music } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <Mail className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-4xl font-bold mb-4">Never Miss an Episode</h2>

                    <p className="text-lg text-muted-foreground mb-8">
                        Subscribe to Hadith Tech on your favorite platform and stay updated with our latest conversations
                    </p>

                    {/* Platform Links */}
                    <div className="flex flex-wrap gap-4 justify-center mb-8">
                        <Link
                            href="https://podcasters.spotify.com/pod/show/hadith-tech-en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
                        >
                            <Music className="w-5 h-5" />
                            Spotify
                        </Link>
                        <Link
                            href="https://www.youtube.com/playlist?list=PL5RA-ZnFo9FOVRgVVlBPTkXa1-mWyun-f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
                        >
                            <Youtube className="w-5 h-5" />
                            YouTube
                        </Link>
                    </div>

                    <Link
                        href="/subscribe"
                        className={cn(buttonVariants({ size: "lg" }))}
                    >
                        View All Platforms
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
