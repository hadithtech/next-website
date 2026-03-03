import AboutHero from '@/components/sections/AboutHero'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Hadith Tech',
  description: 'Learn about Hadith Tech, a technology podcast bringing insightful conversations with industry leaders, developers, and innovators. Discover our mission and what we cover.',
  openGraph: {
    title: 'About Us | Hadith Tech',
    description: 'Learn about our mission to bring insightful tech conversations.',
  },
};

const page = () => {
  return (
    <div className='min-h-[calc(100vh-88px-88px-16px)] flex items-center justify-center'>
      <AboutHero />
    </div>
  )
}

export default page