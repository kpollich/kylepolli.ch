import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div``

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a {
    flex: 1;
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

export function Header() {
  return (
    <Wrapper>
      <Nav>
        <Link to="/">Kyle Pollich</Link>

        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  )
}
