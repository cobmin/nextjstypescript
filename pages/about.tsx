import React from 'react'
import About from '../components/about'
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>{`about`}</title>
                </Head>
                <Container>
                    <About />
                </Container>
            </Layout>
        </div>
    )
}

export default AboutPage