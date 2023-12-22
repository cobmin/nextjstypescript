import Container from './container'
import Link from 'next/link';
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';
import { DiscordUrl, TwitterUrl } from '../lib/constants';

const Footer = () => {
  return (
    <footer className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text py-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
          <div>
            <h4 className="text-sm leading-5 font-semibold uppercase tracking-wider">Social Media</h4>
            <div className="flex justify-start md:justify-start items-center space-x-4 mt-2">
              <Link href={TwitterUrl} passHref target="_blank" rel="noopener noreferrer" className="hover:text-light-accent">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href={DiscordUrl} passHref target="_blank" rel="noopener noreferrer" className="hover:text-light-accent">
                <FaDiscord className="w-6 h-6" />
              </Link>
              <Link href="https://github.com/cobmin" passHref target="_blank" rel="noopener noreferrer" className="hover:text-light-accent">
                <FaGithub className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <h4 className="text-sm leading-5 font-semibold uppercase tracking-wider">Top Reads</h4>
            <ul className="mt-2">
              <li>
                <Link href="/posts/Maize-Empowering-NFT-Creators" className="text-base leading-6 hover:underline">
                  Maize: Empowering NFT Creators
                </Link>
              </li>
              <li>
                <Link href="/posts/Introducing-Alpha-Fields" className="text-base leading-6 hover:underline">
                  Introducing Alpha Fields
                </Link>
              </li>
              <li>
                <Link href="/posts/Bring-Pixel-Art-to-Life" className="text-base leading-6 hover:underline">
                  Bring Pixel Art to Life
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h4 className="text-sm leading-5 font-semibold uppercase tracking-wider">Other Websites</h4>
            <ul className="mt-2">
              <li>
                <Link href="https://maizehelps.art/" passHref target="_blank" rel="noopener noreferrer" className="text-base leading-6 hover:underline">
                  Maize Helps Art
                </Link>
              </li>
              <li>
                <Link href="https://www.cobsfarm.com/" passHref target="_blank" rel="noopener noreferrer" className="text-base leading-6 hover:underline">
                  Cob's Farm
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm leading-5 font-semibold uppercase tracking-wider">Contact Me</h4>
          <p className="text-base leading-6">
            Have questions or want to collaborate? Feel free to reach out!
          </p>
          <a href="mailto:jacob-huber@outlook.com" className="underline hover:underline">
            jacob-huber@outlook.com
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;

