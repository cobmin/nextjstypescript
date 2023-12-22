import HeaderImage from '../public/assets/HomeImage.jpg'
import Image from "next/legacy/image";

const Intro = () => {
  return (
    <section className="flex flex-col items-center text-center mt-8 mb-8">
      <Image
        src={HeaderImage}
        className="rounded-md"
        alt="A welcoming image representing the theme of the blog"
      />
      <h1 className="text-3xl md:text-4xl mt-5 max-w-2xl mx-auto font-bold">
        Sharing insights and experiences
      </h1>
      <p className="text-xl mt-4">
        Hoping to help others by sharing my interests. Check out my stuff below 👇
      </p>
    </section>
  )
}

export default Intro
