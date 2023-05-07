import React from 'react'
import HeaderImage from '../public/assets/WeddingSoloPic.jpg'
import Image from 'next/image';
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

const About = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>{`blog: cobmin`}</title>
                </Head>
                <Container>
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            About Me
                        </h2>
                        <div className="flex flex-col my-3">
                            <Image src={HeaderImage} className="rounded-md" alt="Me in my tux at the botanical gardens hangry and ready to be done with pictures <3" />
                            <div className="text-sm italic">
                                <p className="text-gray-400">Me in my tux at the botanical gardens hangry and ready to be done with wedding pictures</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="text-base text-gray-600">
                                Hi there, My name is Jacob Huber, but you might know me as cobmin. That's my username, a name that combines "cob," which my friends call me, and "admin."
                            </p>
                            <p className="text-base text-gray-600 mt-4">
                                I currently work for a healthcare software company where I provide technical support for specific web applications. I have been doing this for a few years now and find it to be a nice place to work in comparison to what I was doing prior, Restaurant Management. I do miss the free Chipotle though.
                            </p>
                            <p className="text-base text-gray-600 mt-4">
                                When I'm not working, I love spending time with my wife. We enjoy traveling, exploring botanical gardens, and indulging in a good glass of wine. Personally, I'm quite passionate about blockchain technology, investing, and real estate. I also like watching ice hockey and am gradually getting back into exercising.
                            </p>
                            <p className="text-base text-gray-600 mt-4">
                                Since I was young, I have always had an interest in technology. At first, it was mostly focused on gaming, but as I grew older, I became interested in building my own things and learning about blockchain technology. I am constantly seeking new ways to improve my skills and knowledge in this field, with the ultimate goal of using my knowledge to help others and make a positive impact in the world.
                            </p>
                            <p className="text-base text-gray-600 mt-4">
                                Thank you for taking the time to get to know me a little better. I hope you enjoy reading my blog and learning from my experiences.
                            </p>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export default About