import Head from 'next/head'
import { useRouter } from 'next/router';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = ({ title, description, imageUrl }) => {
  const router = useRouter();
  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;
  const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_BASE_URL}${imageUrl}` : HOME_OG_IMAGE_URL;


  return (
    <Head>
      <title>{title || 'cobmins stuff'}</title>
      <meta name="description" content={description || 'Hoping to help others by sharing my interests.'} />
      <meta property="og:title" content={title || 'cobmins stuff'} />
      <meta property="og:description" content={description || 'Hoping to help others by sharing my interests.'} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={currentUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'cobmins stuff'} />
      <meta name="twitter:description" content={description || 'Hoping to help others by sharing my interests.'} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@cobmin" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  )
}

export default Meta
