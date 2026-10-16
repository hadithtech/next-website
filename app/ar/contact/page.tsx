import { notFound } from "next/navigation";
import ContactWidget from "@/components/ContactWidget";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا | حديث التقنية",
  description: "تواصل مع حديث التقنية. شاركنا أفكارك، واقترح مواضيع، أو رشّح ضيوفًا لبودكاستنا التقني.",
  openGraph: {
    title: "تواصل معنا | حديث التقنية",
    description: "تواصل معنا لمشاركة أفكارك وملاحظاتك.",
  },
};

const page = () => {
  // Contact page is hidden for now; remove this line to re-enable it.
  notFound();

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-0 mb-6">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">تواصل معنا</h1>
        <p className="opacity-50 font-light lg:text-lg md:text-base text-sm">يسعدنا أن نسمع منك</p>
      </div>
      <ContactWidget locale="ar" />
    </div>
  );
};

export default page;
