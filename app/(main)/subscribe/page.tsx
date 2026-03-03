import Link from 'next/link'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subscribe | Hadith Tech',
  description: 'Subscribe to Hadith Tech podcast on Spotify and YouTube. Available in both English and Arabic. Stay updated with the latest tech conversations.',
  openGraph: {
    title: 'Subscribe | Hadith Tech',
    description: 'Subscribe on Spotify and YouTube in English or Arabic.',
  },
};

const page = () => {
  return (
    <div className='container min-h-[calc(100vh-88px-88px-16px)] flex flex-col gap-5 items-center justify-center'>
      <Link href="https://podcasters.spotify.com/pod/show/hadith-tech-en" className='bg-accent inline-flex items-center justify-center rounded-3xl h-12 w-52 hover:bg-background duration-300 mx-auto cursor-pointer'>
        Spotify (English)
      </Link>
      <Link href="https://anchor.fm/hadith-tech" className='bg-accent inline-flex items-center justify-center rounded-3xl h-12 w-52 hover:bg-background duration-300 mx-auto cursor-pointer'>
        Spotify (Arabic)
      </Link>
      <Link href="https://www.youtube.com/playlist?list=PL5RA-ZnFo9FOVRgVVlBPTkXa1-mWyun-f" className='bg-accent inline-flex items-center justify-center rounded-3xl h-12 w-52 hover:bg-background duration-300 mx-auto cursor-pointer'>
        Youtube (English)
      </Link>
      <Link href="https://www.youtube.com/playlist?list=PL5RA-ZnFo9FPndQ-DQckXrEmY4y1eaoS-" className='bg-accent inline-flex items-center justify-center rounded-3xl h-12 w-52 hover:bg-background duration-300 mx-auto cursor-pointer'>
        Youtube (Arabic)
      </Link>
    </div>
  )
}

export default page