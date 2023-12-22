import React from 'react'
import HeaderImage from '../public/assets/WeddingSoloPic.jpg'
import Image from "next/legacy/image";
import { DiscordUrl, TwitterUrl } from '../lib/constants';

const About = () => {
    return (
        <>
            <div className="text-light-text dark:text-dark-text max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    About Me
                </h2>
                <div className="mt-3">
                    <p className="text-base">
                        Hi there, My name is Jacob Huber, but you might know me as cobmin. That's my username, a name that combines "cob," which my friends call me, and "admin."
                    </p>
                    <div className="flex flex-col my-3">
                        <Image src={HeaderImage} className="rounded-md" alt="Me in my tux at the botanical gardens hangry and ready to be done with pictures <3" />
                        <div className="text-sm italic">
                            <p>Me at the botanical gardens taking a wedding picture</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-6">Professional Journey</h3>
                    <p className="text-base mt-4">
                        I currently work for a healthcare company as a software engineer who provides custom solutions for customer business needs. I also help our clients work with our APIs. I have been doing this for a few years now and find it to be a nice place to work in comparison to what I was doing prior, Restaurant Management. I do miss the free Chipotle though. Transitioning from restaurant management to software engineering, I've found that skills in team management and customer service have been invaluable in understanding and addressing client needs in the tech world.
                    </p>

                    <h3 className="text-2xl font-bold mt-6">Personal Interests</h3>
                    <p className="text-base mt-4">
                        When I'm not working, I love spending time with my wife and various activities. My wife and I enjoy traveling, exploring botanical gardens, and indulging in a good glass of wine. Personally, I'm quite passionate about blockchain technology, investing, and real estate. I also like watching ice hockey and am gradually getting back into exercising.
                    </p>

                    <h3 className="text-2xl font-bold mt-6">Passion for Technology</h3>
                    <p className="text-base mt-4">
                        Since I was young, I have always had an interest in technology. At first, it was mostly focused on gaming, but as I grew older, I became interested in building my own things and learning about blockchain technology. I am constantly seeking new ways to improve my skills and knowledge in this field, with the ultimate goal of using my knowledge to help others and make a positive impact in the world.
                    </p>
                    <p className="text-base mt-4">
                        I made <a
                            href={`https://maizehelps.art/`}
                            className="link-light dark:link-dark"
                        >
                            Maize
                        </a>, an NFT toolkit that helps users create and manage NFTs on Loopring. I also have started making{' '}
                        <a
                            href={`https://www.cobsfarm.com/`}
                            className="link-light dark:link-dark"
                        >
                            Cob's Farm
                        </a>, a pixel art game in{' '}
                        <a
                            href={`https://www.cobmin.com/posts/Bring-Pixel-Art-to-Life`}
                            className="link-light dark:link-dark"
                        >
                            LooperLands
                        </a>.
                    </p>

                    <h3 className="text-2xl font-bold mt-6">Thank You</h3>
                    <p className="text-base mt-4">
                        Thank you for taking the time to get to know me a little better. I hope you enjoy reading my blog and learning from my experiences.
                    </p>
                    <p className="text-base mt-4">
                        If you're interested in Blockchain, NFTs, or just want to follow along with my adventures, feel free to connect with me on
                        {' '}<a
                            href={TwitterUrl}
                            className="link-light dark:link-dark"
                        >
                            Twitter
                        </a> or
                        {' '}<a
                            href={DiscordUrl}
                            className="link-light dark:link-dark"
                        >
                            Discord
                        </a>. I'm always excited to share insights and learn from others in the community.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About