import ContactWidget from "@/components/ContactWidget";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hadith Tech",
  description: "Get in touch with Hadith Tech. Share your thoughts, suggest topics, or recommend guests for our technology podcast.",
  openGraph: {
    title: "Contact Us | Hadith Tech",
    description: "Get in touch with us to share ideas and feedback.",
  },
};

const page = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-0 mb-6">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">Get in Touch</h1>
        <p className="opacity-50 font-light lg:text-lg md:text-base text-sm">We'd love to hear from you</p>
      </div>
      <ContactWidget />
    </div>
  );
};

export default page;
