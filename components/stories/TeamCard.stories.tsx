import React from 'react'
import { Meta, Story } from '@storybook/react'
import TeamCard, { TeamCardProps } from '../TeamCard'

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
