import Container from './container'
import Link from 'next/link';
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';
import NextJs from '../public/favicon/safari-pinned-tab.svg'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-400 py-4">
      <Container>
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <h4 className="text-sm leading-5 font-semibold text-gray-200 uppercase tracking-wider">Social Media</h4>
            <ul className="flex flex-wrap">
              <li>
                <Link href="https://twitter.com/cobmin" target="_blank" rel="noopener noreferrer" className="w-1/3 text-base leading-6 text-gray-300 hover:text-white" >
                  <FaTwitter className="w-6 h-6 m-1" />
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/loopring" target="_blank" rel="noopener noreferrer" className="w-1/3 text-base leading-6 text-gray-300 hover:text-white">
                  <FaDiscord className="w-6 h-6 m-1" />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/cobmin" target="_blank" rel="noopener noreferrer" className="w-1/3 text-base leading-6 text-gray-300 hover:text-white">
                  <FaGithub className="w-6 h-6 m-1" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <h4 className="text-sm leading-5 font-semibold text-gray-200 uppercase tracking-wider">Created With</h4>
            <ul className="flex flex-wrap">
              <li>
                <Link href="https://nextjs.org/learn/foundations/about-nextjs" target="_blank" rel="noopener noreferrer" className="w-1/3 text-base leading-6 text-gray-300 hover:text-white" >
                  <Image src={NextJs} alt='NextJs Logo' className="w-6 h-6 m-1" />
                </Link>
              </li>
              <li>
                <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="w-1/3 text-base leading-6 text-gray-300 hover:text-white">
                  <svg viewBox="0 0 50 31" className="m-1 text-slate-900 dark:text-white w-auto h-5"><path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path></svg>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/cobmin/nextjstypescript" target="_blank" rel="noopener noreferrer" className="w-1/3 text-base leading-6 text-gray-300 hover:text-white">
                  <FaGithub className="w-6 h-6 m-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
