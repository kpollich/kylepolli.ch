import React, { useState, SetStateAction } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Moon, Sun } from 'react-feather';

import { ContentWrapper } from './ContentWrapper';
import { theme } from '../styles/theme';
import { useColorTheme } from '../context/ColorTheme';

const Wrapper = styled.div``;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgrey};
  padding-bottom: 0.5rem;

  a {
    text-decoration: none;
    border-radius: 5px;

    &.active {
      background-color: ${(props) => props.theme.colors.lightgrey};
    }
  }

  span {
    flex: 1;
    margin-right: 1em;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: flex-end;
    margin: 0;

    li {
      margin-right: 1rem;

      button {
        border: none;
        background: none;
        color: inherit;
        display: flex;
      }

      a {
        padding: 5px;
      }
    }
  }
`;

export const Header: React.FunctionComponent = () => {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <Wrapper>
      <ContentWrapper>
        <Nav className="nav">
          <span>
            <Link href="/">
              <a>Kyle Pollich</a>
            </Link>
          </span>

          <ul>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>

            <li>
              <button
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
                    color={
                      colorTheme === 'dark'
                        ? theme.colors.white
                        : theme.colors.black
                    }
                  />
                ) : (
                  <Moon
                    style={{
                      visibility: colorTheme === null ? 'hidden' : 'visible',
                    }}
                  />
                )}
              </button>
            </li>
          </ul>
        </Nav>
      </ContentWrapper>
    </Wrapper>
  );
};
