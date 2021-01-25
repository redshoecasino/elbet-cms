import React from 'react'
import styled from 'styled-components'
import ElBetSvg from '../../public/el-bet/svg/Barrel.svg'

export const ElBetWordmark = styled(({ ...styleProps }) => {
  return (
    <a href="/" {...styleProps}>
      <h1>
        <ElBetSvg />
      </h1>
    </a>
  )
})`
  text-decoration: none;

  h1 {
    margin: 0;
    font-size: 1rem;
  }

  svg {
    height: 35px;
    width: auto;
    fill: inherit;
  }
`
