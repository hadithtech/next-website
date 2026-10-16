import Episodes from '@/components/sections/Episodes'
import Testimonials from '@/components/Testimonials'
import HomeHero from '@/components/sections/HomeHero'
import FeaturedGuests from '@/components/sections/FeaturedGuests'

export default function HomeAr() {
  return (
    <div className='min-h-[calc(100vh-88px-88px-16px)] flex items-center justify-center flex-col gap-20'>
      <HomeHero />
      <Episodes />
      <FeaturedGuests locale="ar" />
      <Testimonials />
    </div>
  )
}
