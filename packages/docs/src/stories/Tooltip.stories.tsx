import { Button, Tooltip, TooltipProps } from '@rubensback-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    text: 'Some tooltip text here.',
    children: <Button css={{ marginTop: 50 }}>Please hover on me!</Button>,
  },
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
