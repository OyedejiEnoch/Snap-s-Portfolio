import { ParallaxScroll } from '@/components/ui/parallax-scroll'
import React from 'react'

const Pictures = () => {

    const images = [
        "/images/imagePic1.jpg",
        "/images/imagePic2.jpg",
        "/images/imagePic17.jpg",
        "/images/imagePic4.jpg",
        "/images/imagePic12.jpg",
        "/images/imagePic5.jpg",
        "/images/imagePic14.jpg",
        "/images/imagePic7.jpg",
        "/images/imagePic8.jpg",
        "/images/imagePic9.jpg",
        "/images/imagePic11.jpg",
        "/images/imagePic13.jpg",
       "/images/imagePic6.jpg",
        "/images/imagePic15.jpg",
        "/images/imagePic16.jpg",
        "/images/imagePic3.jpg",
        "/images/imagePic18.jpg",
        "/images/imagePic19.jpg",
        "/images/imagePic20.jpg",
        "/images/imagePic21.jpg",
        "/images/imagePic22.jpg",
       
      ];


  return (
    <section id="pictures" className="py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">Amazing takes</h2>

        <ParallaxScroll images={images} />
      </div>
    </section>
  )
}

export default Pictures
