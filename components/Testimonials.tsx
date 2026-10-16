import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GuestPhoto from "@/components/GuestPhoto";
import { getEpisodesForGuest, getGuestBySlug, type Guest } from "@/lib/guests";

// Guest slugs (content/guests/<locale>/<slug>.mdx) shown on the home page, in order
const FEATURED_GUEST_SLUGS = [
  "fares-mosaad",
  "brian-douglas",
  "ayah-bdeir",
  "abubakar-abid",
  "fawzi-mesmar",
  "nick-taylor",
];

const copy = {
  en: {
    titleStart: "Featured ",
    titleHighlight: "Guests",
    subtitle: "Industry leaders, innovators, and experts sharing their insights on technology and innovation",
    topic: "Topic",
    cta: "View All Guests",
    base: "",
  },
  ar: {
    titleStart: "ضيوف ",
    titleHighlight: "مميزون",
    subtitle: "قادة ومبتكرون وخبراء يشاركون رؤاهم حول التقنية والابتكار",
    topic: "الموضوع",
    cta: "عرض جميع الضيوف",
    base: "/ar",
  },
};

const TestimonialsCard = (guest: Guest, base: string, topicLabel: string, topic?: string) => {
  const { name, handle, shortBio } = guest.frontmatter;

  return (
    <Link
      href={`${base}/guests/${guest.slug}`}
      className="rounded-2xl border duration-300 hover:shadow-lg hover:-translate-y-1 transition-all p-6 bg-background/50 backdrop-blur"
    >
      <div className="flex flex-row items-start mb-4">
        <GuestPhoto guest={guest} className="w-14 h-14 min-w-[3.5rem] me-4 rounded-full object-cover shadow-md" />
        <div className="flex flex-col gap-0">
          <h1 className="text-xl font-bold">
            {name}
          </h1>
          {handle && (
            <h3 className="text-primary font-semibold text-sm">
              @{handle}
            </h3>
          )}
          {topic && (
            <p className="text-xs text-muted-foreground mt-1 font-medium">
              {topicLabel}: {topic}
            </p>
          )}
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {shortBio}
      </p>
    </Link>
  );
};

const Testimonials = ({ locale = "en" }: { locale?: "en" | "ar" }) => {
  const t = copy[locale];
  const featuredGuests = FEATURED_GUEST_SLUGS
    .map((slug) => getGuestBySlug(slug, locale))
    .filter((guest): guest is Guest => guest !== null);

  return (
    <section className="container py-20">
      <div className="flex flex-col gap-3 mb-10 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">
          {t.titleStart}<span className="text-primary">{t.titleHighlight}</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
        {
          featuredGuests.map((guest) => (
            <React.Fragment key={guest.slug}>
              {TestimonialsCard(guest, t.base, t.topic, getEpisodesForGuest(guest.slug, locale).at(-1)?.frontmatter.title)}
            </React.Fragment>
          ))
        }
      </div>

      {/* View All Link */}
      <div className="text-center mt-10">
        <Link
          href={`${t.base}/guests`}
          className="inline-flex items-center gap-2 text-primary hover:underline font-semibold group"
        >
          {t.cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
