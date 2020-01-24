import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import useDarkMode from 'use-dark-mode'
import { Moon, Sun } from 'react-feather'

import { ContentWrapper } from './ContentWrapper'
import { theme } from '../styles/theme'

const Wrapper = styled.div``

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.lightgrey};
  padding-bottom: 0.5rem;

  a {
    text-decoration: none;
    border-radius: 5px;

    &.active {
      background-color: ${props => props.theme.colors.lightgrey};
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
`

export function Header() {
  const darkMode = useDarkMode()

  return (
    <Wrapper>
      <ContentWrapper>
        <Nav className="nav">
          <span>
            <Link to="/">Kyle Pollich</Link>
          </span>

          <ul>
            <li>
              <Link to="/blog" activeClassName="active">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={darkMode.toggle}
                title={
                  darkMode.value
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >
                {darkMode.value ? (
                  <Sun
                    color={
                      darkMode.value ? theme.colors.white : theme.colors.black
                    }
                  />
                ) : (
                  <Moon />
                )}
              </button>
            </li>
          </ul>
        </Nav>
      </ContentWrapper>
    </Wrapper>
  )
}
