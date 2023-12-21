import HeaderImage from '../public/assets/HomeImage.jpg'
import Image from 'next/image';

const Intro = () => {
  return (
    <section className="flex flex-col items-center text-center mt-8 mb-8 md:mb-12">
      <Image src={HeaderImage} className="rounded-md" alt="Logo" />
      <h4 className="text-2xl mt-5">
        Hoping to help others by sharing my interests. Check out my posts below 👇
      </h4>
    </section>
  )
}

export default Intro
