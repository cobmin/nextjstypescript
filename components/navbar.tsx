import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Import icons
import { useTheme } from '../contexts/ThemeContext';

const NavItem = ({ href, text }) => (
    <li className="mx-4">
        <Link className="text-secondary-text-hover" href={href}>
            {text}
        </Link>
    </li>
);

const Navbar = () => {
    const { theme, toggleTheme } = useTheme(); // Use theme and toggleTheme

    return (
        <nav className="bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-2xl font-boldml-4" href="/">
                    <HomeIcon className="h-6 w-6" />
                </Link>
                <div className="flex items-center">
                    <ul className="flex">
                        <NavItem href="/about" text="About" />
                        {/* Other NavItems */}
                    </ul>
                    <button onClick={toggleTheme} className="ml-4">
                        {theme === 'dark' ? (
                            <MoonIcon className="h-6 w-6 text-light-text dark:text-dark-text" />
                        ) : (
                            <SunIcon className="h-6 w-6 text-light-text dark:text-dark-text" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
