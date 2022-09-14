import React, { forwardRef, SVGProps, Ref } from 'react'
import { OfficialNFLTeamAbbreviations } from '@/types/nfl'
import clsx from 'clsx'
import logoPaths from './logoPaths'

export type TeamLogoProps = {
  // The short code for an NFL team (e.g. ATL)
  team: OfficialNFLTeamAbbreviations
  muted?: boolean
  [prop: string]: any
}

const TeamLogo = ({ team, muted = false, ...props }: TeamLogoProps) => {
  const Logo = logoPaths[team]
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('h-full w-full', muted ? 'filter' : '')}
      {...props}
    >
      <Logo />
    </svg>
  )
}
export default TeamLogo
