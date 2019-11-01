import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div``

const Nav = styled.nav`
  ul {
    padding: 0;
    list-style: none;
    display: flex;

    justify-content: flex-end;

    li {
      margin-right: 2em;

      :first-child {
        flex: 1;
      }
    }
  }
`

export function Header() {
  return (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <Link to="/">Kyle Pollich</Link>
          </li>
          <li>
            <Link to="/blog">Blog Posts</Link>
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
