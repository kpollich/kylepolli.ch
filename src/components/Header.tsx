import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ContentWrapper } from './ContentWrapper'

const Wrapper = styled.div``

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  border-bottom: 1px solid ${props => props.theme.colors.lightgrey};
  padding-bottom: 0.5rem;

  a {
    text-decoration: none;
    padding: 5px;
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
              <Link to="/blog" activeClassName="active">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
        </Nav>
      </ContentWrapper>
    </Wrapper>
  )
}
