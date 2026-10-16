import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const guestsInformation = {
  en: [
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
  ],
  ar: [
    {
      "name": "دانيال لينتون",
      "topic": "توحيد أطر التعلم الآلي (Ivy)",
      "bio": "دانيال هو مؤسس Ivy، إطار عمل لتوحيد أدوات التعلم الآلي.",
      "company": "Ivy"
    },
    {
      "name": "براين دوغلاس (bdougie)",
      "topic": "كيف تستفيد إلى أقصى حد من المصادر المفتوحة؟",
      "bio": "براين هو مؤسس OpenSauced ورئيسها التنفيذي.",
      "company": "Open Sauced"
    },
    {
      "name": "ميغان كاتشانوفسكي",
      "topic": "الأمن السيبراني",
      "bio": "ميغان متخصصة في الأمن السيبراني.",
      "company": "CLEAR (clearme.com)"
    },
    {
      "name": "بو بيرسيفال",
      "topic": "اليونيسف والمصادر المفتوحة",
      "bio": "يشارك بو بفاعلية في مبادرات المصادر المفتوحة مع التركيز على توظيف التقنية لخدمة رسالة اليونيسف.",
      "company": "UNICEF"
    },
    {
      "name": "سينثيا لو",
      "topic": "التقنية والقطاع الاجتماعي",
      "bio": "تعمل سينثيا مع فريق الأثر الاجتماعي في GitHub على سدّ الفجوة بين التقنية والقطاع الاجتماعي وإحداث تغيير إيجابي.",
      "company": "GitHub"
    },
    {
      "name": "بيديهو مندر",
      "topic": "الويب 3",
      "bio": "بيديهو هو مؤسس Jsgenesis، شركة تعمل في مجال الويب 3 وتستكشف مستقبل الإنترنت اللامركزي.",
      "company": "Jsgenesis"
    },
    {
      "name": "مارك جاكسون",
      "topic": "الحوسبة الكمومية",
      "bio": "مارك مُبشّر بالحوسبة الكمومية في Quantinuum، ويساهم في التقدم في هذا المجال المتطور.",
      "company": "Quantinuum"
    },
    {
      "name": "البروفيسور جاي ماكليلاند",
      "topic": "الدماغ والحوسبة",
      "bio": "البروفيسور جاي ماكليلاند خبير بارز في تقاطع علم الأعصاب والحوسبة، ويقدّم رؤى فريدة حول الحوسبة المستوحاة من الدماغ.",
      "company": "Stanford University"
    },
    {
      "name": "سارة كروس",
      "topic": "التقنية للجميع",
      "bio": "تحدثت سارة عن رحلتها في العمل التقني وكيف أن التقنية ليست حكرًا على المبرمجين.",
      "company": "Microsoft"
    },
    {
      "name": "إليز هولويد",
      "topic": "مجتمعات المطورين",
      "bio": "إليز شغوفة ببناء مجتمعات مطورين قوية وشاملة، تعزز التعاون وتبادل المعرفة.",
      "company": "GitHub"
    },
    {
      "name": "خوان با فلوريس",
      "topic": "المجتمعات المستقلة",
      "bio": "يستكشف خوان با فلوريس مفهوم المجتمعات المستقلة ودورها في تشكيل المستقبل.",
      "company": "GitHub"
    }
  ],
};

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

const TestimonialsCard = (name: string, company: string, topic: string, information: string, index: number, topicLabel: string) => {
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
        <div className={`p-3 w-14 h-14 min-w-[3.5rem] me-4 ${colorClass} rounded-full text-white flex items-center justify-center text-xl font-bold shadow-md`}>
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
            {topicLabel}: {topic}
          </p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {information}
      </p>
    </div>
  );
};

const Testimonials = ({ locale = "en" }: { locale?: "en" | "ar" }) => {
  const t = copy[locale];
  const guests = guestsInformation[locale];
  // Show only first 6 guests on home page
  const featuredGuests = guests.slice(0, 6);

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
          featuredGuests.map((guest, index) => (
            <React.Fragment key={guest.name}>
              {TestimonialsCard(guest.name, guest.company, guest.topic, guest.bio, index, t.topic)}
            </React.Fragment>
          ))
        }
      </div>

      {/* View All Link */}
      {guests.length > 6 && (
        <div className="text-center mt-10">
          <Link
            href={`${t.base}/about`}
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold group"
          >
            {t.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Testimonials;