import Link from 'next/link'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'اشترك | حديث التقنية',
  description: 'اشترك في بودكاست حديث التقنية على سبوتيفاي ويوتيوب. متوفر باللغتين العربية والإنجليزية. ابقَ على اطلاع بأحدث الحوارات التقنية.',
  openGraph: {
    title: 'اشترك | حديث التقنية',
    description: 'اشترك على سبوتيفاي ويوتيوب باللغة العربية أو الإنجليزية.',
  },
};

const page = () => {
  return (
    <div className='container min-h-[calc(100vh-88px-88px-16px)] flex flex-col gap-5 items-center justify-center'>
      <Link href="https://anchor.fm/hadith-tech" className='bg-accent inline-flex items-center justify-center rounded-3xl h-12 w-52 hover:bg-background duration-300 mx-auto cursor-pointer'>
        سبوتيفاي (بالعربية)
      </Link>
      <Link href="https://www.youtube.com/playlist?list=PL5RA-ZnFo9FPndQ-DQckXrEmY4y1eaoS-" className='bg-accent inline-flex items-center justify-center rounded-3xl h-12 w-52 hover:bg-background duration-300 mx-auto cursor-pointer'>
        يوتيوب (بالعربية)
      </Link>
      <Link href="https://podcasters.spotify.com/pod/show/hadith-tech-en" className='bg-accent inline-flex items-center justify-center rounded-3xl h-12 w-52 hover:bg-background duration-300 mx-auto cursor-pointer'>
        سبوتيفاي (بالإنجليزية)
      </Link>
      <Link href="https://www.youtube.com/playlist?list=PL5RA-ZnFo9FOVRgVVlBPTkXa1-mWyun-f" className='bg-accent inline-flex items-center justify-center rounded-3xl h-12 w-52 hover:bg-background duration-300 mx-auto cursor-pointer'>
        يوتيوب (بالإنجليزية)
      </Link>
    </div>
  )
}

export default page
