import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipContent = styled(Tooltip.Content, {
  color: '$gray100',
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: 6,
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
