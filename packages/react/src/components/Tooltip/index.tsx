import * as TooltipRUI from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  text: string
}

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <TooltipRUI.Provider delayDuration={100}>
      <TooltipContainer>
        <TooltipRUI.Trigger asChild>{children}</TooltipRUI.Trigger>
        <TooltipRUI.Portal>
          <TooltipContent sideOffset={8}>
            {text}
            <TooltipArrow />
          </TooltipContent>
        </TooltipRUI.Portal>
      </TooltipContainer>
    </TooltipRUI.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
