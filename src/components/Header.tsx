import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { Moon, Sun } from 'react-feather';
import colors from 'tailwindcss/colors';

import { useColorTheme } from '../context/ColorThemeContext';
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
        className={`no-underline rounded p-2 text-lg hover:text-cyan-600 ${
          hasActiveState && isActive ? 'bg-gray-400' : ''
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export const Header = () => {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div>
      <ContentWrapper>
        <nav className="flex flex-wrap items-center text-lg">
          <span className="flex-1 mr-4">
            <NavLink href="/" text="Kyle Pollich" />
          </span>

          <ul className="p-0 list-none flex items-end m0">
            <li className="mr-1">
              <NavLink href="/blog" text="Blog" hasActiveState />
            </li>

            <li className="mr-1">
              <button
                className="border-none bg-none text-current flex"
                onClick={() =>
                  setColorTheme(colorTheme === 'light' ? 'dark' : 'light')
                }
                title={
                  colorTheme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >
                {colorTheme === 'dark' ? (
                  <Sun
                    color={colorTheme === 'dark' ? colors.white : colors.black}
                  />
                ) : (
                  <Moon
                    style={{
                      visibility:
                        colorTheme === undefined ? 'hidden' : 'visible',
                    }}
                  />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </ContentWrapper>
    </div>
  );
};
