import {
  Button,
  Toast,
  ToastContext,
  ToastContextProvider,
  ToastProps,
} from '@rubensback-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'
import { useContext } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    subtitle: 'Quarta-feira, 23 de Outubro às 16h',
  },
  decorators: [
    (_, { args: { title, subtitle } }) => {
      const { addToast } = useContext(ToastContext)
      return (
        <Button onClick={() => addToast({ title, subtitle })}>
          Create Toast
        </Button>
      )
    },
    (Story) => {
      return (
        <ToastContextProvider>
          <Story />
        </ToastContextProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
