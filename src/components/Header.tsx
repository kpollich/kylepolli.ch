import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ContentWrapper } from './ContentWrapper'
import { gradientStyles } from '../styles/theme'

const Wrapper = styled.div`
  ${gradientStyles};
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${props => props.theme.colors.white};

  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
      color: inherit;
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

    li {
      margin-right: 1rem;
    }
  }
`

const activeLinkStyles = {
  textDecoration: 'underline'
}

export function Header() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Nav>
          <span>
            <Link to="/">Kyle Pollich</Link>
          </span>

          <ul>
            <li>
              <Link to="/blog" activeStyle={activeLinkStyles}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/projects" activeStyle={activeLinkStyles}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" activeStyle={activeLinkStyles}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" activeStyle={activeLinkStyles}>
                Contact
              </Link>
            </li>
          </ul>
        </Nav>
      </ContentWrapper>
    </Wrapper>
  )
}
