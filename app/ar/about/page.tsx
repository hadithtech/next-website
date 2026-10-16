import AboutHero from '@/components/sections/AboutHero'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'من نحن | حديث التقنية',
  description: 'تعرّف على حديث التقنية، بودكاست تقني يقدّم حوارات ثرية مع قادة الصناعة والمطورين والمبتكرين. اكتشف رسالتنا والمواضيع التي نتناولها.',
  openGraph: {
    title: 'من نحن | حديث التقنية',
    description: 'تعرّف على رسالتنا في تقديم حوارات تقنية ثرية.',
  },
};

const page = () => {
  return (
    <div className='min-h-[calc(100vh-88px-88px-16px)] flex items-center justify-center'>
      <AboutHero locale="ar" />
    </div>
  )
}

export default page
