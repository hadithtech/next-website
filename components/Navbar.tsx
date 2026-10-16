"use client";

import { Menu, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useMotionValueEvent, useScroll } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');

  useMotionValueEvent(scrollY, "change", (latest) => {
    const navbar = document.querySelector("nav.navbar");
    const body = document.querySelector("body");

    if (latest >= 100) {
      navbar?.classList.add("navbar-active");
      body?.classList.add("md:mt-[88px]");
    } else {
      navbar?.classList.remove("navbar-active");
      body?.classList.remove("md:mt-[88px]");
    }
  });

  const localePrefix = isArabic ? '/ar' : '';
  const toggleLang = isArabic ? pathname?.replace('/ar', '') || '/' : `/ar${pathname}`;

  return (
    <nav className="container py-6 flex items-center justify-between rounded-b-3xl backdrop-blur z-[99999]">
      <Link
        href={localePrefix + "/"}
        className="flex items-center justify-center font-semibold text-lg"
      >
        Hadith<span className="text-primary">Tech</span>
      </Link>
      <div className="hidden md:flex gap-1 items-center justify-center">
        <Link
          href={localePrefix + "/"}
          className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-xl"
        >
          {isArabic ? 'الرئيسية' : 'Home'}
        </Link>
        <Link
          href={localePrefix + "/about"}
          className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-xl"
        >
          {isArabic ? 'من نحن' : 'About'}
        </Link>
        <Link
          href={localePrefix + "/podcasts"}
          className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-xl"
        >
          {isArabic ? 'البودكاست' : 'Podcasts'}
        </Link>
        <Link
          href={localePrefix + "/guests"}
          className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-xl"
        >
          {isArabic ? 'الضيوف' : 'Guests'}
        </Link>
      </div>
      <div className="hidden md:flex gap-2 items-center">
        <Link
          href={toggleLang}
          className="opacity-75 hover:opacity-100 hover:bg-accent p-2 rounded-full duration-500"
          title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
        >
          <Globe className="w-5 h-5" />
        </Link>
        <Link
          className={cn(buttonVariants())}
          href={localePrefix + "/subscribe"}
        >
          {isArabic ? 'اشترك' : 'Subscribe'}
        </Link>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="bg-primary p-2 rounded-3xl text-background md:hidden hover:rounded-2xl duration-300">
          <Menu />
        </DialogTrigger>
        <DialogContent className="max-w-[250px] rounded-3xl shadow-none">
          <DialogHeader>
            <DialogTitle className="text-start">{isArabic ? 'الصفحات والروابط' : 'Pages & Links'}</DialogTitle>
            <DialogDescription className="pt-2 flex flex-col gap-1">
              <Link
                href={localePrefix + "/"}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-center"
                )}
              >
                {isArabic ? 'الرئيسية' : 'Home'}
              </Link>
              <Link
                href={localePrefix + "/about"}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-center"
                )}
              >
                {isArabic ? 'من نحن' : 'About'}
              </Link>
              <Link
                href={localePrefix + "/podcasts"}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-center"
                )}
              >
                {isArabic ? 'البودكاست' : 'Podcasts'}
              </Link>
              <Link
                href={localePrefix + "/guests"}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-center"
                )}
              >
                {isArabic ? 'الضيوف' : 'Guests'}
              </Link>
              <Link
                href={toggleLang}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-center gap-2"
                )}
              >
                <Globe className="w-4 h-4" />
                {isArabic ? 'English' : 'العربية'}
              </Link>
              <Link
                href={localePrefix + "/subscribe"}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full flex items-center justify-center"
                )}
              >
                {isArabic ? 'اشترك' : 'Subscribe'}
              </Link>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
