import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const guestsInformation = [
  {
    "name": "Daniel Lenton",
    "topic": "Machine Learning Unified (Ivy)",
    "bio": "Daniel is the founder of Ivy a machine learning unfication framework.",
    "company": "Ivy"
  },
  {
    "name": "Brian Douglas (bdougie)",
    "topic": "How to Maximize Your Open Source Benefits?",
    "bio": "Brian is the founder and CEO of OpenSauced.",
    "company": "Open Sauced"
  },
  {
    "name": "Megan Kaczanowski",
    "topic": "Cybersecurity",
    "bio": "Megan is a cybersecurity professional.",
    "company": "CLEAR (clearme.com)"
  },
  {
    "name": "Bo Percival",
    "topic": "UNICEF and Open Source",
    "bio": "Bo is actively involved in open-source initiatives with a focus on leveraging technology for UNICEF's mission.",
    "company": "UNICEF"
  },
  {
    "name": "Cynthia Lo",
    "topic": "Tech and Social Sector",
    "bio": "Cynthia is working with GitHub Social Impact team in bridging the gap between technology and the social sector, driving positive change.",
    "company": "GitHub"
  },
  {
    "name": "Bedeho Mender",
    "topic": "Web 3",
    "bio": "Bedeho is the founder of Jsgenesis a company in the Web 3 space, exploring the decentralized future of the internet.",
    "company": "Jsgenesis"
  },
  {
    "name": "Mark Jackson",
    "topic": "Quantum Computing",
    "bio": "Mark is a quantum computing evangelist at Quantinuum, contributing to advancements in this cutting-edge field.",
    "company": "Quantinuum"
  },
  {
    "name": "Prof. Jay McClelland",
    "topic": "Brains and Computing",
    "bio": "Prof. Jay McClelland is a renowned expert in the intersection of neuroscience and computing, providing unique perspectives on brain-inspired computing.",
    "company": "Stanford University"
  },
  {
    "name": "Sara Cross",
    "topic": "Tech For All",
    "bio": "Sara dicsuesed her journey in working in tech and how tech is not only for programmers.",
    "company": "Microsoft"
  },
  {
    "name": "Elise Hollowed",
    "topic": "Developer Communities",
    "bio": "Elise is passionate about fostering strong and inclusive developer communities, driving collaboration and knowledge-sharing.",
    "company": "GitHub"
  },
  {
    "name": "Juan Pa Flores",
    "topic": "Autonomous Communities",
    "bio": "Juan Pa Flores explores the concept of autonomous communities and their role in shaping the future.",
    "company": "GitHub"
  }
];

const TestimonialsCard = (name: string, company: string, topic: string, information: string, index: number) => {
  // Generate consistent colors for avatars
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-indigo-500',
  ];
  const colorClass = colors[index % colors.length];

  return (
    <div className="rounded-2xl border duration-300 hover:shadow-lg hover:-translate-y-1 transition-all p-6 bg-background/50 backdrop-blur">
      <div className="flex flex-row items-start mb-4">
        <div className={`p-3 w-14 h-14 min-w-[3.5rem] mr-4 ${colorClass} rounded-full text-white flex items-center justify-center text-xl font-bold shadow-md`}>
          {name[0]}
        </div>
        <div className="flex flex-col gap-0">
          <h1 className="text-xl font-bold">
            {name}
          </h1>
          <h3 className="text-primary font-semibold text-sm">
            {company}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 font-medium">
            Topic: {topic}
          </p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {information}
      </p>
    </div>
  );
};

const Testimonials = () => {
  // Show only first 6 guests on home page
  const featuredGuests = guestsInformation.slice(0, 6);

  return (
    <section className="container py-20">
      <div className="flex flex-col gap-3 mb-10 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">
          Featured <span className="text-primary">Guests</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Industry leaders, innovators, and experts sharing their insights on technology and innovation
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
        {
          featuredGuests.map((guest, index) => (
            <React.Fragment key={guest.name}>
              {TestimonialsCard(guest.name, guest.company, guest.topic, guest.bio, index)}
            </React.Fragment>
          ))
        }
      </div>

      {/* View All Link */}
      {guestsInformation.length > 6 && (
        <div className="text-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold group"
          >
            View All Guests
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Testimonials;