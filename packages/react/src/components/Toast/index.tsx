import * as ToastRUI from '@radix-ui/react-toast'
import { useContext } from 'react'
import { ToastContext } from '../../contexts/ToastContext'
import {
  CloseButton,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'

export interface ToastProps {
  id: string
  title: string
  subtitle: string
}

export function Toast({ id, title, subtitle }: ToastProps) {
  const { removeToast } = useContext(ToastContext)

  const closeToast = (isOpen: boolean) => {
    if (!isOpen) removeToast(id)
  }

  return (
    <div>
      <ToastContainer onOpenChange={closeToast}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{subtitle}</ToastDescription>
        <ToastRUI.Close asChild>
          <CloseButton />
        </ToastRUI.Close>
      </ToastContainer>
    </div>
  )
}
