import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ContentWrapper } from './ContentWrapper'

const Wrapper = styled.div`
  background: rgb(232, 232, 232);
  background: linear-gradient(
    321deg,
    rgba(232, 232, 232, 1) 50%,
    rgba(115, 130, 144, 1) 50%
  );
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  span {
    flex: 1;
    color: ${props => props.theme.colors.white};
  }

  ul {
    color: ${props => props.theme.colors.black};
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
      <ContentWrapper>
        <Nav>
          <span>
            <Link to="/">Kyle Pollich</Link>
          </span>

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
      </ContentWrapper>
    </Wrapper>
  )
}
