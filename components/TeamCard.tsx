import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TeamLogo from './TeamLogo'
import { OfficialNFLTeamAbbreviations } from '../types/nfl'

export type TeamCardProps = {
  team: OfficialNFLTeamAbbreviations
  side: 'home' | 'away'
}

const TeamCard = ({ team, side }: TeamCardProps) => {
  const [isSelected, setIsSelected] = useState()
  return (
    <Box height={125} border={1} display="flex" alignItems="center">
      <Box sx={{ width: 124, height: 124 }}>
        <TeamLogo team={team} />
      </Box>
      <Typography
        sx={{
          fontSize: 32,
          writingMode: 'vertical-lr',
          textTransform: 'uppercase',
        }}
      >
        {side}
      </Typography>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="gray.100"
      >
        <Button>underdog</Button>
      </Box>
      <Stack>
        <Box></Box>
        <Box></Box>
      </Stack>
    </Box>
  )
}

export default TeamCard
