import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'react-feather';
import colors from 'tailwindcss/colors';

import ContentWrapper from './ContentWrapper';
import { usePerfectDarkMode } from 'next-plugin-perfect-dark-mode';
import { useRouter } from 'next/router';

const NavLink: FunctionComponent<{ href: string; text: string }> = ({
  href,
  text,
}) => {
  const router = useRouter();

  // TODO: Probably a better check to do here
  const isActive = router.pathname.includes(href);

  return (
    <Link href={href}>
      <a
        className={`no-underline rounded p-2 ${isActive ? 'bg-gray-400' : ''}`}
      >
        {text}
      </a>
    </Link>
  );
};

export const Header = () => {
  const { mode, updateMode } = usePerfectDarkMode();

  return (
    <div>
      <ContentWrapper>
        <nav className="flex flex-wrap items-center border-b-1 border-gray-400">
          <span className="flex-1 mr-4">
            <NavLink href="/" text="Kyle Pollich" />
          </span>

          <ul className="p-0 list-none flex items-end m0">
            <li className="mr-1">
              <NavLink href="/blog" text="Blog" />
            </li>

            <li className="mr-1">
              <button
                className="border-none bg-none text-current flex"
                onClick={() =>
                  updateMode((mode) =>
                    mode === 'dark' ? colors.white : colors.black
                  )
                }
                title={
                  mode === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >
                {mode === 'dark' ? (
                  <Sun color={mode === 'dark' ? colors.white : colors.black} />
                ) : (
                  <Moon
                    style={{
                      visibility: mode === undefined ? 'hidden' : 'visible',
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
