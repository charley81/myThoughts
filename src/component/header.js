import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: var(--purple);
  font-size: 1rem;
  font-weight: {props => props.fontWeight || 'normal'}; /*This font doesn't have bold but leave here for future reference to passing props to css values */
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid var(--medium);
  }

  &:last-of-type {
    margin-right: 0;
  }
`

export default function Header() {
  return (
    <header
      css={css`
        background: var(--blue);
        border-bottom: 1px solid var(--green);
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      `}
    >
      <NavLink to="/" fontWeight="bold">
        myThoughtz
      </NavLink>
      <nav
        css={css`
          margin-top: 0;
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="current-page">
          About
        </NavLink>
      </nav>
    </header>
  )
}