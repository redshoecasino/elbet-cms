import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import ElBetIconSvg from '../../public/el-bet/svg/EdwardEngland.svg'

interface ElBetIconProps {
  docs?: boolean
  styleProps?: any
}

export const ElBetIcon = styled(({ docs, ...styleProps }: ElBetIconProps) => {
  const link = docs ? '/docs' : '/'

  return (
    <Link href={link}>
      <a {...styleProps}>
        <h1>
          <ElBetIconSvg />
          {docs && <span>Games</span>}
        </h1>
      </a>
    </Link>
  )
})`
  text-decoration: none;
  fill: var(--color-primary);

  h1 {
    margin: 0;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 1rem;
    font-family: var(--font-default);
    color: var(--color-primary);
  }

  svg {
    height: 40px;
    width: auto;
  }
`
