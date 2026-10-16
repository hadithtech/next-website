import React from "react";
import { getFeaturedGuests } from "@/lib/guests";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import GuestPhoto from "@/components/GuestPhoto";

const copy = {
  en: {
    title: "Our Guests",
    subtitle: "Meet the builders, researchers and maintainers who joined us on Hadith Tech",
    cta: "Meet All Guests",
    base: "",
  },
  ar: {
    title: "ضيوفنا",
    subtitle: "تعرّف على المطورين والباحثين والمشرفين على المشاريع الذين انضموا إلينا في حديث تك",
    cta: "تعرّف على جميع الضيوف",
    base: "/ar",
  },
};

const FeaturedGuests = ({ locale = "en" }: { locale?: "en" | "ar" }) => {
  const guests = getFeaturedGuests(locale, 6);
  const t = copy[locale];

  return (
    <div className="container py-20">
      <div className="text-center flex flex-col items-center justify-center gap-3 mb-12">
        <h2 className="text-4xl font-bold">{t.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">{t.subtitle}</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:max-w-[1000px] max-w-[450px] mx-auto my-8">
        {guests.map((guest) => (
          <Link
            key={guest.slug}
            href={`${t.base}/guests/${guest.slug}`}
            className="border p-5 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 group bg-background flex items-center gap-4"
          >
            <GuestPhoto guest={guest} className="w-16 h-16 rounded-full object-cover bg-muted flex-shrink-0" />
            <div className="min-w-0">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors truncate">
                {guest.frontmatter.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {guest.frontmatter.shortBio}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href={`${t.base}/guests`} className="inline-flex items-center justify-center group gap-2 text-primary underline font-semibold hover:gap-3 transition-all">
          {t.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedGuests;
