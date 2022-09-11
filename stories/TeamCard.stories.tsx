import React from 'react'
import Box from '@mui/material/Box'
import { Meta, Story } from '@storybook/react'
import TeamCard, { TeamCardProps } from '../components/TeamCard'

const meta: Meta = {
  title: 'Elements/Team Card',
  component: TeamCard,
}

export default meta

const Template: Story<TeamCardProps> = args => <TeamCard {...args} />

export const Default = Template.bind({})
Default.args = {
  team: 'ATL',
  side: 'home',
}
