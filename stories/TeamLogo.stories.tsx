import React from 'react'
import Box from '@mui/material/Box'
import { Meta, Story } from '@storybook/react'
import TeamLogo, { TeamLogoProps } from '../components/TeamLogo'

const meta: Meta = {
  title: 'Elements/Team Logo',
  component: TeamLogo,
  decorators: [
    Story => (
      <Box sx={{ width: 124, height: 124 }}>
        <Story />
      </Box>
    ),
  ],
}

export default meta

const Template: Story<TeamLogoProps> = args => <TeamLogo {...args} />

export const Default = Template.bind({})
Default.args = {
  team: 'ATL',
}
