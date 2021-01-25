import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '.'
import { DynamicLink } from './DynamicLink'
import data from '../../content/navigation.json'
import { SearchContainer } from '../search/styles'
import Search from '../search'
import { searchIndices } from '../search/indices'

interface NavProps {
  color?: 'white' | 'secondary' | 'seafoam' | 'light'
  open: boolean
}

export const HeaderNav = styled(
  React.memo(({ color, ...styleProps }: NavProps) => {
    return (
      <ul {...styleProps}>
        {data &&
          data.map(({ id, href, label }) => {
            return (
              <li key={id}>
                <DynamicLink href={href} passHref>
                  <Button as="a" color="variable">
                    {label}
                  </Button>
                </DynamicLink>
              </li>
            )
          })}
        <li key="nav-search">
          <Search collapse indices={searchIndices} />
        </li>
      </ul>
    )
  })
)`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;

  li {
    position: relative;
    margin: 0 0.25rem;
  }

  a {
    border: 0px;
    font-family: var(--font-header-nav);
  }

  iframe {
    margin: 1.5rem 3.5rem 0.5rem 1.25rem;
    display: block;

    @media (min-width: 685px) {
      display: none;
    }
  }

  @media (max-width: 799px) {
    ${Button} {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 800px) {
    li {
      margin: 0 0.5rem;
    }
  }

  --color-background: var(--nav-item-color-primary);
  --color-foreground: var(--color-primary);

  ${props =>
    props.color &&
    props.color === 'secondary' &&
    css`
      --color-background: var(--color-secondary);
      --color-foreground: var(--color-primary);
    `};

  ${props =>
    props.color &&
    props.color === 'seafoam' &&
    css`
      --color-background: var(--color-seafoam);
      --color-foreground: var(--color-primary);
    `};

  ${props =>
    props.color &&
    props.color === 'light' &&
    css`
      --color-background: var(--color-light);
      --color-foreground: var(--color-primary);

      ${Button}, ${SearchContainer} {
        border: 1px solid var(--color-light-dark);
      }
    `};
`
