import React from 'react'
import { Meta, Story } from '@storybook/react'
import TeamLogo, { TeamLogoProps } from '../TeamLogo'

const meta: Meta = {
  title: 'Elements/Team Logo',
  component: TeamLogo,
  decorators: [
    Story => (
      <div className="h-[124px] w-[124px]">
        <Story />
      </div>
    ),
  ],
}

export default meta

const Template: Story<TeamLogoProps> = args => <TeamLogo {...args} />

export const Default = Template.bind({})
Default.args = {
  team: 'ATL',
}
