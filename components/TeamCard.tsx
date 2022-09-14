import React, { useState } from 'react'
import clsx from 'clsx'
import TeamLogo from './TeamLogo'
import { OfficialNFLTeamAbbreviations } from '@/types/nfl'

export type TeamCardProps = {
  team: OfficialNFLTeamAbbreviations
  side: 'home' | 'away'
  spread: number
}

const TeamCardTeamInfo = ({ team, side }) => (
  <div className="flex items-center">
    <div className="flex h-32 w-32 items-center justify-center">
      <TeamLogo team={team} />
    </div>
    <h2 className="h-full rotate-180 border-r border-l text-center text-3xl uppercase vertical-lr">
      {side}
    </h2>
  </div>
)

const TeamCardMeta = ({ spread, records }) => (
  <div className="flex  divide-x px-2">
    <div className="flex flex-col">
      <span className="text-lg text-gray-400">Spread</span>
      <span className="text-xl font-bold">-5.5</span>
    </div>
    <div className="flex flex-col pl-4">
      <span className="text-lg text-gray-400">Spread</span>
      <span className="text-xl font-bold">-5.5</span>
    </div>
  </div>
)

const TeamCardAction = ({ actionText }) => (
  <div className="flex h-full w-64 items-center justify-center border-r bg-gray-100">
    <button
      type="button"
      className="inline-flex items-center rounded-sm border border-transparent
            bg-gray-600 px-6 py-3 text-base font-medium uppercase tracking-wider text-white shadow-sm
            hover:bg-gray-700 focus:outline-none"
    >
      {actionText}
    </button>
  </div>
)

const TeamCard = ({ team, side, spread }: TeamCardProps) => {
  const [isSelected, setIsSelected] = useState()
  const actionText = spread < 0 ? 'underdog' : 'favored'
  return (
    <div className="relative flex h-32 items-center border">
      <TeamCardTeamInfo team={team} side={side} />
      {/* Action */}
      <TeamCardAction actionText={actionText} />
      {/* Meta Info */}
      <TeamCardMeta />
    </div>
  )
}

export default TeamCard
