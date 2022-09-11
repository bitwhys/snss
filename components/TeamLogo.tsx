import React, { forwardRef, SVGProps, Ref } from 'react'
import { OfficialNFLTeamAbbreviations } from '../types/nfl'
import styled from '@emotion/styled'
import logoPaths from './logoPaths'

export type TeamLogoProps = {
  // The short code for an NFL team (e.g. ATL)
  team: OfficialNFLTeamAbbreviations
  muted?: boolean
  [prop: string]: any
}

const Svg = styled.svg<{ muted: boolean }>`
  fill: none;
  filter: ${p => (p.muted ? 'grayScale(1)' : '')};
`

const TeamLogo = ({ team, muted = false, ...props }: TeamLogoProps) => {
  const Logo = logoPaths[team]
  console.log(Logo)
  return (
    <Svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      muted={muted}
      {...props}
    >
      <Logo />
    </Svg>
  )
}
export default TeamLogo
