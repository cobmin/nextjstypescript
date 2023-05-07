import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline'

const NavItem = ({ href, text }) => (
    <li className="mx-4">
        <Link href={href} className="text-gray-800 hover:text-gray-500">
            {text}
        </Link>
    </li>
);

const Navbar = () => (
    <nav className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-800 ml-4">
                <HomeIcon className="h-6 w-6" />
            </Link>
            <ul className="flex">
                <NavItem href="/about" text="About" />
                {/* <NavItem href="/blog" text="Blog" /> */}
            </ul>
        </div>
    </nav>
);

export default Navbar;
