"use client"
import React from 'react'
import TextTransition, { presets } from 'react-text-transition';
import "./sections.css"
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

let categories = ["Technology", "AI", "Open Source"];

const Podcast__Card = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <div className={cn("bg-background/80 backdrop-blur p-4 rounded-2xl border shadow gap-2", className)}>
      {children}
    </div>
  )
}

const HomeHero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="container py-12">
      <h1 className="
        lg:text-6xl lg:max-w-4xl lg:leading-[72px]
        md:text-5xl md:max-w-[700px] md:leading-[60px]
        sm:text-4xl sm:max-w-[560px] sm:leading-[48px]
        text-3xl max-w-full leading-[40px]
        pb-6 font-bold mx-auto text-center
      ">
        Tech Conversations About
        <span className="
          font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl border-primary border-dotted sm:border-4 border-2 px-3 sm:px-5 mx-2
          rounded-full uppercase bg-primary/10 pt-1 pb-[2px] lg:px-5 lg:py-1 relative inline-block
        ">
          <TextTransition springConfig={presets.gentle} className='!inline-flex text-primary'>{categories[index % categories.length]}</TextTransition>
        </span>
      </h1>
      <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Join technology leaders and innovators discussing the future of tech, from machine learning to open source
      </p>
      <div className="flex gap-4 justify-center mb-12">
        <Link href="/podcasts" className={cn(buttonVariants({ size: "lg" }))}>
          Browse Episodes
        </Link>
        <Link href="/subscribe" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
          Subscribe Now
        </Link>
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-4 relative items-center">
        <div className="flex-1 flex flex-col sm:px-10 py-10 gap-6 md:w-auto max-w-[480px]">
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-2">
              <h1 className="font-bold text-5xl text-primary">24+</h1>
              <h2 className="font-semibold text-xl">Arabic Episodes</h2>
            </div>
            <p className="font-normal text-muted-foreground">
              Empowering the MENA region with discussions on open-source, technology, and AI.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-2">
              <h1 className="font-bold text-5xl text-primary">12+</h1>
              <h2 className="font-semibold text-xl">English Episodes</h2>
            </div>
            <p className="font-normal text-muted-foreground">
              Expert conversations covering cybersecurity, machine learning, and tech innovation.
            </p>
          </div>
        </div>
        <div className="flex-1 lg:mt-auto xl:border-b-2 border-primary relative">
          <Image width={800} height={800} alt='image' src={"/Abdulrahman.png"} className='w-auto xl:h-auto lg:h-[500px] md:max-h-none max-h-[400px] mx-auto' />
          <Podcast__Card className='relative -top-5 md:hidden flex w-[100%] bg-background/90 max-w-[400px]' >
            <div className="flex flex-col gap-1 justify-center">
              <p className='text-primary sm:text-xs text-[10px] font-semibold uppercase tracking-wide'>Host</p>
              <h1 className='font-bold sm:text-lg text-base'>Abdurrahman Rajab</h1>
              <p className='text-muted-foreground sm:text-sm text-xs'>
                Tech leader, open source advocate, and speaker at GitHub Universe
              </p>
            </div>
          </Podcast__Card>
        </div>
        <div className="xl:block hidden lg:mt-10 w-[350px]">
          <Image width={800} height={800} alt='Hadith Tech Logo' src={"/logo.png"} className='w-2/3 h-auto mx-auto' />
        </div>
      </div>
    </section>
  )
}

export default HomeHero;

