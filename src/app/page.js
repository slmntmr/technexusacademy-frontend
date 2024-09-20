// "Welcome" bileşeni, hakkımızda sayfasındaki hoş geldiniz mesajını veya tanıtımı gösterir.
import Welcome from '@/components/about/welcome'

// "Spacer" bileşeni, sayfada görsel boşluklar yaratmak için kullanılır.
import Spacer from '@/components/common/spacer'

// "FeaturedCourses" bileşeni, öne çıkan kursları sergiler.
import FeaturedCourses from '@/components/home/featured-courses'

// "MobileApp" bileşeni, kullanıcıları mobil uygulama indirmeye teşvik eden butonlar gösterir.
import MobileApp from '@/components/home/mobile-app'

// "Slider" bileşeni, sayfanın en üst kısmında büyük resimlerle kaydırmalı bir görsel sunar.
import Slider from '@/components/home/slider'

// "UpcomingEvents" bileşeni, yakında gerçekleşecek etkinlikleri listeler.
import UpcomingEvents from '@/components/home/upcoming-events'

// React kütüphanesini içe aktarıyoruz.
import React from 'react'

const Page = () => {
  return (
    <>
      {/* Slider bileşeni sayfanın en üst kısmında görselleri gösterir */}
      <Slider/>

      {/* Spacer bileşeni ile Slider ve Welcome arasında boşluk bırakılır */}
      <Spacer/>

      {/* Welcome bileşeni, hoş geldiniz mesajını gösterir */}
      <Welcome/>

      {/* Spacer bileşeni ile Welcome ve FeaturedCourses arasında boşluk bırakılır */}
      <Spacer/>

      {/* FeaturedCourses bileşeni öne çıkan kursları sergiler */}
      <FeaturedCourses/>

      {/* Spacer bileşeni ile FeaturedCourses ve UpcomingEvents arasında boşluk bırakılır */}
      <Spacer/>

      {/* UpcomingEvents bileşeni yaklaşan etkinlikleri gösterir */}
      <UpcomingEvents/>

      {/* Spacer bileşeni ile UpcomingEvents ve MobileApp arasında boşluk bırakılır */}
      <Spacer/>

      {/* MobileApp bileşeni mobil uygulama indirme seçeneklerini gösterir */}
      <MobileApp/>
    </>
  )
}

// Page bileşeni dışa aktarılıyor, böylece başka yerlerde kullanılabilir.
export default Page
