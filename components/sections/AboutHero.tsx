import { Button } from "../ui/button";
import "./sections.css"
import React from "react";

const copy = {
  en: {
    titleStart: "Futuristic ",
    titleHighlight: "podcast",
    titleEnd: " with technology leaders",
    description: "Fireside tech podcast with technology leaders. This podcast hosts people to talk about their experience, most valuable work for them and their vision",
    cta: "Episodes",
    episodes: "Episodes",
    guests: "Guests",
    listeners: "Listeners",
  },
  ar: {
    titleStart: "",
    titleHighlight: "بودكاست",
    titleEnd: " المستقبل مع قادة التقنية",
    description: "بودكاست تقني بأجواء حوارية هادئة مع قادة التقنية، يستضيف أشخاصًا ليتحدثوا عن تجاربهم وأهم أعمالهم ورؤيتهم للمستقبل",
    cta: "الحلقات",
    episodes: "حلقة",
    guests: "ضيف",
    listeners: "مستمع",
  },
};

const AboutHero = ({ locale = "en" }: { locale?: "en" | "ar" }) => {
  const t = copy[locale];
  return (
    <section className="container home__container md:h-[750px]">
      <div className="Image1 relative rounded-3xl overflow-hidden">
        <div className="banner-video-overlay"></div>
      </div>
      <div className="Text1 rounded-3xl overflow-hidden py-10 flex flex-col gap-6">
        <h1 className="text-5xl font-medium">{t.titleStart}<span className="bg-gradient-to-b from-primary to-primary/50 bg-clip-text text-transparent font-bold">{t.titleHighlight}</span>{t.titleEnd}</h1>
        <p className="text-xl">{t.description}</p>
        <div className="flex gap-2">
          <Button>{t.cta}</Button>
        </div>
      </div>
      <div className="Box1 bg-blue-300  rounded-3xl overflow-hidden">
        <div className="flex items-center justify-center gap-4 w-full h-full bg-primary/10 backdrop-blur-md">
          <div className="bg-background/50 backdrop-blur-md py-4 px-6 rounded-xl">
            <h1 className="font-bold text-4xl">
              60+
            </h1>
            <span className=" text-2xl">{t.episodes}</span>
          </div>
          <div className="bg-background/50 backdrop-blur-md py-4 px-6 rounded-xl">
            <h1 className="font-bold text-4xl">
              50+
            </h1>
            <span className=" text-2xl">{t.guests}</span>
          </div>
          <div className="bg-background/50 backdrop-blur-md py-4 px-6 rounded-xl">
            <h1 className="font-bold text-4xl">
              10K+
            </h1>
            <span className=" text-2xl">{t.listeners}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
