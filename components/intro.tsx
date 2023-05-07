import HeaderImage from '../public/assets/HomeImage.jpg'
import Image from 'next/image';

const Intro = () => {
  return (
    <section className="flex-col items-center md:justify-between mt-8 mb-8 md:mb-12">
      <Image src={HeaderImage} className="rounded-md" alt="Logo" />
      <h4 className="text-center md:text-left text-2xl mt-5">
        Hoping to help others by sharing my interests. Check out my blog posts below 👇
      </h4>
    </section>
  )
}

export default Intro
