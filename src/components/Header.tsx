import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';
import colors from 'tailwindcss/colors';

import ContentWrapper from './ContentWrapper';

const NavLink: FunctionComponent<{
  href: string;
  text: string;
  hasActiveState?: boolean;
}> = ({ href, text, hasActiveState = false }) => {
  const router = useRouter();

  // TODO: Probably a better check to do here
  const isActive = router.pathname.includes(href);

  return (
    <Link href={href}>
      <a
        className={`no-underline text-lg hover:text-cyan-600 font-semibold ${
          hasActiveState && isActive ? 'border-b-2 border-cyan-600' : ''
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <ContentWrapper>
        <nav className="flex flex-wrap items-center text-lg my-4 mx-auto max-w-screen-lg">
          <span className="flex-1 mr-4">
            <NavLink href="/" text="Kyle Pollich" />
          </span>

          <ul className="p-0 list-none flex items-center m0">
            <li className="mr-3">
              <NavLink href="/blog" text="Blog" hasActiveState />
            </li>

            <li>
              <button
                className="border-none dark:bg-gray-600 bg-gray-300 p-1 rounded text-current flex"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                title={
                  theme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >
                {isMounted &&
                  (theme === 'dark' ? (
                    <Sun
                      color={theme === 'dark' ? colors.white : colors.black}
                    />
                  ) : (
                    <Moon />
                  ))}
              </button>
            </li>
          </ul>
        </nav>
      </ContentWrapper>
    </div>
  );
};
